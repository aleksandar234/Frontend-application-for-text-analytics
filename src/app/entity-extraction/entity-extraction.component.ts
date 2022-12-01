import { Component, OnInit } from '@angular/core';
import {Entity, Annotation, Img} from '../models';
import {EntityService} from '../services/entity.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  entities: Entity|null = null;
  textArea: string;
  slider: number;
  includeItems: string[];
  abstract: boolean;
  image: boolean;
  categories: boolean;
  date: Date;
  commentForm: FormGroup;

  constructor(private entityService: EntityService, private formBuilder: FormBuilder) {
    this.textArea = entityService.getTextArea();
    this.slider = entityService.getSlider();
    this.includeItems = entityService.getIncludeItems();
    this.abstract = entityService.getAbstract();
    this.image = entityService.getImage();
    this.categories = entityService.getCategories();
    this.date = new Date();
    this.commentForm = this.formBuilder.group({
      // Odgovarajuce HTML elemente cemo povezati atributom formControlName="..."
      // ['default value', [validators]
      textArea: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  submitTextArea() {
    console.log(this.slider);
    console.log(this.abstract);
    console.log(this.image);
    console.log(this.categories);
    this.date = new Date();
    this.entityService.setIncludeItems([]);
    this.entityService.setAbstract(this.abstract);
    this.entityService.setImage(this.image);
    this.entityService.setCategories(this.categories);
    this.entityService.setSlider(this.slider);
    this.entityService.setTextArea(this.textArea);
    this.entityService.getEntities(this.date).subscribe((entities: Entity) =>{
      console.log(entities);
      this.entities = entities;
    })
  }

  changeValue(value: boolean) {
    this.entityService.setCleanField(value);
    return ' [' + value + ']';
  }

}
