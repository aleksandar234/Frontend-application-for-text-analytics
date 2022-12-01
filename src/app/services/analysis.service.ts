import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Analysis, Sentiments} from '../models';
import {HistoryService} from '../services/history.service';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  private readonly apiUrl = environment.analysisApi;

  userText: string;
  language: string;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) {
    this.userText = 'la amo troppo';
    this.language = '';
  }

  getAnalysis(date: Date): Observable<Analysis> {
    console.log(this.language);
    this.historyService.addDate(date);
    this.historyService.addComponent(`${this.apiUrl}?lang=${this.language}&text=${this.userText}&token=${localStorage.getItem("tokenID")}`);
    return this.httpClient.get<Analysis>(`${this.apiUrl}?lang=${this.language}&text=${this.userText}&token=${localStorage.getItem("tokenID")}`)
  }


  getLanguage(): string {
    return this.language;
  }

  setLanguage(lang: string): void {
    this.language = lang;
  }

  setUserText(userText: string): void {
    this.userText = userText;
  }

  getUserText(): string {
    return this.userText;
  }

  setLang(lang: string): void {
    this.language = lang;
  }

}
