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
  getBookById(volumeId: string): Observable<SearchBooksResponseItem> {
    return this.api.request('getBookDetail', null, null, {volumeId});
  }

  setBookSearchInfo(info: StorageBookSearchInfo) {
    this.storageBookSearchInfo = info;
    localStorage.setItem(STORAGE_BOOK_SEARCH_INFO, JSON.stringify(this.storageBookSearchInfo));
  }
  getBookSearchInfo(): StorageBookSearchInfo|undefined {
    if(!this.storageBookSearchInfo) {
      const storedData = localStorage.getItem(STORAGE_BOOK_SEARCH_INFO);
      if(storedData) {
        this.storageBookSearchInfo = JSON.parse(storedData);
      }
    }
    return this.storageBookSearchInfo;
  }
  removeBookSearchInfo() {
    this.storageBookSearchInfo = undefined;
    localStorage.removeItem(STORAGE_BOOK_SEARCH_INFO);
  }
}
