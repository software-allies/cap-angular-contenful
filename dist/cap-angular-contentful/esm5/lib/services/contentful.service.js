/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/contentful.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
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
        { type: Injectable }
    ];
    /** @nocollapse */
    CapContentfulService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FwLWFuZ3VsYXItY29udGVudGZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFPRSw4QkFDVSxLQUFpQixFQUNqQixXQUEwQjtRQUQxQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQ2hDLElBQUcsV0FBVyxFQUFDO1lBQ2IsSUFBSSxDQUFDLFdBQVcsR0FBRztnQkFDakIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO29CQUN2QixlQUFlLEVBQUUsWUFBVSxXQUFXLENBQUMsb0JBQXNCO29CQUM3RCxjQUFjLEVBQUUsNkNBQTZDO2lCQUM5RCxDQUFDO2dCQUNGLE9BQU8sRUFBRSxVQUFVO2FBQ3BCLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLHVDQUFxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsc0JBQWlCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxNQUFHLENBQUM7U0FDL0g7SUFDTCxDQUFDO0lBR0Q7Ozs7O0lBS0E7Ozs7Ozs7O0lBQ0EsdUNBQVE7Ozs7Ozs7SUFBUixVQUFTLFdBQW1CLEVBQUUsS0FBYyxFQUFFLElBQWE7UUFBM0QsaUJBYUM7UUFaQyxLQUFLLENBQUMsQ0FBQyxD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QUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMvQyxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUMsUUFBYSxJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBYixDQUFhLEVBQUMsRUFDckMsVUFBVTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsRUFBQyxDQUM3QyxDQUFDO0lBQ04sQ0FBQzs7Z0JBOUZGLFVBQVU7Ozs7Z0JBTkYsVUFBVTtnQkFHVixhQUFhOztJQWtHdEIsMkJBQUM7Q0FBQSxBQS9GRCxJQStGQztTQTdGWSxvQkFBb0I7Ozs7OztJQUUvQix1Q0FBd0I7Ozs7O0lBQ3hCLDJDQUF5Qjs7Ozs7SUFHdkIscUNBQXlCOzs7OztJQUN6QiwyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBDYXBDb250ZW50ZnVsU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgaHR0cE9wdGlvbnM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgY3JlZGVudGlhbHM6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgIGlmKGNyZWRlbnRpYWxzKXtcbiAgICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Y3JlZGVudGlhbHMuZGVsaXZlcnlfYWNjZXNzVG9rZW59YCxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmNvbnRlbnRmdWwuZGVsaXZlcnkudjEranNvbidcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvYnNlcnZlOiBcInJlc3BvbnNlXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYGh0dHBzOi8vY2RuLmNvbnRlbnRmdWwuY29tL3NwYWNlcy8ke3RoaXMuY3JlZGVudGlhbHMuc3BhY2VfaWR9L2Vudmlyb25tZW50cy8ke3RoaXMuY3JlZGVudGlhbHMuZW52aXJvbm1lbnR9L2A7XG4gICAgICB9XG4gIH1cblxuXG4gIC8qKlxuICogUmV0dXJuIHRoZSBpdGVtcyByZWxhdGVkIHdpdGggYSBzcGVjaWZpYyBjb250ZW50IHR5cGVcbiAqIEBwYXJhbSBjb250ZW50VHlwZSBTdHJpbmdcbiAqIEBwYXJhbSBsaW1pdCBPcHRpb25hbChOdW1iZXIpXG4gKiBAcGFyYW0gc2tpcCBPcHRpb25hbChOdW1iZXIpXG4qL1xuICBnZXRJdGVtcyhjb250ZW50VHlwZTogc3RyaW5nLCBsaW1pdD86IG51bWJlciwgc2tpcD86IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGltaXQgPyBsaW1pdCA9IGxpbWl0IDogbGltaXQgPSAxMDA7XG4gICAgc2tpcCA/IHNraXAgPSBza2lwIDogc2tpcCA9IDA7XG4gICAgY29uc3QgX3VybCA9IGAke3RoaXMuYmFzZVVybH1lbnRyaWVzP2NvbnRlbnRfdHlwZT0ke2NvbnRlbnRUeXBlfSZsaW1pdD0ke2xpbWl0fSZza2lwPSR7c2tpcH1gO1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcbiAgICAgICAgdGFwKChyZXNwb25zZTogYW55KSA9PiB7XG5cbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICogUmV0dXJuIGEgc3BlY2lmaWMgaXRlbSBieSBJZFxuICogQHBhcmFtIGVudHJ5SWQgU3RyaW5nXG4qL1xuICBnZXRJdGVtQnlJZChlbnRyeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBfdXJsID0gYCR7dGhpcy5iYXNlVXJsfWVudHJpZXMvJHtlbnRyeUlkfWBcblxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcbiAgICAgICAgdGFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xuICB9XG5cbiAgLyoqXG4gKiBSZXR1cm4gYSBsaXN0IG9mIGl0ZW1zIHJlbGF0ZWQgd2l0aCBhIHNwZWNpZmljIGNvbnRlbnQgdHlwZVxuICogQHBhcmFtIGNvbnRlbnRUeXBlIFN0cmluZ1xuICogQHBhcmFtIGxpbWl0IE9wdGlvbmFsKE51bWJlcilcbiAqIEBwYXJhbSBza2lwIE9wdGlvbmFsKE51bWJlcilcbiovXG4gIGdldEVsZW1lbnRzQnlDb250ZW50VHlwZShjb250ZW50VHlwZTogc3RyaW5nLCBsaW1pdD86IG51bWJlciwgc2tpcD86IG51bWJlcikge1xuICAgIGxpbWl0ID8gbGltaXQgPSBsaW1pdCA6IGxpbWl0ID0gMTAwO1xuICAgIHNraXAgPyBza2lwID0gc2tpcCA6IHNraXAgPSAwO1xuICAgIGxldCBfdXJsID0gYCR7dGhpcy5iYXNlVXJsfWVudHJpZXM/Y29udGVudF90eXBlPSR7Y29udGVudFR5cGV9JmxpbWl0PSR7bGltaXR9JnNraXA9JHtza2lwfWBcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXG4gICAgICAgIHRhcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICogUmV0dXJuIGFuIGl0ZW0gcmVsYXRlZCB3aXRoIGEgc3BlY2lmaWMgYXNzZXRJZFxuICogQHBhcmFtIGFzc2V0SWQgU3RyaW5nXG4qL1xuICBnZXRBc3NldChhc3NldElkOiBzdHJpbmcpIHtcbiAgICBsZXQgX3VybCA9IGAke3RoaXMuYmFzZVVybH1hc3NldHMvJHthc3NldElkfWA7XG5cbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG59XG4iXX0=