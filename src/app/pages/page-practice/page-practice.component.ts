import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BlobService } from 'angular-azure-blob-service';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetProgress } from 'src/app/state/AppState';

@Component({
  selector: 'app-page-practice',
  templateUrl: './page-practice.component.html',
  styleUrls: ['./page-practice.component.scss']
})
export class PagePracticeComponent implements OnInit {
  @HostBinding('class') classes = 'component CenteredPage';

  title = 'Ahhhmalizer';

  constructor(private blob: BlobService, private router: Router, private store: Store) {}
  upload(file: File) {
    if (file !== null) {
      const baseUrl = this.blob.generateBlobUrl(environment.config, file.name);
      const config = {
        baseUrl,
        sasToken: environment.config.sas,
        blockSize: 1024 * 64,
        file,
        complete: () => {},
        error: err => {
          console.log('Error:', err);
        },
        progress: percent => {
          this.store.dispatch(new SetProgress(percent));
        }
      };
      this.blob.upload(config);
      this.router.navigateByUrl('/loading');
    }
  }
  ngOnInit() {}
}
