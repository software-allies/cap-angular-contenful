import * as tslib_1 from "tslib";
import { Injectable, Optional } from '@angular/core';
let ConfigService = class ConfigService {
    constructor(config) {
        if (config) {
            this.accessToken = config.accessToken;
            this.space = config.space;
            this.environment = config.environment;
        }
    }
};
ConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }] }
];
ConfigService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Optional())
], ConfigService);
export { ConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlyRCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBS3hCLFlBQXdCLE1BQWU7UUFDckMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUN2QztJQUNILENBQUM7Q0FDRixDQUFBOzs0Q0FQYyxRQUFROztBQUxWLGFBQWE7SUFEekIsVUFBVSxFQUFFO0lBTUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7R0FMWixhQUFhLENBWXpCO1NBWlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2NvbmZpZy5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICBzcGFjZTogc3RyaW5nO1xyXG4gIGVudmlyb25tZW50OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGNvbmZpZzogSUNvbmZpZykge1xyXG4gICAgaWYgKGNvbmZpZykge1xyXG4gICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gY29uZmlnLmFjY2Vzc1Rva2VuO1xyXG4gICAgICB0aGlzLnNwYWNlID0gY29uZmlnLnNwYWNlO1xyXG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=