import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { CommonModule } from "@angular/common";
import ConfigInterface from './interfaces/config.interface';

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
    // ConfigService
  ],
  schemas: [
  ]
})
export class CapContentfulModule {
  static forRoot(@Optional() config: ConfigInterface): ModuleWithProviders {
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

