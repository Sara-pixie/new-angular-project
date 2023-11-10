import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { BooksService } from "../services/books.service";
import { inject } from "@angular/core";
import { BookDetailRequest } from "../pages/books-page/books-request.model";
import { catchError, of } from "rxjs";
import { SearchBooksResponseItem } from "../pages/books-page/books-response.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarClasses, SnackBarHorizontalPosition, SnackBarVerticalPosition } from "../services/api.service";

export const BookDetailResolver: ResolveFn<SearchBooksResponseItem|null> =(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  booksService: BooksService = inject(BooksService),
  router: Router = inject(Router),
  _snackBar: MatSnackBar = inject(MatSnackBar),
) => {
    if(!route.paramMap.get('id') || !route.paramMap.get('title')) {
      _snackBar.open('No Book ID provided','Dismiss'),{
        duration: 5000,
        horizontalPosition: SnackBarHorizontalPosition.RIGHT,
        verticalPosition: SnackBarVerticalPosition.TOP,
        panelClass: SnackBarClasses.ERROR,
      };
      router.navigate(['books']);
      return of(null);
    }
    const params: BookDetailRequest = {
      volumeId: route.paramMap.get('id')!,
      q: route.paramMap.get('title')!,
    }
    return booksService.getBookDetails(params).pipe(
      catchError((err) => {
       router.navigate(['books']);
       return of(null);
      })
    );
};
