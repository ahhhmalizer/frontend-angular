import { UploadParams } from 'angular-azure-blob-service';
export interface Environment {
  production: boolean;
  config: UploadParams;
}
