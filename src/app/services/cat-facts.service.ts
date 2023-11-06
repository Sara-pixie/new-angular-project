import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

export interface GetCatFactsResponse {
  data: string[],
}

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(private api: ApiService) { }

  getCatFacts(number: number = 5): Observable<GetCatFactsResponse> {
    return this.api.request('getCatFacts', null, { count: number });
  }

}
