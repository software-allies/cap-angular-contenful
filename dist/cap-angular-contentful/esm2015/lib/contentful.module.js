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
export class CapContentfulModule {
    /**
     * @param {?} config
     * @return {?}
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL2NvbnRlbnRmdWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBa0IvQyxNQUFNLE9BQU8sbUJBQW1COzs7OztJQUM5QixNQUFNLENBQUMsT0FBTyxDQUFhLE1BQXVCO1FBQ2hELE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBMUJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsRUFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxFQUNSO2dCQUNELFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRSxFQUNSO2FBQ0Y7O0FBRUM7SUFBZ0IsV0FBQSxRQUFRLEVBQUUsQ0FBQTs7Ozt3Q0FVekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgQ29uZmlnSW50ZXJmYWNlIGZyb20gJy4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBDb25maWdTZXJ2aWNlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXBDb250ZW50ZnVsTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoQE9wdGlvbmFsKCkgY29uZmlnOiBDb25maWdJbnRlcmZhY2UpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhcENvbnRlbnRmdWxNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgICB9LFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuIl19