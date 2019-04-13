import { Environment } from 'src/environments/Environment.interface';

export const environment: Environment = {
  production: true,
  config: {
    sas:
      '?sv=2018-03-28&ss=bfqt&srt=sco&sp=rwdlacup&st=2019-04-12T01%3A03%3A00Z&se=2019-04-15T01%3A03%3A00Z&sig=%2B%2Bwg8RJ0FYz4HP4OICOBVbJcz4kzG8MdD8BNqSsqEMk%3D',
    storageAccount: 'ahhhmalizerstorage',
    containerName: 'test'
  }
};
