import { Component, OnInit, HostBinding } from '@angular/core';
import { wordMap, multi } from './test-data';
import { Store } from '@ngxs/store';
import { AppState, AppStateModel } from 'src/app/state/AppState';

@Component({
  selector: 'app-page-evaluation',
  templateUrl: './page-evaluation.component.html',
  styleUrls: ['./page-evaluation.component.scss']
})
export class PageEvaluationComponent implements OnInit {
  constructor(private store: Store) {
    this.store.select(AppState).subscribe((data: AppStateModel) => {
      this.sentimentArray = [
        {
          name: 'Sentiment',
          series: data.evaluation.sentiments
        }
      ];
      this.videoUrl = data.videoUrl;
      this.wordMapArray = data.evaluation.wordCount;
      this.totalTime = data.evaluation.time;
      this.totalWords = data.evaluation.words;
    });
  }

  @HostBinding('class')
  class = 'CenteredPage';

  totalWords = 0;
  totalTime = '';
  videoUrl = '';
  sentimentArray: any[] = multi;
  emotionArray: any[] = multi;
  wordMapArray: any[] = wordMap;

  view: any[] = [1000, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;

  colorScheme = {
    domain: ['#ff1744', '#d500f9', '#2979ff', '#00e5ff', '#c6ff00', '#ff3d00']
  };

  // line, area
  autoScale = true;

  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {}
}
