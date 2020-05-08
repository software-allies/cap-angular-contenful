import { Injectable, Optional } from '@angular/core';
import { IConfig } from '../interfaces/config.interface';

@Injectable()
export class ConfigService {
  accessToken: string;
  space: string;
  environment: string;

  constructor(@Optional() config: IConfig) {
    if (config) {
      this.accessToken = config.accessToken;
      this.space = config.space;
      this.environment = config.environment;
    }
  }
}
