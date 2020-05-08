import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./config.service";
let CapContentfulService = class CapContentfulService {
    constructor(_http, configService) {
        this._http = _http;
        this.configService = configService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.configService.accessToken}`,
                'Content-Type': 'application/vnd.contentful.delivery.v1+json'
            }),
            observe: "response"
        };
        this.actionUrl = `https://cdn.contentful.com/spaces/${this.configService.space}/environments/${this.configService.environment}/`;
    }
    responseWithRelatedAssets(response, relatedAssetKey) {
        if (!response.includes ||
            !response.includes.Asset ||
            !response.items) {
            return response;
        }
        const includes = response.includes.Asset;
        const items = response.items;
        // By each item must be know his related Asset
        let newItems = [];
        items.map(item => {
            relatedAssetKey.map(key => {
                // Search and replace by a include file
                let file = includes.filter(a => a.sys.id === item.fields[key].sys.id)[0].fields;
                const fileClone = file;
                file = file.file;
                file['title'] = fileClone.title || '';
                file['description'] = fileClone.description || '';
                item.fields[key] = Object.assign({}, item.fields[key], { file });
                newItems = [...newItems, item];
            });
        });
        response.items = newItems;
        return response.items;
    }
    getItems(contentType, relatedAssetKey) {
        const _url = `${this.actionUrl}entries?content_type=${contentType}`;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((response) => response.body), tap((response) => {
            if (relatedAssetKey) {
                return this.responseWithRelatedAssets(response, relatedAssetKey);
            }
            else {
                return response;
            }
        }), catchError(error => this.handleError(error)));
    }
    getItemById(contentType, id, relatedAssetKey) {
        const _url = `${this.actionUrl}entries?content_type=${contentType}&fields.id=${id}`;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((response) => response.body), tap((response) => {
            if (relatedAssetKey) {
                return this.responseWithRelatedAssets(response, relatedAssetKey);
            }
            else {
                return response;
            }
        }), catchError(error => this.handleError(error)));
    }
    handleError(error) {
        console.error(error);
        return throwError(error || 'Server error');
    }
};
CapContentfulService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
CapContentfulService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CapContentfulService_Factory() { return new CapContentfulService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: CapContentfulService, providedIn: "root" });
CapContentfulService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CapContentfulService);
export { CapContentfulService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FwLWFuZ3VsYXItY29udGVudGZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQW9CLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFPakQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFLN0IsWUFDWSxLQUFpQixFQUNqQixhQUE0QjtRQUQ1QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRXBDLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDZixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3JCLGVBQWUsRUFBRSxVQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO2dCQUMzRCxjQUFjLEVBQUUsNkNBQTZDO2FBQ2hFLENBQUM7WUFDRixPQUFPLEVBQUUsVUFBVTtTQUN0QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQ0FBcUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLGlCQUFpQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxDQUFDO0lBQ3JJLENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxRQUFhLEVBQUUsZUFBeUI7UUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRO1lBQ2xCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FB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QUNwRTtpQkFBTTtnQkFDSCxPQUFPLFFBQVEsQ0FBQzthQUNuQjtRQUNMLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDL0MsQ0FBQztJQUNOLENBQUM7SUFFTyxXQUFXLENBQUMsS0FBVTtRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sVUFBVSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0osQ0FBQTs7WUE1RXNCLFVBQVU7WUFDRixhQUFhOzs7QUFQL0Isb0JBQW9CO0lBSGhDLFVBQVUsQ0FBQztRQUNSLFVBQVUsRUFBRSxNQUFNO0tBQ3JCLENBQUM7R0FDVyxvQkFBb0IsQ0FrRmhDO1NBbEZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHBpcGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXBDb250ZW50ZnVsU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25Vcmw6IHN0cmluZztcclxuICAgIHByaXZhdGUgaHR0cE9wdGlvbnM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBcclxuICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dGhpcy5jb25maWdTZXJ2aWNlLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5jb250ZW50ZnVsLmRlbGl2ZXJ5LnYxK2pzb24nXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBvYnNlcnZlOiBcInJlc3BvbnNlXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVXJsID0gYGh0dHBzOi8vY2RuLmNvbnRlbnRmdWwuY29tL3NwYWNlcy8ke3RoaXMuY29uZmlnU2VydmljZS5zcGFjZX0vZW52aXJvbm1lbnRzLyR7dGhpcy5jb25maWdTZXJ2aWNlLmVudmlyb25tZW50fS9gO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3BvbnNlV2l0aFJlbGF0ZWRBc3NldHMocmVzcG9uc2U6IGFueSwgcmVsYXRlZEFzc2V0S2V5OiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5pbmNsdWRlcyB8fCBcclxuICAgICAgICAgICAgIXJlc3BvbnNlLmluY2x1ZGVzLkFzc2V0IHx8XHJcbiAgICAgICAgICAgICFyZXNwb25zZS5pdGVtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluY2x1ZGVzID0gcmVzcG9uc2UuaW5jbHVkZXMuQXNzZXQ7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSByZXNwb25zZS5pdGVtcztcclxuXHJcbiAgICAgICAgLy8gQnkgZWFjaCBpdGVtIG11c3QgYmUga25vdyBoaXMgcmVsYXRlZCBBc3NldFxyXG4gICAgICAgIGxldCBuZXdJdGVtcyA9IFtdO1xyXG4gICAgICAgIGl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmVsYXRlZEFzc2V0S2V5Lm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gU2VhcmNoIGFuZCByZXBsYWNlIGJ5IGEgaW5jbHVkZSBmaWxlXHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGluY2x1ZGVzLmZpbHRlcihhID0+IGEuc3lzLmlkID09PSBpdGVtLmZpZWxkc1trZXldLnN5cy5pZClbMF0uZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZUNsb25lID0gZmlsZTtcclxuICAgICAgICAgICAgICAgIGZpbGUgPSBmaWxlLmZpbGU7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmaWxlWyd0aXRsZSddID0gZmlsZUNsb25lLnRpdGxlIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgZmlsZVsnZGVzY3JpcHRpb24nXSA9IGZpbGVDbG9uZS5kZXNjcmlwdGlvbiB8fCAnJztcclxuICAgICAgICAgICAgICAgIGl0ZW0uZmllbGRzW2tleV0gPSAgey4uLml0ZW0uZmllbGRzW2tleV0sIGZpbGV9O1xyXG4gICAgICAgICAgICAgICAgbmV3SXRlbXMgPSBbLi4ubmV3SXRlbXMsIGl0ZW1dO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXNwb25zZS5pdGVtcyA9IG5ld0l0ZW1zO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtcyhjb250ZW50VHlwZTogc3RyaW5nLCByZWxhdGVkQXNzZXRLZXk/OiBzdHJpbmdbXSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc3QgX3VybCA9IGAke3RoaXMuYWN0aW9uVXJsfWVudHJpZXM/Y29udGVudF90eXBlPSR7Y29udGVudFR5cGV9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxyXG4gICAgICAgICAgICB0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGVkQXNzZXRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVdpdGhSZWxhdGVkQXNzZXRzKHJlc3BvbnNlLCByZWxhdGVkQXNzZXRLZXkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbUJ5SWQoY29udGVudFR5cGU6IHN0cmluZywgaWQ6IHN0cmluZywgcmVsYXRlZEFzc2V0S2V5Pzogc3RyaW5nW10pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IF91cmwgPSBgJHt0aGlzLmFjdGlvblVybH1lbnRyaWVzP2NvbnRlbnRfdHlwZT0ke2NvbnRlbnRUeXBlfSZmaWVsZHMuaWQ9JHtpZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXHJcbiAgICAgICAgICAgIHRhcCgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0ZWRBc3NldEtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlV2l0aFJlbGF0ZWRBc3NldHMocmVzcG9uc2UsIHJlbGF0ZWRBc3NldEtleSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcbn1cclxuIl19