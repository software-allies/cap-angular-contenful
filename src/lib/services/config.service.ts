import ConfigInterface from '../interfaces/config.interface';

export class ConfigService {
  space_id: string = '';
  environmet: string = '';
  delivery_accessToken: string = '';

  constructor(private data: ConfigInterface) {
    if (data) {
      this.space_id = this.data.space_id;
      this.environmet = this.data.environmet;
      this.delivery_accessToken = this.data.delivery_accessToken;

    }
  }
}
