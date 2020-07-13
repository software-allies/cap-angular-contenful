/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ConfigService = /** @class */ (function () {
    function ConfigService(data) {
        this.space_id = '';
        this.environment = '';
        this.delivery_accessToken = '';
        if (data) {
            this.space_id = data.space_id;
            this.environment = data.environment;
            this.delivery_accessToken = data.delivery_accessToken;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQU1FLHVCQUFhLElBQXFCO1FBSmxDLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIseUJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBSWhDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBRXZEO0lBQ0gsQ0FBQzs7Z0JBZEYsVUFBVTs7Ozs7O0lBZVgsb0JBQUM7Q0FBQSxBQWZELElBZUM7U0FkWSxhQUFhOzs7SUFDeEIsaUNBQXNCOztJQUN0QixvQ0FBeUI7O0lBQ3pCLDZDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuICBzcGFjZV9pZDogc3RyaW5nID0gJyc7XG4gIGVudmlyb25tZW50OiBzdHJpbmcgPSAnJztcbiAgZGVsaXZlcnlfYWNjZXNzVG9rZW46IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCBkYXRhOiBDb25maWdJbnRlcmZhY2UpIHtcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLnNwYWNlX2lkID0gZGF0YS5zcGFjZV9pZDtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBkYXRhLmVudmlyb25tZW50O1xuICAgICAgdGhpcy5kZWxpdmVyeV9hY2Nlc3NUb2tlbiA9IGRhdGEuZGVsaXZlcnlfYWNjZXNzVG9rZW47XG5cbiAgICB9XG4gIH1cbn1cbiJdfQ==