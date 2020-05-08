import * as tslib_1 from "tslib";
import { Injectable, Optional } from '@angular/core';
var ConfigService = /** @class */ (function () {
    function ConfigService(config) {
        if (config) {
            this.accessToken = config.accessToken;
            this.space = config.space;
            this.environment = config.environment;
        }
    }
    ConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }] }
    ]; };
    ConfigService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional())
    ], ConfigService);
    return ConfigService;
}());
export { ConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlyRDtJQUtFLHVCQUF3QixNQUFlO1FBQ3JDLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDdkM7SUFDSCxDQUFDOztnREFOWSxRQUFROztJQUxWLGFBQWE7UUFEekIsVUFBVSxFQUFFO1FBTUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7T0FMWixhQUFhLENBWXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvY29uZmlnLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gIHNwYWNlOiBzdHJpbmc7XHJcbiAgZW52aXJvbm1lbnQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgY29uZmlnOiBJQ29uZmlnKSB7XHJcbiAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBjb25maWcuYWNjZXNzVG9rZW47XHJcbiAgICAgIHRoaXMuc3BhY2UgPSBjb25maWcuc3BhY2U7XHJcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==