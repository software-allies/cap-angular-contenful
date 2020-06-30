import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
var CapContentfulModule = /** @class */ (function () {
    function CapContentfulModule() {
    }
    CapContentfulModule.forRoot = function (config) {
        return {
            ngModule: CapContentfulModule,
            providers: [
                {
                    provide: ConfigService,
                    useValue: config
                },
            ]
        };
    };
    /** @nocollapse */ CapContentfulModule.ɵmod = i0.ɵɵdefineNgModule({ type: CapContentfulModule });
    /** @nocollapse */ CapContentfulModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CapContentfulModule_Factory(t) { return new (t || CapContentfulModule)(); }, providers: [
            ConfigService
        ], imports: [[
                HttpClientModule,
                CommonModule,
            ]] });
    return CapContentfulModule;
}());
export { CapContentfulModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL2NvbnRlbnRmdWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRS9DO0lBQUE7S0EyQkM7SUFYUSwyQkFBTyxHQUFkLFVBQWUsTUFBdUI7UUFDcEMsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzhFQVhVLG1CQUFtQjs0SUFBbkIsbUJBQW1CLG1CQU5uQjtZQUNULGFBQWE7U0FDZCxZQVJRO2dCQUNQLGdCQUFnQjtnQkFDaEIsWUFBWTthQUNiOzhCQVpIO0NBaUNDLEFBM0JELElBMkJDO1NBWlksbUJBQW1CO3dGQUFuQixtQkFBbUIsY0FYNUIsZ0JBQWdCO1FBQ2hCLFlBQVk7a0RBVUgsbUJBQW1CO2NBZi9CLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsRUFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxFQUNSO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRSxFQUNSO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ0ludGVyZmFjZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb25maWdTZXJ2aWNlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXBDb250ZW50ZnVsTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWdJbnRlcmZhY2UpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhcENvbnRlbnRmdWxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgICB9LFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuIl19