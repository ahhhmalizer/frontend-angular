import { Component } from '@angular/core';
import { BlobService, UploadConfig, UploadParams } from 'angular-azure-blob-service';

const Config: UploadParams = {
  sas:
    '?sv=2018-03-28&ss=bfqt&srt=sco&sp=rwdlacup&st=2019-04-12T01%3A03%3A00Z&se=2019-04-15T01%3A03%3A00Z&sig=%2B%2Bwg8RJ0FYz4HP4OICOBVbJcz4kzG8MdD8BNqSsqEMk%3D',
  storageAccount: 'ahhhmalizerstorage',
  containerName: 'test'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ahhhmalizer';
  progress = 0;

  constructor(private blob: BlobService) {}
  upload(file: File) {
    if (file !== null) {
      const baseUrl = this.blob.generateBlobUrl(Config, file.name);
      const config = {
        baseUrl,
        sasToken: Config.sas,
        blockSize: 1024 * 64, // OPTIONAL, default value is 1024 * 32
        file,
        complete: () => {
          console.log('Transfer completed !');
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
}
