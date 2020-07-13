import ConfigInterface from '../interfaces/config.interface';
export declare class ConfigService {
    space_id: string;
    environment: string;
    delivery_accessToken: string;
    constructor(data: ConfigInterface);
}
