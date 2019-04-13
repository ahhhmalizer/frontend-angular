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
      this.score = data.evaluation.grade;
      this.confidenceArray = [
        {
          name: 'confidence',
          series: data.evaluation.articulation.map(a => {
            return { name: a.start, value: a.confidence };
          })
        }
      ];
      this.umCount = data.evaluation.umCount;
    });
  }

  @HostBinding('class')
  class = 'CenteredPage';

  umCount = 0;
  score = 0;
  totalWords = 0;
  totalTime = '';
  videoUrl = '';
  sentimentArray: any[] = multi;
  confidenceArray: any[] = multi;
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
    domain: [
      '#1769aa',
      '#2196f3',
      '#4dabf5',
      '#1c54b2',
      '#2979ff',
      '#5393ff'
    ]
  };

  // line, area
  autoScale = true;

  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {}
}
