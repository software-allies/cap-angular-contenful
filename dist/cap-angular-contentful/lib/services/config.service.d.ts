import ConfigInterface from '../interfaces/config.interface';
export declare class ConfigService {
    private data;
    space_id: string;
    environment: string;
    delivery_accessToken: string;
    constructor(data: ConfigInterface);
}
