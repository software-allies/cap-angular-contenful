import ConfigInterface from '../interfaces/config.interface';
import { Injectable } from '@angular/core';

export class ConfigService {
  space_id: string = '';
  environment: string = '';
  delivery_accessToken: string = '';

  constructor(private data: ConfigInterface) {

    if (this.data) {
      this.space_id = this.data.space_id;
      this.environment = this.data.environment;
      this.delivery_accessToken = this.data.delivery_accessToken;

    }
  }
}
