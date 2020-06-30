import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
export class ConfigService {
    constructor(data) {
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
}
/** @nocollapse */ ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(i0.ɵɵinject(Object)); };
/** @nocollapse */ ConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [Object]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXAtYW5ndWxhci1jb250ZW50ZnVsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUluRCxNQUFNLE9BQU8sYUFBYTtJQUt4QixZQUFvQyxJQUFxQjtRQUFyQixTQUFJLEdBQUosSUFBSSxDQUFpQjtRQUp6RCxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIseUJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBR2hDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBRTVEO0lBQ0gsQ0FBQzs7NkZBWlUsYUFBYSxjQUtKLE1BQU07d0VBTGYsYUFBYSxXQUFiLGFBQWE7a0RBQWIsYUFBYTtjQUR6QixVQUFVOztzQkFNSSxNQUFNO3VCQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ0ludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvY29uZmlnLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcbiAgc3BhY2VfaWQ6IHN0cmluZyA9ICcnO1xuICBlbnZpcm9ubWV0OiBzdHJpbmcgPSAnJztcbiAgZGVsaXZlcnlfYWNjZXNzVG9rZW46IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoT2JqZWN0KSBwcml2YXRlIGRhdGE6IENvbmZpZ0ludGVyZmFjZSkge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLnNwYWNlX2lkID0gdGhpcy5kYXRhLnNwYWNlX2lkO1xuICAgICAgdGhpcy5lbnZpcm9ubWV0ID0gdGhpcy5kYXRhLmVudmlyb25tZXQ7XG4gICAgICB0aGlzLmRlbGl2ZXJ5X2FjY2Vzc1Rva2VuID0gdGhpcy5kYXRhLmRlbGl2ZXJ5X2FjY2Vzc1Rva2VuO1xuXG4gICAgfVxuICB9XG59XG4iXX0=