import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
export class CapContentfulModule {
    static forRoot(config) {
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
/** @nocollapse */ CapContentfulModule.ɵmod = i0.ɵɵdefineNgModule({ type: CapContentfulModule });
/** @nocollapse */ CapContentfulModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CapContentfulModule_Factory(t) { return new (t || CapContentfulModule)(); }, providers: [
        ConfigService
    ], imports: [[
            HttpClientModule,
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CapContentfulModule, { imports: [HttpClientModule,
        CommonModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CapContentfulModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    HttpClientModule,
                    CommonModule,
                ],
                exports: [],
                providers: [
                    ConfigService
                ],
                schemas: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL2NvbnRlbnRmdWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBaUIvQyxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBdUI7UUFDcEMsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzswRUFYVSxtQkFBbUI7d0lBQW5CLG1CQUFtQixtQkFObkI7UUFDVCxhQUFhO0tBQ2QsWUFSUTtZQUNQLGdCQUFnQjtZQUNoQixZQUFZO1NBQ2I7d0ZBU1UsbUJBQW1CLGNBWDVCLGdCQUFnQjtRQUNoQixZQUFZO2tEQVVILG1CQUFtQjtjQWYvQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsRUFDUjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsYUFBYTtpQkFDZDtnQkFDRCxPQUFPLEVBQUUsRUFDUjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWdJbnRlcmZhY2UgfSBmcm9tICcuL2ludGVyZmFjZXMvY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29uZmlnU2VydmljZVxuICBdLFxuICBzY2hlbWFzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FwQ29udGVudGZ1bE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29uZmlnSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDYXBDb250ZW50ZnVsTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDb25maWdTZXJ2aWNlLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG5cbiJdfQ==