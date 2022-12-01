import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Similarity} from '../models';
import {HistoryService} from '../services/history.service';

@Injectable({
  providedIn: 'root'
})
export class SimilarityService {

  private readonly apiUrl = environment.postApi

    private userText1: string;
    private userText2: string;

    constructor(private httpClient: HttpClient, private historyService: HistoryService) {
      this.userText1 = 'Cameron wins the Oscar';
      this.userText2 = 'All nominees for the Academy Awards';
    }

    getSimilarities(date: Date): Observable<Similarity> {
      this.historyService.addDate(date);
      this.historyService.addComponent(`GET ${this.apiUrl}?text1=${this.userText1}&text2=${this.userText2}&token=${localStorage.getItem("tokenID")}`)
      return this.httpClient.get<Similarity>(`${this.apiUrl}?text1=${this.userText1}&text2=${this.userText2}&token=${localStorage.getItem("tokenID")}`);
    }

    setUserText1(userText1: string): void {
      this.userText1 = userText1;
    }

    setUserText2(userText2: string): void {
          this.userText2 = userText2;
    }

    getUserText1(): string {
      return this.userText1;
    }

    getUserText2(): string {
      return this.userText2;
    }
}
