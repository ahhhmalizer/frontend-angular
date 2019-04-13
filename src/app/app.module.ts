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
import { FileDropModule } from 'ngx-file-drop';
import { PageLoadingComponent } from './pages/page-loading/page-loading.component';
import { NgxsModule } from '@ngxs/store';
import { AppState } from 'src/app/state/AppState';
import { environment } from 'src/environments/environment';
import { PageRecordComponent } from './pages/page-record/page-record.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLandingComponent,
    PagePracticeComponent,
    PageChooseAudienceComponent,
    PageLiveComponent,
    PageEvaluationComponent,
    PageLoadingComponent,
    PageRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BlobModule.forRoot(),
    BrowserAnimationsModule,
    FileDropModule,
    NgxChartsModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    })
    // NgxsLoggerPluginModule.forRoot({
    //   disabled: environment.production
    // }),
    // NgxsReduxDevtoolsPluginModule.forRoot({
    //   disabled: environment.production
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
