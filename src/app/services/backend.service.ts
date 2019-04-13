import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlobService } from 'angular-azure-blob-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private httpClient: HttpClient, private blob: BlobService) {}

  getAnalayze(videoUrl: string): Observable<Evaluation> {
    return this.httpClient
      .get<Evaluation>(`https://ahmalyzer.azurewebsites.net/api/HttpTriggerCSharp?name=${videoUrl}`)
      .pipe
      // tap(data => {
      //   let file = new Blob([data], {type: 'text/plain'});
      //   const baseUrl = this.blob.generateBlobUrl(environment.config, 'lastupload' );
      //   const config = {
      //       baseUrl,
      //       sasToken: environment.config.sas,
      //       blockSize: 1024 * 64,
      //       file,
      //       complete: () => {
      //       },
      //       error: err => {
      //         console.log('Error:', err);
      //       },
      //       progress: percent => {
      //       }
      //     };
      //   this.blob.upload(config);
      //   }
      ();
  }
}

export interface Evaluation {
  time: string;
  words: number;
  wordCount: NameValue[];
  sentiments: NameValue[];
  grade: number;
  articulation: Articulation[];
  audioEffects: any[];
  umCount: number;
}

export interface Articulation {
  confidence: number;
  start: string;
}

export interface NameValue {
  name: string;
  value: number;
}
