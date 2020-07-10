import ConfigInterface from '../interfaces/config.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  space_id: string = '';
  environment: string = '';
  delivery_accessToken: string = '';

  constructor( data: ConfigInterface) {

    if (data) {
      this.space_id = data.space_id;
      this.environment = data.environment;
      this.delivery_accessToken = data.delivery_accessToken;

    }
  }
}
