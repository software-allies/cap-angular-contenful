import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { IConfig } from './interfaces/config.interface';
import { CapContentfulService } from './services/contentful.service';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  exports: [
  ],
  providers: [
    CapContentfulService
  ],
  schemas: [
  ]
})
export class CapContentfulModule {
  static forRoot(config: IConfig): ModuleWithProviders<CapContentfulModule> {
    return {
      ngModule: CapContentfulModule,
      providers: [
        {
          provide: ConfigService,
          useValue: config
        },
      ]
    };
  }
}

