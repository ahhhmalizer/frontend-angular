import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLandingComponent } from 'src/app/pages/page-landing/page-landing.component';
import { PageChooseAudienceComponent } from 'src/app/pages/page-choose-audience/page-choose-audience.component';
import { PagePracticeComponent } from 'src/app/pages/page-practice/page-practice.component';
import { PageLiveComponent } from 'src/app/pages/page-live/page-live.component';
import { PageEvaluationComponent } from 'src/app/pages/page-evaluation/page-evaluation.component';
import { PageLoadingComponent } from 'src/app/pages/page-loading/page-loading.component';
import { PageRecordComponent } from 'src/app/pages/page-record/page-record.component';

const routes: Routes = [
  { path: 'choose-audience', component: PageChooseAudienceComponent },
  { path: 'practice', component: PagePracticeComponent },
  { path: 'live', component: PageLiveComponent },
  { path: 'loading', component: PageLoadingComponent },
  { path: 'evaluation', component: PageEvaluationComponent },
  { path: 'record', component: PageRecordComponent },
  { path: '**', component: PageLandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
