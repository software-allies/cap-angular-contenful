import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
var ConfigService = /** @class */ (function () {
    function ConfigService(data) {
        this.data = data;
        this.space_id = '';
        this.environmet = '';
        this.delivery_accessToken = '';
        if (data) {
            this.space_id = this.data.space_id;
            this.environmet = this.data.environmet;
            this.delivery_accessToken = this.data.delivery_accessToken;
        }
    }
    /** @nocollapse */ ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(i0.ɵɵinject(Object)); };
    /** @nocollapse */ ConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac });
    return ConfigService;
}());
export { ConfigService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [Object]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUduRDtJQU1FLHVCQUFvQyxJQUFxQjtRQUFyQixTQUFJLEdBQUosSUFBSSxDQUFpQjtRQUp6RCxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIseUJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBR2hDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBRTVEO0lBQ0gsQ0FBQztpR0FaVSxhQUFhLGNBS0osTUFBTTs0RUFMZixhQUFhLFdBQWIsYUFBYTt3QkFKMUI7Q0FpQkMsQUFkRCxJQWNDO1NBYlksYUFBYTtrREFBYixhQUFhO2NBRHpCLFVBQVU7O3NCQU1JLE1BQU07dUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jb25maWcuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuICBzcGFjZV9pZDogc3RyaW5nID0gJyc7XG4gIGVudmlyb25tZXQ6IHN0cmluZyA9ICcnO1xuICBkZWxpdmVyeV9hY2Nlc3NUb2tlbjogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChPYmplY3QpIHByaXZhdGUgZGF0YTogQ29uZmlnSW50ZXJmYWNlKSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuc3BhY2VfaWQgPSB0aGlzLmRhdGEuc3BhY2VfaWQ7XG4gICAgICB0aGlzLmVudmlyb25tZXQgPSB0aGlzLmRhdGEuZW52aXJvbm1ldDtcbiAgICAgIHRoaXMuZGVsaXZlcnlfYWNjZXNzVG9rZW4gPSB0aGlzLmRhdGEuZGVsaXZlcnlfYWNjZXNzVG9rZW47XG5cbiAgICB9XG4gIH1cbn1cbiJdfQ==