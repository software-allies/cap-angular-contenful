/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ConfigService = /** @class */ (function () {
    function ConfigService(data) {
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
    ConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ConfigService;
}());
export { ConfigService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQU1FLHVCQUFvQixJQUFxQjtRQUFyQixTQUFJLEdBQUosSUFBSSxDQUFpQjtRQUp6QyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLHlCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUdoQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDekMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FFNUQ7SUFDSCxDQUFDOztnQkFiRixVQUFVOzs7Ozs7SUFjWCxvQkFBQztDQUFBLEFBZEQsSUFjQztTQWJZLGFBQWE7OztJQUN4QixpQ0FBc0I7O0lBQ3RCLG9DQUF5Qjs7SUFDekIsNkNBQWtDOzs7OztJQUV0Qiw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlnSW50ZXJmYWNlIGZyb20gJy4uL2ludGVyZmFjZXMvY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcbiAgc3BhY2VfaWQ6IHN0cmluZyA9ICcnO1xuICBlbnZpcm9ubWVudDogc3RyaW5nID0gJyc7XG4gIGRlbGl2ZXJ5X2FjY2Vzc1Rva2VuOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IENvbmZpZ0ludGVyZmFjZSkge1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMuc3BhY2VfaWQgPSB0aGlzLmRhdGEuc3BhY2VfaWQ7XG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gdGhpcy5kYXRhLmVudmlyb25tZW50O1xuICAgICAgdGhpcy5kZWxpdmVyeV9hY2Nlc3NUb2tlbiA9IHRoaXMuZGF0YS5kZWxpdmVyeV9hY2Nlc3NUb2tlbjtcblxuICAgIH1cbiAgfVxufVxuIl19