import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyOfCalls: Array<String>;
  allDates: Date[] = [];

  constructor(private historyService: HistoryService) {
    this.historyOfCalls = historyService.getHistoryOfCalls();
    this.allDates = historyService.getAllDates();
  }

  ngOnInit(): void {}
}
