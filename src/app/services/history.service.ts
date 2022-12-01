import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  historyOfCalls: Array<string>;
  allDates: Date[];

  constructor() {
    this.historyOfCalls = [];
    this.allDates = [];
  }

  getHistoryOfCalls(): string[] {
    return this.historyOfCalls;
  }

  getAllDates(): Date[] {
      return this.allDates;
  }

  addDate(date: Date) {
    this.allDates.push(date);
  }

  addComponent(value: string) {
    this.historyOfCalls.push(value);
  }



}
