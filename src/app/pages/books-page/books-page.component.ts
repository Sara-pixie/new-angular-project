import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from 'src/app/components/title/title.component';
import { BooksService } from 'src/app/services/books.service';
import { SearchBooksProjection, SearchBooksRequest } from './books-request.model';
import { SearchBooksResponseItem } from './books-response.model';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarClasses, SnackBarHorizontalPosition, SnackBarVerticalPosition } from 'src/app/services/api.service';
import { BookCardComponent } from 'src/app/components/book-card/book-card.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TitleComponent,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
    TranslateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BookCardComponent,
  ],
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit{
  @Input({required: true}) pageTitle: string = '';

  searchPannelOpen: boolean = true;
  searchForm!: FormGroup;

  readonly elementsPerPage: number = 5;
  pageIndex: number = 0;
  allElements: number = 0;
  numberOfPages: number = 0;
  books: SearchBooksResponseItem[] = [];

  constructor(
    private booksService: BooksService,
    private _snackBar: MatSnackBar,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this._initSearchForm();
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this._makeRequest();
  }

  onSearch() {
    this._makeRequest();
  }

  onBookClick(bookId: string) {
    console.log("Book card click ID:", bookId);
  }

  private _makeRequest() {
    var params: SearchBooksRequest = {
      q: this.searchForm.get('keyword')?.value,
      startIndex: this.elementsPerPage * this.pageIndex,
      maxResults: this.elementsPerPage,
      projection: SearchBooksProjection.LITE
    }
    this.booksService.getBooksByTitle(params).subscribe(result => {
      this.allElements = result.totalItems;
      this.books = result.items;
      this.numberOfPages = Math.ceil(this.allElements / this.elementsPerPage);
      console.log(this.books,'allElements', this.allElements,'numberOfPages',this.numberOfPages);
      if(this.books.length) {
        this.searchPannelOpen = false;
      } else {
        this._snackBar.open(this.translate.instant("PAGES.BOOKS.SEARCH.NO_BOOKS_FOUND"),
        this.translate.instant("PAGES.BOOKS.SEARCH.CLOSE_BTN"),
        {
          duration: 10000,
          horizontalPosition: SnackBarHorizontalPosition.CENTER,
          verticalPosition: SnackBarVerticalPosition.BOTTOM,
          panelClass: SnackBarClasses.NOTICE,
        });
      }
    });
  }

  private _initSearchForm() {
    this.searchForm = new FormGroup({
      keyword: new FormControl('', Validators.required)
    });
  }
}
