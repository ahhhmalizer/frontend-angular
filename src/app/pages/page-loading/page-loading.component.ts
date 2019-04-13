import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppState, AppStateModel } from 'src/app/state/AppState';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-loading',
  templateUrl: './page-loading.component.html',
  styleUrls: ['./page-loading.component.scss']
})
export class PageLoadingComponent implements OnInit {
  public loading: number;
  public uploaded = false;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.select(AppState).subscribe((data: AppStateModel) => {
      this.loading = data.progress;
      this.uploaded = data.uploaded;
      if (data.analyzed) {
        this.router.navigateByUrl('/evaluation');
      }
    });
  }
}
