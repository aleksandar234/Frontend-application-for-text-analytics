import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../services/language.service';
import {Language, Langs} from '../models';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  languages: Language|null = null;

  date: Date;
  textArea: string;
  clean: boolean;
  commentForm: FormGroup;

  constructor(private languageService: LanguageService, private formBuilder: FormBuilder) {
    this.textArea = languageService.getTextArea();
    this.clean = languageService.getCleanField();
    this.date = new Date();
    this.commentForm = this.formBuilder.group({
      // Odgovarajuce HTML elemente cemo povezati atributom formControlName="..."
      // ['default value', [validators]
      textArea: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submitTextArea() {
    this.date = new Date();
    this.languageService.setTextArea(this.textArea);
    this.languageService.getLanguage(this.date).subscribe((languages: Language) => {
       console.log(languages);
       this.languages = languages;
    })
  }

  changeValue(value: boolean) {
    this.languageService.setCleanField(value);
    return ' [' + value + ', ' + typeof value + ']';
  }

}
