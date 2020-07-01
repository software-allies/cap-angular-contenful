/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/contentful.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./config.service";
export class CapContentfulService {
    /**
     * @param {?} _http
     * @param {?} credentials
     */
    constructor(_http, credentials) {
        this._http = _http;
        this.credentials = credentials;
        if (credentials) {
            this.httpOptions = {
                headers: new HttpHeaders({
                    'Authorization': `Bearer ${credentials.delivery_accessToken}`,
                    'Content-Type': 'application/vnd.contentful.delivery.v1+json'
                }),
                observe: "response"
            };
            this.baseUrl = `https://cdn.contentful.com/spaces/${this.credentials.space_id}/environments/${this.credentials.environmet}/`;
        }
    }
    /**
     * Return the items related with a specific content type
     * @param {?} contentType String
     * @param {?=} limit Optional(Number)
     * @param {?=} skip Optional(Number)
     * @return {?}
     */
    getItems(contentType, limit, skip) {
        limit ? limit = limit : limit = 100;
        skip ? skip = skip : skip = 0;
        /** @type {?} */
        const _url = `${this.baseUrl}entries?content_type=${contentType}&limit=${limit}&skip=${skip}`;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.body)), tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            return response;
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => this.handleError(error))));
    }
    /**
     * Return a specific item by Id
     * @param {?} entryId String
     * @return {?}
     */
    getItemById(entryId) {
        /** @type {?} */
        let _url = `${this.baseUrl}entries/${entryId}`;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.body)), tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response)), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => this.handleError(error))));
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        console.error(error);
        return throwError(error || 'Server error');
    }
    /**
     * Return a list of items related with a specific content type
     * @param {?} contentType String
     * @param {?=} limit Optional(Number)
     * @param {?=} skip Optional(Number)
     * @return {?}
     */
    getElementsByContentType(contentType, limit, skip) {
        limit ? limit = limit : limit = 100;
        skip ? skip = skip : skip = 0;
        /** @type {?} */
        let _url = `${this.baseUrl}entries?content_type=${contentType}&limit=${limit}&skip=${skip}`;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.body)), tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response)), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => this.handleError(error))));
    }
    /**
     * Return an item related with a specific assetId
     * @param {?} assetId String
     * @return {?}
     */
    getAsset(assetId) {
        /** @type {?} */
        let _url = `${this.baseUrl}assets/${assetId}`;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.body)), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => this.handleError(error))));
    }
}
CapContentfulService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CapContentfulService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ CapContentfulService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CapContentfulService_Factory() { return new CapContentfulService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: CapContentfulService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CapContentfulService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    CapContentfulService.prototype.httpOptions;
    /**
     * @type {?}
     * @private
     */
    CapContentfulService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    CapContentfulService.prototype.credentials;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FwLWFuZ3VsYXItY29udGVudGZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFLakQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFLL0IsWUFDVSxLQUFpQixFQUNqQixXQUEwQjtRQUQxQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQ2hDLElBQUcsV0FBVyxFQUFDO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRztnQkFDakIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO29CQUN2QixlQUFlLEVBQUUsVUFBVSxXQUFXLENBQUMsb0JBQW9CLEVBQUU7b0JBQzdELGNBQWMsRUFBRSw2Q0FBNkM7aUJBQzlELENBQUM7Z0JBQ0YsT0FBTyxFQUFFLFVBQVU7YUFDcEIsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcscUNBQXFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxpQkFBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsQ0FBQztTQUM5SDtJQUNMLENBQUM7Ozs7Ozs7O0lBU0QsUUFBUSxDQUFDLFdBQW1CLEVBQUUsS0FBYyxFQUFFLElBQWE7UUFDekQsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFL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ckMsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUM3QyxDQUFDO0lBQ04sQ0FBQzs7O1lBL0ZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLFVBQVU7WUFHVixhQUFhOzs7Ozs7OztJQU9wQix1Q0FBd0I7Ozs7O0lBQ3hCLDJDQUF5Qjs7Ozs7SUFHdkIscUNBQXlCOzs7OztJQUN6QiwyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDYXBDb250ZW50ZnVsU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgaHR0cE9wdGlvbnM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgY3JlZGVudGlhbHM6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgIGlmKGNyZWRlbnRpYWxzKXtcbiAgICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Y3JlZGVudGlhbHMuZGVsaXZlcnlfYWNjZXNzVG9rZW59YCxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmNvbnRlbnRmdWwuZGVsaXZlcnkudjEranNvbidcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvYnNlcnZlOiBcInJlc3BvbnNlXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYGh0dHBzOi8vY2RuLmNvbnRlbnRmdWwuY29tL3NwYWNlcy8ke3RoaXMuY3JlZGVudGlhbHMuc3BhY2VfaWR9L2Vudmlyb25tZW50cy8ke3RoaXMuY3JlZGVudGlhbHMuZW52aXJvbm1ldH0vYDtcbiAgICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gKiBSZXR1cm4gdGhlIGl0ZW1zIHJlbGF0ZWQgd2l0aCBhIHNwZWNpZmljIGNvbnRlbnQgdHlwZVxuICogQHBhcmFtIGNvbnRlbnRUeXBlIFN0cmluZ1xuICogQHBhcmFtIGxpbWl0IE9wdGlvbmFsKE51bWJlcilcbiAqIEBwYXJhbSBza2lwIE9wdGlvbmFsKE51bWJlcilcbiovXG4gIGdldEl0ZW1zKGNvbnRlbnRUeXBlOiBzdHJpbmcsIGxpbWl0PzogbnVtYmVyLCBza2lwPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsaW1pdCA/IGxpbWl0ID0gbGltaXQgOiBsaW1pdCA9IDEwMDtcbiAgICBza2lwID8gc2tpcCA9IHNraXAgOiBza2lwID0gMDtcbiAgICBjb25zdCBfdXJsID0gYCR7dGhpcy5iYXNlVXJsfWVudHJpZXM/Y29udGVudF90eXBlPSR7Y29udGVudFR5cGV9JmxpbWl0PSR7bGltaXR9JnNraXA9JHtza2lwfWA7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxuICAgICAgICB0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcblxuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gKiBSZXR1cm4gYSBzcGVjaWZpYyBpdGVtIGJ5IElkXG4gKiBAcGFyYW0gZW50cnlJZCBTdHJpbmdcbiovXG4gIGdldEl0ZW1CeUlkKGVudHJ5SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IF91cmwgPSBgJHt0aGlzLmJhc2VVcmx9ZW50cmllcy8ke2VudHJ5SWR9YFxuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxuICAgICAgICB0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gIH1cblxuICAvKipcbiAqIFJldHVybiBhIGxpc3Qgb2YgaXRlbXMgcmVsYXRlZCB3aXRoIGEgc3BlY2lmaWMgY29udGVudCB0eXBlXG4gKiBAcGFyYW0gY29udGVudFR5cGUgU3RyaW5nXG4gKiBAcGFyYW0gbGltaXQgT3B0aW9uYWwoTnVtYmVyKVxuICogQHBhcmFtIHNraXAgT3B0aW9uYWwoTnVtYmVyKVxuKi9cbiAgZ2V0RWxlbWVudHNCeUNvbnRlbnRUeXBlKGNvbnRlbnRUeXBlOiBzdHJpbmcsIGxpbWl0PzogbnVtYmVyLCBza2lwPzogbnVtYmVyKSB7XG4gICAgbGltaXQgPyBsaW1pdCA9IGxpbWl0IDogbGltaXQgPSAxMDA7XG4gICAgc2tpcCA/IHNraXAgPSBza2lwIDogc2tpcCA9IDA7XG4gICAgbGV0IF91cmwgPSBgJHt0aGlzLmJhc2VVcmx9ZW50cmllcz9jb250ZW50X3R5cGU9JHtjb250ZW50VHlwZX0mbGltaXQ9JHtsaW1pdH0mc2tpcD0ke3NraXB9YFxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcbiAgICAgICAgdGFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gKiBSZXR1cm4gYW4gaXRlbSByZWxhdGVkIHdpdGggYSBzcGVjaWZpYyBhc3NldElkXG4gKiBAcGFyYW0gYXNzZXRJZCBTdHJpbmdcbiovXG4gIGdldEFzc2V0KGFzc2V0SWQ6IHN0cmluZykge1xuICAgIGxldCBfdXJsID0gYCR7dGhpcy5iYXNlVXJsfWFzc2V0cy8ke2Fzc2V0SWR9YDtcblxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==