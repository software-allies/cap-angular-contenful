import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { ConfigInterface } from './interfaces/config.interface';
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
    ConfigService
  ],
  schemas: [
  ]
})
export class CapContentfulModule {
  static forRoot(config: ConfigInterface): ModuleWithProviders {
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

