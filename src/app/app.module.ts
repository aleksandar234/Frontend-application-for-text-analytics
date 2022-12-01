import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { TokenPageComponent } from './token-page/token-page.component';
import { AnalysisPipe } from './pipes/analysis.pipe';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent,
    TokenPageComponent,
    AnalysisPipe,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
