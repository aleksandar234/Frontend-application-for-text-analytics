import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Entity, Annotation, Img} from '../models';
import {HistoryService} from '../services/history.service';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  private readonly entityUrl = environment.entityApi;

  textArea: string;
  slider: number;
  includeItems: string[];
  abstract: boolean;
  image: boolean;
  categories: boolean;

  clean: boolean;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) {
    this.textArea = 'The doctor says an apple is better than an orange';
    this.slider = 0.6;
    this.includeItems = [];
    this.abstract = false;
    this.image = false;
    this.categories = false;
    this.clean = false;
  }

  getEntities(date: Date): Observable<Entity> {
    console.log(`${this.entityUrl}?text=${this.textArea}&min_confidence=${this.slider}&include=${this.includeItems}&token=${localStorage.getItem("tokenID")}`);
    this.historyService.addDate(date);
    this.historyService.addComponent(`GET ${this.entityUrl}?text=${this.textArea}&min_confidence=${this.slider}&include=${this.includeItems}&token=${localStorage.getItem("tokenID")}`);
    return this.httpClient.get<Entity>(`${this.entityUrl}?text=${this.textArea}&min_confidence=${this.slider}&include=${this.includeItems}&token=${localStorage.getItem("tokenID")}`);
  }

  setAbstract(abs: boolean): void {
    if(abs){
      this.includeItems.push("abstract");
    }
  }

  setImage(img: boolean): void {
    if(img) {
      this.includeItems.push("image");
    }
  }

  setCategories(ctg: boolean): void {
    if(ctg) {
      this.includeItems.push("categories");
    }
  }

  getImage(): boolean {
    return this.image;
  }

  getAbstract(): boolean {
    return this.abstract;
  }

  getCategories(): boolean {
    return this.categories;
  }

  getIncludeItems(): string[] {
    return this.includeItems;
  }

  setIncludeItems(items: string[]): void {
    this.includeItems = items;
  }

  getTextArea(): string {
    return this.textArea;
  }

  setTextArea(text: string): void{
    this.textArea = text;
  }

  getSlider(): number {
    return this.slider;
  }

  setSlider(slider: number): void {
    this.slider = slider;
  }

  setCleanField(cleanF: boolean): void {
    this.clean = cleanF;
  }

}
