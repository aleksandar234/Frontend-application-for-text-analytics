import { Component, OnInit } from '@angular/core';
import {Analysis, Sentiments} from '../models';
import {AnalysisService} from '../services/analysis.service';
import {ChangeDetectorRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

enum CheckBoxType { ENGLISH, ITALIAN, NONE };


@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  analysisResults: Analysis|null = null;

  userText: string;
  date: Date;
  commentForm: FormGroup;

  currentlyChecked: CheckBoxType = CheckBoxType.NONE;
  check_box_type = CheckBoxType;

  startColor: number[] = [255,0,0];
  endColor: number[] = [0,255,0];

  finalColor: number[] = [];

  constructor(private analysisService: AnalysisService, private cdref: ChangeDetectorRef, private formBuilder: FormBuilder) {
    this.userText = analysisService.getUserText();
    this.date = new Date();
    this.commentForm = this.formBuilder.group({
      // Odgovarajuce HTML elemente cemo povezati atributom formControlName="..."
      // ['default value', [validators]
      userText: ['', Validators.required]
    })
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit(): void {
  }

  interpolateColor(factor: number): number[] {

    this.finalColor = [];
/*
    if(factor == 0) {
      this.finalColor = [255,255,0];
      return this.finalColor;
    }
*/
    factor = (factor +1) / 2;
    for (let i = 0; i < this.startColor.length; i++) {
      this.finalColor.push(Math.round(this.startColor[i] + (this.endColor[i] - this.startColor[i]) * factor));
    }
/**
    if(factor < 0) {
      if(this.finalColor[0] > 255) {

        this.finalColor[0] = 255;
      }
      if(this.finalColor[1] < 0) {
        this.finalColor[1] = 255 + this.finalColor[1];
      }
    } else {
      if(this.finalColor[0] > 255) {
        this.finalColor[0] = 255;
      }
      if(this.finalColor[1] > 255) {
        this.finalColor[1] = 255;
      }

    }
    */
    return this.finalColor;
  }

  submitButton() {
    console.log(this.currentlyChecked);
    this.date = new Date();
    this.settingCurrentLanguage(this.currentlyChecked);
    this.analysisService.setUserText(this.userText);
    this.analysisService.getAnalysis(this.date).subscribe((analysis: Analysis) => {
       console.log(analysis);
       this.analysisResults = analysis;
    })
  }

  settingCurrentLanguage(currentlyChecked: number): void {
    if(this.currentlyChecked == 0){
      this.analysisService.setLanguage('en');
    } else if(this.currentlyChecked == 1){
      this.analysisService.setLanguage('it');
    } else {
      this.analysisService.setLanguage('auto');
    }
  }

  selectCheckBox(targetType: CheckBoxType) {
    if(this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }
    this.currentlyChecked = targetType;
  }


}
