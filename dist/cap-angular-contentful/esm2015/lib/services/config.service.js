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
        this.data = data;
        this.space_id = '';
        this.environment = '';
        this.delivery_accessToken = '';
        if (this.data) {
            this.space_id = this.data.space_id;
            this.environment = this.data.environment;
            this.delivery_accessToken = this.data.delivery_accessToken;
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
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sYUFBYTs7OztJQUt4QixZQUFvQixJQUFxQjtRQUFyQixTQUFJLEdBQUosSUFBSSxDQUFpQjtRQUp6QyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLHlCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUdoQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDekMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FFNUQ7SUFDSCxDQUFDOzs7WUFiRixVQUFVOzs7Ozs7OztJQUVULGlDQUFzQjs7SUFDdEIsb0NBQXlCOztJQUN6Qiw2Q0FBa0M7Ozs7O0lBRXRCLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuICBzcGFjZV9pZDogc3RyaW5nID0gJyc7XG4gIGVudmlyb25tZW50OiBzdHJpbmcgPSAnJztcbiAgZGVsaXZlcnlfYWNjZXNzVG9rZW46IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogQ29uZmlnSW50ZXJmYWNlKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy5zcGFjZV9pZCA9IHRoaXMuZGF0YS5zcGFjZV9pZDtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSB0aGlzLmRhdGEuZW52aXJvbm1lbnQ7XG4gICAgICB0aGlzLmRlbGl2ZXJ5X2FjY2Vzc1Rva2VuID0gdGhpcy5kYXRhLmRlbGl2ZXJ5X2FjY2Vzc1Rva2VuO1xuXG4gICAgfVxuICB9XG59XG4iXX0=