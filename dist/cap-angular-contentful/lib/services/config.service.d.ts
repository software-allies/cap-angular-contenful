import { ConfigInterface } from '../interfaces/config.interface';
import * as i0 from "@angular/core";
export declare class ConfigService {
    private data;
    space_id: string;
    environmet: string;
    delivery_accessToken: string;
    constructor(data: ConfigInterface);
    static ɵfac: i0.ɵɵFactoryDef<ConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ConfigService>;
}
