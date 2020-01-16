import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CardInterface} from './card-interface';

@Injectable({
  providedIn: 'root'
})
export class CarddataService {

  cardList: CardInterface[];

  constructor(private httpClient: HttpClient) {   
   }

  // getCardList() {
    // return this.httpClient.get<CardInterface[]>('http://localhost:8080/api/timeline/1/card').subscribe(value => {
    //   this.cardList = value});
  // }

  getCardList(tid: number): Observable<CardInterface[]> {
    return this.httpClient.get<CardInterface[]>('http://localhost:8080/api/timeline/' + tid + '/card');
  }
}
