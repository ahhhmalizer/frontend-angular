import { Component, OnInit } from '@angular/core';
import { wordMap, multi } from './test-data';

@Component({
  selector: 'app-page-evaluation',
  templateUrl: './page-evaluation.component.html',
  styleUrls: ['./page-evaluation.component.scss']
})
export class PageEvaluationComponent implements OnInit {
  constructor() {}

  sentimentArray: any[] = multi;
  emotionArray: any[] = multi;
  wordMapArray: any[] = wordMap;

  view: any[] = [1800, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Timeline';
  showYAxisLabel = true;
  yAxisLabel = 'Sentiment';

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
