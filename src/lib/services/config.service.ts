import { Injectable, Inject } from '@angular/core';
import { ConfigInterface } from '../interfaces/config.interface';

@Injectable()
export class ConfigService {
  space_id: string = '';
  environmet: string = '';
  delivery_accessToken: string = '';

  constructor(@Inject(Object) private data: ConfigInterface) {
    if (data) {
      this.space_id = this.data.space_id;
      this.environmet = this.data.environmet;
      this.delivery_accessToken = this.data.delivery_accessToken;

    }
  }
}
