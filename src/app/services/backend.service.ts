import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}

  getAnalayze(): Observable<Evaluation> {
    return this.httpClient.get<Evaluation>('https://ahmalyzer.azurewebsites.net/api/HttpTriggerCSharp');
  }
}

export interface Evaluation {
  sentiments: NameValue[];
}

export interface NameValue {
  name: string;
  value: number;
}
