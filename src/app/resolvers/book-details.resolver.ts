import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { BooksService } from "../services/books.service";
import { inject } from "@angular/core";
import { of } from "rxjs";
import { SearchBooksResponseItem } from "../pages/books-page/books-response.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarClasses, SnackBarHorizontalPosition, SnackBarVerticalPosition } from "../services/api.service";

export const BookDetailResolver: ResolveFn<SearchBooksResponseItem|null> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  booksService: BooksService = inject(BooksService),
  router: Router = inject(Router),
  snackBar: MatSnackBar = inject(MatSnackBar),
) => {
    if(!route.paramMap.get('id')) {
      snackBar.open('No book ID provided','Dismiss'),{
        duration: 1000,
        horizontalPosition: SnackBarHorizontalPosition.RIGHT,
        verticalPosition: SnackBarVerticalPosition.TOP,
        panelClass: SnackBarClasses.ERROR,
      };
      router.navigate(['books']);
      return of(null);
    }
    if(!booksService.getBookSearchInfo()) {
      snackBar.open('No book data found','Dismiss'),{
        duration: 1000,
        horizontalPosition: SnackBarHorizontalPosition.RIGHT,
        verticalPosition: SnackBarVerticalPosition.TOP,
        panelClass: SnackBarClasses.ERROR,
      };
      router.navigate(['books']);
      return of(null);
    }
    const bookId: string = route.paramMap.get('id')!;
    const book: SearchBooksResponseItem|undefined =  booksService.getBookSearchInfo()!.books.find(book => book.id === bookId);
    if(book) {
      return of(book);
    } else {
      snackBar.open('No book data found','Dismiss'),{
        duration: 1000,
        horizontalPosition: SnackBarHorizontalPosition.RIGHT,
        verticalPosition: SnackBarVerticalPosition.TOP,
        panelClass: SnackBarClasses.ERROR,
      };
      router.navigate(['books']);
      return of(null);
    }
};
