import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private api: ApiService) { }

  getBooksByTitle(title: string): Observable<any> {
    return this.api.request('searchBooks', null, { title });
  }
}
