// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { Environment } from 'src/environments/Environment.interface';

export const environment: Environment = {
  production: false,
  config: {
    sas:
      '?sv=2018-03-28&ss=bfqt&srt=sco&sp=rwdlacup&st=2019-04-12T01%3A03%3A00Z&se=2019-04-15T01%3A03%3A00Z&sig=%2B%2Bwg8RJ0FYz4HP4OICOBVbJcz4kzG8MdD8BNqSsqEMk%3D',
    storageAccount: 'ahhhmalizerstorage',
    containerName: 'test'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
