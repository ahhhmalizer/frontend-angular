import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppState } from 'src/app/state/AppState';

@Component({
  selector: 'app-page-loading',
  templateUrl: './page-loading.component.html',
  styleUrls: ['./page-loading.component.scss']
})
export class PageLoadingComponent implements OnInit {
  public loading: number;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(AppState).subscribe(data => {
      this.loading = data.progress;
    });
  }
}
