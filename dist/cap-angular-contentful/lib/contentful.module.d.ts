import { ModuleWithProviders } from '@angular/core';
import { ConfigInterface } from './interfaces/config.interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
export declare class CapContentfulModule {
    static forRoot(config: ConfigInterface): i0.ModuleWithProviders<CapContentfulModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<CapContentfulModule, never, [typeof i1.HttpClientModule, typeof i2.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDef<CapContentfulModule>;
}
