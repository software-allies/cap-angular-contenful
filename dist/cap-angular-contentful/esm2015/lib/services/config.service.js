/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ConfigService {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
        this.space_id = '';
        this.environment = '';
        this.delivery_accessToken = '';
        if (data) {
            this.space_id = this.data.space_id;
            this.environment = this.data.environment;
            this.delivery_accessToken = this.data.delivery_accessToken;
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLGFBQWE7Ozs7SUFLeEIsWUFBb0IsSUFBcUI7UUFBckIsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFKekMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6Qix5QkFBb0IsR0FBVyxFQUFFLENBQUM7UUFHaEMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDekMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FFNUQ7SUFDSCxDQUFDO0NBQ0Y7OztJQVpDLGlDQUFzQjs7SUFDdEIsb0NBQXlCOztJQUN6Qiw2Q0FBa0M7Ozs7O0lBRXRCLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuICBzcGFjZV9pZDogc3RyaW5nID0gJyc7XG4gIGVudmlyb25tZW50OiBzdHJpbmcgPSAnJztcbiAgZGVsaXZlcnlfYWNjZXNzVG9rZW46IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogQ29uZmlnSW50ZXJmYWNlKSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuc3BhY2VfaWQgPSB0aGlzLmRhdGEuc3BhY2VfaWQ7XG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gdGhpcy5kYXRhLmVudmlyb25tZW50O1xuICAgICAgdGhpcy5kZWxpdmVyeV9hY2Nlc3NUb2tlbiA9IHRoaXMuZGF0YS5kZWxpdmVyeV9hY2Nlc3NUb2tlbjtcblxuICAgIH1cbiAgfVxufVxuIl19