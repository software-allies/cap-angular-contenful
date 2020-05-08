import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./config.service";
var CapContentfulService = /** @class */ (function () {
    function CapContentfulService(_http, configService) {
        this._http = _http;
        this.configService = configService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Authorization': "Bearer " + this.configService.accessToken,
                'Content-Type': 'application/vnd.contentful.delivery.v1+json'
            }),
            observe: "response"
        };
        this.actionUrl = "https://cdn.contentful.com/spaces/" + this.configService.space + "/environments/" + this.configService.environment + "/";
    }
    CapContentfulService.prototype.responseWithRelatedAssets = function (response, relatedAssetKey) {
        if (!response.includes ||
            !response.includes.Asset ||
            !response.items) {
            return response;
        }
        var includes = response.includes.Asset;
        var items = response.items;
        // By each item must be know his related Asset
        var newItems = [];
        items.map(function (item) {
            relatedAssetKey.map(function (key) {
                // Search and replace by a include file
                var file = includes.filter(function (a) { return a.sys.id === item.fields[key].sys.id; })[0].fields;
                var fileClone = file;
                file = file.file;
                file['title'] = fileClone.title || '';
                file['description'] = fileClone.description || '';
                item.fields[key] = tslib_1.__assign({}, item.fields[key], { file: file });
                newItems = tslib_1.__spread(newItems, [item]);
            });
        });
        response.items = newItems;
        return response.items;
    };
    CapContentfulService.prototype.getItems = function (contentType, relatedAssetKey) {
        var _this = this;
        var _url = this.actionUrl + "entries?content_type=" + contentType;
        return this._http.get(_url, this.httpOptions)
            .pipe(map(function (response) { return response.body; }), tap(function (response) {
            if (relatedAssetKey) {
                return _this.responseWithRelatedAssets(response, relatedAssetKey);
            }
            else {
                return response;
            }
        }), catchError(function (error) { return _this.handleError(error); }));
    };
    CapContentfulService.prototype.getItemById = function (contentType, id, relatedAssetKey) {
        var _this = this;
        var _url = this.actionUrl + "entries?content_type=" + contentType + "&fields.id=" + id;
        return this._http.get(_url, this.httpOptions)
            .pipe(map(function (response) { return response.body; }), tap(function (response) {
            if (relatedAssetKey) {
                return _this.responseWithRelatedAssets(response, relatedAssetKey);
            }
            else {
                return response;
            }
        }), catchError(function (error) { return _this.handleError(error); }));
    };
    CapContentfulService.prototype.handleError = function (error) {
        console.error(error);
        return throwError(error || 'Server error');
    };
    CapContentfulService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    CapContentfulService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CapContentfulService_Factory() { return new CapContentfulService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: CapContentfulService, providedIn: "root" });
    CapContentfulService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CapContentfulService);
    return CapContentfulService;
}());
export { CapContentfulService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FwLWFuZ3VsYXItY29udGVudGZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQW9CLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFPakQ7SUFLSSw4QkFDWSxLQUFpQixFQUNqQixhQUE0QjtRQUQ1QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRXBDLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDZixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3JCLGVBQWUsRUFBRSxZQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBYTtnQkFDM0QsY0FBYyxFQUFFLDZDQUE2QzthQUNoRSxDQUFDO1lBQ0YsT0FBTyxFQUFFLFVBQVU7U0FDdEIsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsdUNBQXFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxzQkFBaUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLE1BQUcsQ0FBQztJQUNySSxDQUFDO0lBRUQsd0RBQXlCLEdBQXpCLFVBQTBCLFFBQWEsRUFBRSxlQUF5QjtRQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVE7WUFDbEIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDeEIsQ0FBQyxRQUFRLENBQUMs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SCxPQUFPLFFBQVEsQ0FBQzthQUNuQjtRQUNMLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FDL0MsQ0FBQztJQUNOLENBQUM7SUFFTywwQ0FBVyxHQUFuQixVQUFvQixLQUFVO1FBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsT0FBTyxVQUFVLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQTNFa0IsVUFBVTtnQkFDRixhQUFhOzs7SUFQL0Isb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyxvQkFBb0IsQ0FrRmhDOytCQTdGRDtDQTZGQyxBQWxGRCxJQWtGQztTQWxGWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBwaXBlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FwQ29udGVudGZ1bFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uVXJsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGh0dHBPcHRpb25zOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgXHJcbiAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3RoaXMuY29uZmlnU2VydmljZS5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuY29udGVudGZ1bC5kZWxpdmVyeS52MStqc29uJ1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgb2JzZXJ2ZTogXCJyZXNwb25zZVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGlvblVybCA9IGBodHRwczovL2Nkbi5jb250ZW50ZnVsLmNvbS9zcGFjZXMvJHt0aGlzLmNvbmZpZ1NlcnZpY2Uuc3BhY2V9L2Vudmlyb25tZW50cy8ke3RoaXMuY29uZmlnU2VydmljZS5lbnZpcm9ubWVudH0vYDtcclxuICAgIH1cclxuXHJcbiAgICByZXNwb25zZVdpdGhSZWxhdGVkQXNzZXRzKHJlc3BvbnNlOiBhbnksIHJlbGF0ZWRBc3NldEtleTogc3RyaW5nW10pOiBhbnkge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2UuaW5jbHVkZXMgfHwgXHJcbiAgICAgICAgICAgICFyZXNwb25zZS5pbmNsdWRlcy5Bc3NldCB8fFxyXG4gICAgICAgICAgICAhcmVzcG9uc2UuaXRlbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbmNsdWRlcyA9IHJlc3BvbnNlLmluY2x1ZGVzLkFzc2V0O1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcmVzcG9uc2UuaXRlbXM7XHJcblxyXG4gICAgICAgIC8vIEJ5IGVhY2ggaXRlbSBtdXN0IGJlIGtub3cgaGlzIHJlbGF0ZWQgQXNzZXRcclxuICAgICAgICBsZXQgbmV3SXRlbXMgPSBbXTtcclxuICAgICAgICBpdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJlbGF0ZWRBc3NldEtleS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFNlYXJjaCBhbmQgcmVwbGFjZSBieSBhIGluY2x1ZGUgZmlsZVxyXG4gICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBpbmNsdWRlcy5maWx0ZXIoYSA9PiBhLnN5cy5pZCA9PT0gaXRlbS5maWVsZHNba2V5XS5zeXMuaWQpWzBdLmZpZWxkcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVDbG9uZSA9IGZpbGU7XHJcbiAgICAgICAgICAgICAgICBmaWxlID0gZmlsZS5maWxlOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZmlsZVsndGl0bGUnXSA9IGZpbGVDbG9uZS50aXRsZSB8fCAnJztcclxuICAgICAgICAgICAgICAgIGZpbGVbJ2Rlc2NyaXB0aW9uJ10gPSBmaWxlQ2xvbmUuZGVzY3JpcHRpb24gfHwgJyc7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmZpZWxkc1trZXldID0gIHsuLi5pdGVtLmZpZWxkc1trZXldLCBmaWxlfTtcclxuICAgICAgICAgICAgICAgIG5ld0l0ZW1zID0gWy4uLm5ld0l0ZW1zLCBpdGVtXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzcG9uc2UuaXRlbXMgPSBuZXdJdGVtcztcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbXMoY29udGVudFR5cGU6IHN0cmluZywgcmVsYXRlZEFzc2V0S2V5Pzogc3RyaW5nW10pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IF91cmwgPSBgJHt0aGlzLmFjdGlvblVybH1lbnRyaWVzP2NvbnRlbnRfdHlwZT0ke2NvbnRlbnRUeXBlfWA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcclxuICAgICAgICAgICAgdGFwKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRlZEFzc2V0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VXaXRoUmVsYXRlZEFzc2V0cyhyZXNwb25zZSwgcmVsYXRlZEFzc2V0S2V5KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1CeUlkKGNvbnRlbnRUeXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcsIHJlbGF0ZWRBc3NldEtleT86IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBfdXJsID0gYCR7dGhpcy5hY3Rpb25Vcmx9ZW50cmllcz9jb250ZW50X3R5cGU9JHtjb250ZW50VHlwZX0mZmllbGRzLmlkPSR7aWR9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxyXG4gICAgICAgICAgICB0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGVkQXNzZXRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVdpdGhSZWxhdGVkQXNzZXRzKHJlc3BvbnNlLCByZWxhdGVkQXNzZXRLZXkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==