import { Component, OnInit } from '@angular/core';
import {Similarity} from '../models';
import {SimilarityService} from '../services/similarity.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  similarities: Similarity|null = null;

  userText1: string;
  userText2: string;
  date: Date;
  commentForm: FormGroup;

  constructor(private similarityService: SimilarityService, private formBuilder: FormBuilder) {
    this.userText1 = similarityService.getUserText1();
    this.userText2 = similarityService.getUserText2();
    this.date = new Date();
    this.commentForm = this.formBuilder.group({
      userText1: ['', Validators.required],
      userText2: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  setBothUserTexts() {
    this.date = new Date();
    this.similarityService.setUserText1(this.userText1);
    this.similarityService.setUserText2(this.userText2);
    this.similarityService.getSimilarities(this.date).subscribe((similarities: Similarity) => {
       console.log(similarities);
       this.similarities = similarities;
    })
  }


}
