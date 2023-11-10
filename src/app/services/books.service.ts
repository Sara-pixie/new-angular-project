import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { SearchBooksRequest } from '../pages/books-page/books-request.model';
import { SearchBooksResponse, SearchBooksResponseItem } from '../pages/books-page/books-response.model';

export const STORAGE_BOOK_SEARCH_INFO = 'STORAGE_BOOK_SEARCH_INFO';
export interface StorageBookSearchInfo {
  paginationData: {
    pageIndex: number;
    allElements: number;
    numberOfPages: number;
  },
  searchFormValues: any,
  books: SearchBooksResponseItem[];
}


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private storageBookSearchInfo?: StorageBookSearchInfo;

  constructor(private api: ApiService) { }

  getBooksByTitle(params: SearchBooksRequest): Observable<SearchBooksResponse> {
    return this.api.request('searchBooks', null, params);
  }

  setBookSearchInfo(info: StorageBookSearchInfo) {
    this.storageBookSearchInfo = info;
  }
  getBookSearchInfo(): StorageBookSearchInfo|undefined {
    return this.storageBookSearchInfo;
  }
  removeBookSearchInfo() {
    this.storageBookSearchInfo = undefined;
  }
}
