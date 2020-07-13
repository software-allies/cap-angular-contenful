/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/contentful.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
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
            this.baseUrl = `https://cdn.contentful.com/spaces/${this.credentials.space_id}/environments/${this.credentials.environment}/`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FwLWFuZ3VsYXItY29udGVudGZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RCxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUsvQixZQUNVLEtBQWlCLEVBQ2pCLFdBQTBCO1FBRDFCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDaEMsSUFBRyxXQUFXLEVBQUM7WUFDYixJQUFJLENBQUMsV0FBVyxHQUFHO2dCQUNqQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7b0JBQ3ZCLGVBQWUsRUFBRSxVQUFVLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRTtvQkFDN0QsY0FBYyxFQUFFLDZDQUE2QztpQkFDOUQsQ0FBQztnQkFDRixPQUFPLEVBQUUsVUFBVTthQUNwQixDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQ0FBcUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLGlCQUFpQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxDQUFDO1NBQy9IO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFTRCxRQUFRLENBQUMsV0FBbUIsRUFBRSxLQUFjLEVBQUUsSUFBYTtRQUN6RCxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMs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Ozs7OztJQTNGQyx1Q0FBd0I7Ozs7O0lBQ3hCLDJDQUF5Qjs7Ozs7SUFHdkIscUNBQXlCOzs7OztJQUN6QiwyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgQ2FwQ29udGVudGZ1bFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuICBwcml2YXRlIGh0dHBPcHRpb25zOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNyZWRlbnRpYWxzOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgICBpZihjcmVkZW50aWFscyl7XG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2NyZWRlbnRpYWxzLmRlbGl2ZXJ5X2FjY2Vzc1Rva2VufWAsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5jb250ZW50ZnVsLmRlbGl2ZXJ5LnYxK2pzb24nXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb2JzZXJ2ZTogXCJyZXNwb25zZVwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGBodHRwczovL2Nkbi5jb250ZW50ZnVsLmNvbS9zcGFjZXMvJHt0aGlzLmNyZWRlbnRpYWxzLnNwYWNlX2lkfS9lbnZpcm9ubWVudHMvJHt0aGlzLmNyZWRlbnRpYWxzLmVudmlyb25tZW50fS9gO1xuICAgICAgfVxuICB9XG5cblxuICAvKipcbiAqIFJldHVybiB0aGUgaXRlbXMgcmVsYXRlZCB3aXRoIGEgc3BlY2lmaWMgY29udGVudCB0eXBlXG4gKiBAcGFyYW0gY29udGVudFR5cGUgU3RyaW5nXG4gKiBAcGFyYW0gbGltaXQgT3B0aW9uYWwoTnVtYmVyKVxuICogQHBhcmFtIHNraXAgT3B0aW9uYWwoTnVtYmVyKVxuKi9cbiAgZ2V0SXRlbXMoY29udGVudFR5cGU6IHN0cmluZywgbGltaXQ/OiBudW1iZXIsIHNraXA/OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxpbWl0ID8gbGltaXQgPSBsaW1pdCA6IGxpbWl0ID0gMTAwO1xuICAgIHNraXAgPyBza2lwID0gc2tpcCA6IHNraXAgPSAwO1xuICAgIGNvbnN0IF91cmwgPSBgJHt0aGlzLmJhc2VVcmx9ZW50cmllcz9jb250ZW50X3R5cGU9JHtjb250ZW50VHlwZX0mbGltaXQ9JHtsaW1pdH0mc2tpcD0ke3NraXB9YDtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXG4gICAgICAgIHRhcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAqIFJldHVybiBhIHNwZWNpZmljIGl0ZW0gYnkgSWRcbiAqIEBwYXJhbSBlbnRyeUlkIFN0cmluZ1xuKi9cbiAgZ2V0SXRlbUJ5SWQoZW50cnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgX3VybCA9IGAke3RoaXMuYmFzZVVybH1lbnRyaWVzLyR7ZW50cnlJZH1gXG5cbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXG4gICAgICAgIHRhcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgfVxuXG4gIC8qKlxuICogUmV0dXJuIGEgbGlzdCBvZiBpdGVtcyByZWxhdGVkIHdpdGggYSBzcGVjaWZpYyBjb250ZW50IHR5cGVcbiAqIEBwYXJhbSBjb250ZW50VHlwZSBTdHJpbmdcbiAqIEBwYXJhbSBsaW1pdCBPcHRpb25hbChOdW1iZXIpXG4gKiBAcGFyYW0gc2tpcCBPcHRpb25hbChOdW1iZXIpXG4qL1xuICBnZXRFbGVtZW50c0J5Q29udGVudFR5cGUoY29udGVudFR5cGU6IHN0cmluZywgbGltaXQ/OiBudW1iZXIsIHNraXA/OiBudW1iZXIpIHtcbiAgICBsaW1pdCA/IGxpbWl0ID0gbGltaXQgOiBsaW1pdCA9IDEwMDtcbiAgICBza2lwID8gc2tpcCA9IHNraXAgOiBza2lwID0gMDtcbiAgICBsZXQgX3VybCA9IGAke3RoaXMuYmFzZVVybH1lbnRyaWVzP2NvbnRlbnRfdHlwZT0ke2NvbnRlbnRUeXBlfSZsaW1pdD0ke2xpbWl0fSZza2lwPSR7c2tpcH1gXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxuICAgICAgICB0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAqIFJldHVybiBhbiBpdGVtIHJlbGF0ZWQgd2l0aCBhIHNwZWNpZmljIGFzc2V0SWRcbiAqIEBwYXJhbSBhc3NldElkIFN0cmluZ1xuKi9cbiAgZ2V0QXNzZXQoYXNzZXRJZDogc3RyaW5nKSB7XG4gICAgbGV0IF91cmwgPSBgJHt0aGlzLmJhc2VVcmx9YXNzZXRzLyR7YXNzZXRJZH1gO1xuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxufVxuIl19