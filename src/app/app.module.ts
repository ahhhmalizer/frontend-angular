import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlobModule } from 'angular-azure-blob-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { PageLandingComponent } from './pages/page-landing/page-landing.component';
import { PagePracticeComponent } from './pages/page-practice/page-practice.component';
import { PageChooseAudienceComponent } from './pages/page-choose-audience/page-choose-audience.component';
import { PageLiveComponent } from './pages/page-live/page-live.component';
import { PageEvaluationComponent } from './pages/page-evaluation/page-evaluation.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    PageLandingComponent,
    PagePracticeComponent,
    PageChooseAudienceComponent,
    PageLiveComponent,
    PageEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BlobModule.forRoot(),
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
