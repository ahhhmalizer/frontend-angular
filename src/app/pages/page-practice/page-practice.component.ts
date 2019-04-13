import { Component, OnInit, HostBinding } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BlobService } from 'angular-azure-blob-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-practice',
  templateUrl: './page-practice.component.html',
  styleUrls: ['./page-practice.component.scss']
})
export class PagePracticeComponent implements OnInit {
  @HostBinding('class') classes = 'component';

  title = 'Ahhhmalizer';
  progress = -1;

  constructor(private blob: BlobService, private router: Router) {}
  upload(file: File) {
    if (file !== null) {
      const baseUrl = this.blob.generateBlobUrl(environment.config, file.name);
      const config = {
        baseUrl,
        sasToken: environment.config.sas,
        blockSize: 1024 * 64,
        file,
        complete: () => {
          this.router.navigateByUrl('/evaluation');
        },
        error: err => {
          console.log('Error:', err);
        },
        progress: percent => {
          this.progress = percent;
        }
      };
      this.blob.upload(config);
    }
  }
  ngOnInit() {}
}
