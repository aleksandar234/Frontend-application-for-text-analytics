import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Language, Langs} from '../models';
import {HistoryService} from '../services/history.service';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly languageUrl = environment.languageApi;

  textArea: string;
  clean: boolean;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) {
    this.textArea = 'I am a mighty pirate, my name is Nick. Von Deutschl';
    this.clean = false;
  }

  getLanguage(date: Date): Observable<Language> {
    //console.log(this.clean);
    this.historyService.addDate(date);
    this.historyService.addComponent(`GET ${this.languageUrl}?text=${this.textArea}&token=${localStorage.getItem("tokenID")}&clean=${this.clean}`);
    return this.httpClient.get<Language>(`${this.languageUrl}?text=${this.textArea}&token=${localStorage.getItem("tokenID")}&clean=${this.clean}`);
  }

  getTextArea(): string {
    return this.textArea;
  }

  getDateAndTime(date: Date) {

  }

  getCleanField(): boolean {
    return this.clean;
  }

  setCleanField(cleanF: boolean): void {
    this.clean = cleanF;
  }

  setTextArea(text: string): void {
    this.textArea = text;
  }


}
