import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from 'src/app/components/title/title.component';
import { BooksService } from 'src/app/services/books.service';
import { SearchBooksRequest } from './books-request.model';
import { SearchBooksResponseItem } from './books-response.model';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [CommonModule, TitleComponent, MatPaginatorModule],
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit{
  @Input({required: true}) pageTitle: string = '';

  readonly elementsPerPage: number = 5;
  pageIndex: number = 0;
  allElements: number = 0;
  numberOfPages: number = 0;
  books: SearchBooksResponseItem[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this._makeRequest();
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this._makeRequest();
  }

  private _makeRequest() {
    var params: SearchBooksRequest = {
      q: 'harry potter',
      startIndex: this.elementsPerPage * this.pageIndex,
      maxResults: this.elementsPerPage,
    }
    this.booksService.getBooksByTitle(params).subscribe(result => {
      this.allElements = result.totalItems;
      this.books = result.items;
      this.numberOfPages = Math.ceil(this.allElements / this.elementsPerPage);
      console.log(this.books,'allElements', this.allElements,'numberOfPages',this.numberOfPages);
    });
  }
}
