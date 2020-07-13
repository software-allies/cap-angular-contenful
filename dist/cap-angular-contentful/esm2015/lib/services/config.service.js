/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ConfigService {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.space_id = '';
        this.environment = '';
        this.delivery_accessToken = '';
        if (data) {
            this.space_id = data.space_id;
            this.environment = data.environment;
            this.delivery_accessToken = data.delivery_accessToken;
        }
    }
}
ConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: undefined }
];
if (false) {
    /** @type {?} */
    ConfigService.prototype.space_id;
    /** @type {?} */
    ConfigService.prototype.environment;
    /** @type {?} */
    ConfigService.prototype.delivery_accessToken;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sYUFBYTs7OztJQUt4QixZQUFhLElBQXFCO1FBSmxDLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIseUJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBSWhDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBRXZEO0lBQ0gsQ0FBQzs7O1lBZEYsVUFBVTs7Ozs7Ozs7SUFFVCxpQ0FBc0I7O0lBQ3RCLG9DQUF5Qjs7SUFDekIsNkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ0ludGVyZmFjZSBmcm9tICcuLi9pbnRlcmZhY2VzL2NvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG4gIHNwYWNlX2lkOiBzdHJpbmcgPSAnJztcbiAgZW52aXJvbm1lbnQ6IHN0cmluZyA9ICcnO1xuICBkZWxpdmVyeV9hY2Nlc3NUb2tlbjogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoIGRhdGE6IENvbmZpZ0ludGVyZmFjZSkge1xuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuc3BhY2VfaWQgPSBkYXRhLnNwYWNlX2lkO1xuICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGRhdGEuZW52aXJvbm1lbnQ7XG4gICAgICB0aGlzLmRlbGl2ZXJ5X2FjY2Vzc1Rva2VuID0gZGF0YS5kZWxpdmVyeV9hY2Nlc3NUb2tlbjtcblxuICAgIH1cbiAgfVxufVxuIl19