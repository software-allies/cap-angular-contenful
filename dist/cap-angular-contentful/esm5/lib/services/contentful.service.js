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
            this.baseUrl = "https://cdn.contentful.com/spaces/" + this.credentials.space_id + "/environments/" + this.credentials.environmet + "/";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FwLWFuZ3VsYXItY29udGVudGZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFakQ7SUFRRSw4QkFDVSxLQUFpQixFQUNqQixXQUEwQjtRQUQxQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQ2hDLElBQUcsV0FBVyxFQUFDO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRztnQkFDakIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO29CQUN2QixlQUFlLEVBQUUsWUFBVSxXQUFXLENBQUMsb0JBQXNCO29CQUM3RCxjQUFjLEVBQUUsNkNBQTZDO2lCQUM5RCxDQUFDO2dCQUNGLE9BQU8sRUFBRSxVQUFVO2FBQ3BCLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLHVDQUFxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsc0JBQWlCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxNQUFHLENBQUM7U0FDOUg7SUFDTCxDQUFDO0lBR0Q7Ozs7O0lBS0E7Ozs7Ozs7O0lBQ0EsdUNBQVE7Ozs7Ozs7SUFBUixVQUFTLFdBQW1CLEVBQUUsS0FBYyxFQUFFLElBQWE7UUFBM0QsaUJBYUM7UUFaQyxLQUFLLENBQUMsQ0FB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TyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMvQyxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUMsUUFBYSxJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBYixDQUFhLEVBQUMsRUFDckMsVUFBVTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsRUFBQyxDQUM3QyxDQUFDO0lBQ04sQ0FBQzs7Z0JBL0ZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsVUFBVTtnQkFHVixhQUFhOzs7K0JBSnRCO0NBc0dDLEFBaEdELElBZ0dDO1NBN0ZZLG9CQUFvQjs7Ozs7O0lBRS9CLHVDQUF3Qjs7Ozs7SUFDeEIsMkNBQXlCOzs7OztJQUd2QixxQ0FBeUI7Ozs7O0lBQ3pCLDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENhcENvbnRlbnRmdWxTZXJ2aWNlIHtcblxuICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZztcbiAgcHJpdmF0ZSBodHRwT3B0aW9uczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjcmVkZW50aWFsczogQ29uZmlnU2VydmljZSkge1xuICAgICAgaWYoY3JlZGVudGlhbHMpe1xuICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xuICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtjcmVkZW50aWFscy5kZWxpdmVyeV9hY2Nlc3NUb2tlbn1gLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuY29udGVudGZ1bC5kZWxpdmVyeS52MStqc29uJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9ic2VydmU6IFwicmVzcG9uc2VcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSBgaHR0cHM6Ly9jZG4uY29udGVudGZ1bC5jb20vc3BhY2VzLyR7dGhpcy5jcmVkZW50aWFscy5zcGFjZV9pZH0vZW52aXJvbm1lbnRzLyR7dGhpcy5jcmVkZW50aWFscy5lbnZpcm9ubWV0fS9gO1xuICAgICAgfVxuICB9XG5cblxuICAvKipcbiAqIFJldHVybiB0aGUgaXRlbXMgcmVsYXRlZCB3aXRoIGEgc3BlY2lmaWMgY29udGVudCB0eXBlXG4gKiBAcGFyYW0gY29udGVudFR5cGUgU3RyaW5nXG4gKiBAcGFyYW0gbGltaXQgT3B0aW9uYWwoTnVtYmVyKVxuICogQHBhcmFtIHNraXAgT3B0aW9uYWwoTnVtYmVyKVxuKi9cbiAgZ2V0SXRlbXMoY29udGVudFR5cGU6IHN0cmluZywgbGltaXQ/OiBudW1iZXIsIHNraXA/OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxpbWl0ID8gbGltaXQgPSBsaW1pdCA6IGxpbWl0ID0gMTAwO1xuICAgIHNraXAgPyBza2lwID0gc2tpcCA6IHNraXAgPSAwO1xuICAgIGNvbnN0IF91cmwgPSBgJHt0aGlzLmJhc2VVcmx9ZW50cmllcz9jb250ZW50X3R5cGU9JHtjb250ZW50VHlwZX0mbGltaXQ9JHtsaW1pdH0mc2tpcD0ke3NraXB9YDtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXG4gICAgICAgIHRhcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAqIFJldHVybiBhIHNwZWNpZmljIGl0ZW0gYnkgSWRcbiAqIEBwYXJhbSBlbnRyeUlkIFN0cmluZ1xuKi9cbiAgZ2V0SXRlbUJ5SWQoZW50cnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgX3VybCA9IGAke3RoaXMuYmFzZVVybH1lbnRyaWVzLyR7ZW50cnlJZH1gXG5cbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXG4gICAgICAgIHRhcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgfVxuXG4gIC8qKlxuICogUmV0dXJuIGEgbGlzdCBvZiBpdGVtcyByZWxhdGVkIHdpdGggYSBzcGVjaWZpYyBjb250ZW50IHR5cGVcbiAqIEBwYXJhbSBjb250ZW50VHlwZSBTdHJpbmdcbiAqIEBwYXJhbSBsaW1pdCBPcHRpb25hbChOdW1iZXIpXG4gKiBAcGFyYW0gc2tpcCBPcHRpb25hbChOdW1iZXIpXG4qL1xuICBnZXRFbGVtZW50c0J5Q29udGVudFR5cGUoY29udGVudFR5cGU6IHN0cmluZywgbGltaXQ/OiBudW1iZXIsIHNraXA/OiBudW1iZXIpIHtcbiAgICBsaW1pdCA/IGxpbWl0ID0gbGltaXQgOiBsaW1pdCA9IDEwMDtcbiAgICBza2lwID8gc2tpcCA9IHNraXAgOiBza2lwID0gMDtcbiAgICBsZXQgX3VybCA9IGAke3RoaXMuYmFzZVVybH1lbnRyaWVzP2NvbnRlbnRfdHlwZT0ke2NvbnRlbnRUeXBlfSZsaW1pdD0ke2xpbWl0fSZza2lwPSR7c2tpcH1gXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxuICAgICAgICB0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAqIFJldHVybiBhbiBpdGVtIHJlbGF0ZWQgd2l0aCBhIHNwZWNpZmljIGFzc2V0SWRcbiAqIEBwYXJhbSBhc3NldElkIFN0cmluZ1xuKi9cbiAgZ2V0QXNzZXQoYXNzZXRJZDogc3RyaW5nKSB7XG4gICAgbGV0IF91cmwgPSBgJHt0aGlzLmJhc2VVcmx9YXNzZXRzLyR7YXNzZXRJZH1gO1xuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxufVxuIl19