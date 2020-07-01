/**
 * @fileoverview added by tsickle
 * Generated from: lib/contentful.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { NgModule, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { CommonModule } from "@angular/common";
var CapContentfulModule = /** @class */ (function () {
    function CapContentfulModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    CapContentfulModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
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
    CapContentfulModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        HttpClientModule,
                        CommonModule,
                    ],
                    exports: [],
                    providers: [
                    // ConfigService
                    ],
                    schemas: []
                },] }
    ];
    __decorate([
        __param(0, Optional()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], CapContentfulModule, "forRoot", null);
    return CapContentfulModule;
}());
export { CapContentfulModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL2NvbnRlbnRmdWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DO0lBQUE7SUEyQkEsQ0FBQzs7Ozs7SUFYUSwyQkFBTzs7OztJQUFkLFVBQTJCLE1BQXVCO1FBQ2hELE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBMUJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxFQUNSO29CQUNELFNBQVMsRUFBRTtvQkFDVCxnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRSxFQUNSO2lCQUNGOztJQUVDO1FBQWdCLFdBQUEsUUFBUSxFQUFFLENBQUE7Ozs7NENBVXpCO0lBQ0gsMEJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQVpZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCBDb25maWdJbnRlcmZhY2UgZnJvbSAnLi9pbnRlcmZhY2VzL2NvbmZpZy5pbnRlcmZhY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIENvbmZpZ1NlcnZpY2VcbiAgXSxcbiAgc2NoZW1hczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIENhcENvbnRlbnRmdWxNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChAT3B0aW9uYWwoKSBjb25maWc6IENvbmZpZ0ludGVyZmFjZSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ2FwQ29udGVudGZ1bE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ29uZmlnU2VydmljZSxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG4iXX0=