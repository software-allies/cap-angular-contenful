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
var CapContentfulService = /** @class */ (function () {
    function CapContentfulService(_http, credentials) {
        this._http = _http;
        this.credentials = credentials;
        if (credentials) {
            this.httpOptions = {
                headers: new HttpHeaders({
                    'Authorization': "Bearer " + credentials.delivery_accessToken,
                    'Content-Type': 'application/vnd.contentful.delivery.v1+json'
                }),
                observe: "response"
            };
            this.baseUrl = "https://cdn.contentful.com/spaces/" + this.credentials.space_id + "/environments/" + this.credentials.environment + "/";
        }
    }
    /**
   * Return the items related with a specific content type
   * @param contentType String
   * @param limit Optional(Number)
   * @param skip Optional(Number)
  */
    /**
     * Return the items related with a specific content type
     * @param {?} contentType String
     * @param {?=} limit Optional(Number)
     * @param {?=} skip Optional(Number)
     * @return {?}
     */
    CapContentfulService.prototype.getItems = /**
     * Return the items related with a specific content type
     * @param {?} contentType String
     * @param {?=} limit Optional(Number)
     * @param {?=} skip Optional(Number)
     * @return {?}
     */
    function (contentType, limit, skip) {
        var _this = this;
        limit ? limit = limit : limit = 100;
        skip ? skip = skip : skip = 0;
        /** @type {?} */
        var _url = this.baseUrl + "entries?content_type=" + contentType + "&limit=" + limit + "&skip=" + skip;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response.body; })), tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            return response;
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.handleError(error); })));
    };
    /**
   * Return a specific item by Id
   * @param entryId String
  */
    /**
     * Return a specific item by Id
     * @param {?} entryId String
     * @return {?}
     */
    CapContentfulService.prototype.getItemById = /**
     * Return a specific item by Id
     * @param {?} entryId String
     * @return {?}
     */
    function (entryId) {
        var _this = this;
        /** @type {?} */
        var _url = this.baseUrl + "entries/" + entryId;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response.body; })), tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.handleError(error); })));
    };
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    CapContentfulService.prototype.handleError = /**
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        console.error(error);
        return throwError(error || 'Server error');
    };
    /**
   * Return a list of items related with a specific content type
   * @param contentType String
   * @param limit Optional(Number)
   * @param skip Optional(Number)
  */
    /**
     * Return a list of items related with a specific content type
     * @param {?} contentType String
     * @param {?=} limit Optional(Number)
     * @param {?=} skip Optional(Number)
     * @return {?}
     */
    CapContentfulService.prototype.getElementsByContentType = /**
     * Return a list of items related with a specific content type
     * @param {?} contentType String
     * @param {?=} limit Optional(Number)
     * @param {?=} skip Optional(Number)
     * @return {?}
     */
    function (contentType, limit, skip) {
        var _this = this;
        limit ? limit = limit : limit = 100;
        skip ? skip = skip : skip = 0;
        /** @type {?} */
        var _url = this.baseUrl + "entries?content_type=" + contentType + "&limit=" + limit + "&skip=" + skip;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response.body; })), tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.handleError(error); })));
    };
    /**
   * Return an item related with a specific assetId
   * @param assetId String
  */
    /**
     * Return an item related with a specific assetId
     * @param {?} assetId String
     * @return {?}
     */
    CapContentfulService.prototype.getAsset = /**
     * Return an item related with a specific assetId
     * @param {?} assetId String
     * @return {?}
     */
    function (assetId) {
        var _this = this;
        /** @type {?} */
        var _url = this.baseUrl + "assets/" + assetId;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response.body; })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.handleError(error); })));
    };
    CapContentfulService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CapContentfulService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ CapContentfulService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CapContentfulService_Factory() { return new CapContentfulService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); }, token: CapContentfulService, providedIn: "root" });
    return CapContentfulService;
}());
export { CapContentfulService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FwLWFuZ3VsYXItY29udGVudGZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFakQ7SUFRRSw4QkFDVSxLQUFpQixFQUNqQixXQUEwQjtRQUQxQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQ2hDLElBQUcsV0FBVyxFQUFDO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRztnQkFDakIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO29CQUN2QixlQUFlLEVBQUUsWUFBVSxXQUFXLENBQUMsb0JBQXNCO29CQUM3RCxjQUFjLEVBQUUsNkNBQTZDO2lCQUM5RCxDQUFDO2dCQUNGLE9BQU8sRUFBRSxVQUFVO2FBQ3BCLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLHVDQUFxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsc0JBQWlCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxNQUFHLENBQUM7U0FDL0g7SUFDTCxDQUFDO0lBR0Q7Ozs7O0lBS0E7Ozs7Ozs7O0lBQ0EsdUNBQVE7Ozs7Ozs7SUFBUixVQUFTLFdBQW1CLEVBQUUsS0FBYyxFQUFFLElBQWE7UUFBM0QsaUJBYUM7UUFaQyxLQUFLLENBQUMsQ0FB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TyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMvQyxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUMsUUFBYSxJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBYixDQUFhLEVBQUMsRUFDckMsVUFBVTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsRUFBQyxDQUM3QyxDQUFDO0lBQ04sQ0FBQzs7Z0JBL0ZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsVUFBVTtnQkFHVixhQUFhOzs7K0JBSnRCO0NBc0dDLEFBaEdELElBZ0dDO1NBN0ZZLG9CQUFvQjs7Ozs7O0lBRS9CLHVDQUF3Qjs7Ozs7SUFDeEIsMkNBQXlCOzs7OztJQUd2QixxQ0FBeUI7Ozs7O0lBQ3pCLDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENhcENvbnRlbnRmdWxTZXJ2aWNlIHtcblxuICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZztcbiAgcHJpdmF0ZSBodHRwT3B0aW9uczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjcmVkZW50aWFsczogQ29uZmlnU2VydmljZSkge1xuICAgICAgaWYoY3JlZGVudGlhbHMpe1xuICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtjcmVkZW50aWFscy5kZWxpdmVyeV9hY2Nlc3NUb2tlbn1gLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuY29udGVudGZ1bC5kZWxpdmVyeS52MStqc29uJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9ic2VydmU6IFwicmVzcG9uc2VcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSBgaHR0cHM6Ly9jZG4uY29udGVudGZ1bC5jb20vc3BhY2VzLyR7dGhpcy5jcmVkZW50aWFscy5zcGFjZV9pZH0vZW52aXJvbm1lbnRzLyR7dGhpcy5jcmVkZW50aWFscy5lbnZpcm9ubWVudH0vYDtcbiAgICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gKiBSZXR1cm4gdGhlIGl0ZW1zIHJlbGF0ZWQgd2l0aCBhIHNwZWNpZmljIGNvbnRlbnQgdHlwZVxuICogQHBhcmFtIGNvbnRlbnRUeXBlIFN0cmluZ1xuICogQHBhcmFtIGxpbWl0IE9wdGlvbmFsKE51bWJlcilcbiAqIEBwYXJhbSBza2lwIE9wdGlvbmFsKE51bWJlcilcbiovXG4gIGdldEl0ZW1zKGNvbnRlbnRUeXBlOiBzdHJpbmcsIGxpbWl0PzogbnVtYmVyLCBza2lwPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsaW1pdCA/IGxpbWl0ID0gbGltaXQgOiBsaW1pdCA9IDEwMDtcbiAgICBza2lwID8gc2tpcCA9IHNraXAgOiBza2lwID0gMDtcbiAgICBjb25zdCBfdXJsID0gYCR7dGhpcy5iYXNlVXJsfWVudHJpZXM/Y29udGVudF90eXBlPSR7Y29udGVudFR5cGV9JmxpbWl0PSR7bGltaXR9JnNraXA9JHtza2lwfWA7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxuICAgICAgICB0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcblxuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gKiBSZXR1cm4gYSBzcGVjaWZpYyBpdGVtIGJ5IElkXG4gKiBAcGFyYW0gZW50cnlJZCBTdHJpbmdcbiovXG4gIGdldEl0ZW1CeUlkKGVudHJ5SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IF91cmwgPSBgJHt0aGlzLmJhc2VVcmx9ZW50cmllcy8ke2VudHJ5SWR9YFxuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxuICAgICAgICB0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gIH1cblxuICAvKipcbiAqIFJldHVybiBhIGxpc3Qgb2YgaXRlbXMgcmVsYXRlZCB3aXRoIGEgc3BlY2lmaWMgY29udGVudCB0eXBlXG4gKiBAcGFyYW0gY29udGVudFR5cGUgU3RyaW5nXG4gKiBAcGFyYW0gbGltaXQgT3B0aW9uYWwoTnVtYmVyKVxuICogQHBhcmFtIHNraXAgT3B0aW9uYWwoTnVtYmVyKVxuKi9cbiAgZ2V0RWxlbWVudHNCeUNvbnRlbnRUeXBlKGNvbnRlbnRUeXBlOiBzdHJpbmcsIGxpbWl0PzogbnVtYmVyLCBza2lwPzogbnVtYmVyKSB7XG4gICAgbGltaXQgPyBsaW1pdCA9IGxpbWl0IDogbGltaXQgPSAxMDA7XG4gICAgc2tpcCA/IHNraXAgPSBza2lwIDogc2tpcCA9IDA7XG4gICAgbGV0IF91cmwgPSBgJHt0aGlzLmJhc2VVcmx9ZW50cmllcz9jb250ZW50X3R5cGU9JHtjb250ZW50VHlwZX0mbGltaXQ9JHtsaW1pdH0mc2tpcD0ke3NraXB9YFxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcbiAgICAgICAgdGFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gKiBSZXR1cm4gYW4gaXRlbSByZWxhdGVkIHdpdGggYSBzcGVjaWZpYyBhc3NldElkXG4gKiBAcGFyYW0gYXNzZXRJZCBTdHJpbmdcbiovXG4gIGdldEFzc2V0KGFzc2V0SWQ6IHN0cmluZykge1xuICAgIGxldCBfdXJsID0gYCR7dGhpcy5iYXNlVXJsfWFzc2V0cy8ke2Fzc2V0SWR9YDtcblxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==