import { IConfig } from '../interfaces/config.interface';
export declare class ConfigService {
    accessToken: string;
    space: string;
    environment: string;
    constructor(config: IConfig);
}
