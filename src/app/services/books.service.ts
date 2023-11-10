import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { BookDetailRequest, SearchBooksRequest } from '../pages/books-page/books-request.model';
import { SearchBooksResponse, SearchBooksResponseItem } from '../pages/books-page/books-response.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private api: ApiService) { }

  getBooksByTitle(params: SearchBooksRequest): Observable<SearchBooksResponse> {
    return this.api.request('searchBooks', null, params);
  }

  getBookDetails(params: BookDetailRequest): Observable<SearchBooksResponseItem> {
    return this.api.request('searchBooks', null, params, { volumeId: params.volumeId });
  }
}
