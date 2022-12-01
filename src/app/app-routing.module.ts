import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EntityExtractionComponent} from './entity-extraction/entity-extraction.component';
import {TextSimilarityComponent} from './text-similarity/text-similarity.component';
import {LanguageDetectionComponent} from './language-detection/language-detection.component';
import {SentimentAnalysisComponent} from './sentiment-analysis/sentiment-analysis.component';
import {TokenPageComponent} from './token-page/token-page.component';
import {AuthGuard} from './guards/auth.guard';
import {LanguageGuard} from './guards/language.guard';
import {AnalysisGuard} from './guards/analysis.guard';
import {SimilarityGuard} from './guards/similarity.guard';
import {HistoryComponent} from './history/history.component';

const routes: Routes = [
  {
    path: "entity",
    component: EntityExtractionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "similarity",
    component: TextSimilarityComponent,
    canActivate: [SimilarityGuard]
  },
  {
    path: "language",
    component: LanguageDetectionComponent,
    canActivate: [LanguageGuard]
  },
  {
    path: "analysis",
    component: SentimentAnalysisComponent,
    canActivate: [AnalysisGuard]
  },
  {
    path: "token",
    component: TokenPageComponent
  },
  {
    path: "history",
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
