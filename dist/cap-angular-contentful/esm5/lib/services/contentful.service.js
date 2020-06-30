import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./config.service";
var CapContentfulService = /** @class */ (function () {
    function CapContentfulService(_http, credentials) {
        this._http = _http;
        this.credentials = credentials;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Authorization': "Bearer " + credentials.delivery_accessToken,
                'Content-Type': 'application/vnd.contentful.delivery.v1+json'
            }),
            observe: "response"
        };
        this.baseUrl = "https://cdn.contentful.com/spaces/" + this.credentials.space_id + "/environments/" + this.credentials.environmet + "/";
    }
    /**
   * Return the items related with a specific content type
   * @param contentType String
   * @param limit Optional(Number)
   * @param skip Optional(Number)
  */
    CapContentfulService.prototype.getItems = function (contentType, limit, skip) {
        var _this = this;
        limit ? limit = limit : limit = 100;
        var _url = this.baseUrl + "entries?content_type=" + contentType + "&limit=" + limit + "&skip=" + skip;
        return this._http.get(_url, this.httpOptions)
            .pipe(map(function (response) { return response.body; }), tap(function (response) {
            return response;
        }), catchError(function (error) { return _this.handleError(error); }));
    };
    /**
   * Return a specific item by Id
   * @param entryId String
  */
    CapContentfulService.prototype.getItemById = function (entryId) {
        var _this = this;
        var _url = this.baseUrl + "entries/" + entryId;
        return this._http.get(_url, this.httpOptions)
            .pipe(map(function (response) { return response.body; }), tap(function (response) { return response; }), catchError(function (error) { return _this.handleError(error); }));
    };
    CapContentfulService.prototype.handleError = function (error) {
        console.error(error);
        return throwError(error || 'Server error');
    };
    /**
   * Return a list of items related with a specific content type
   * @param contentType String
   * @param limit Optional(Number)
   * @param skip Optional(Number)
  */
    CapContentfulService.prototype.getElementsByContentType = function (contentType, limit, skip) {
        var _this = this;
        limit ? limit = limit : limit = 100;
        var _url = this.baseUrl + "entries?content_type=" + contentType + "&limit=" + limit + "&skip=" + skip;
        return this._http.get(_url, this.httpOptions)
            .pipe(map(function (response) { return response.body; }), tap(function (response) { return response; }), catchError(function (error) { return _this.handleError(error); }));
    };
    /**
   * Return an item related with a specific assetId
   * @param assetId String
  */
    CapContentfulService.prototype.getAsset = function (assetId) {
        var _this = this;
        var _url = this.baseUrl + "assets/" + assetId;
        return this._http.get(_url, this.httpOptions)
            .pipe(map(function (response) { return response.body; }), catchError(function (error) { return _this.handleError(error); }));
    };
    /** @nocollapse */ CapContentfulService.ɵfac = function CapContentfulService_Factory(t) { return new (t || CapContentfulService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); };
    /** @nocollapse */ CapContentfulService.ɵprov = i0.ɵɵdefineInjectable({ token: CapContentfulService, factory: CapContentfulService.ɵfac, providedIn: 'root' });
    return CapContentfulService;
}());
export { CapContentfulService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CapContentfulService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FwLWFuZ3VsYXItY29udGVudGZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUd0RDtJQVFFLDhCQUNVLEtBQWlCLEVBQ2pCLFdBQTBCO1FBRDFCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGVBQWUsRUFBRSxZQUFVLFdBQVcsQ0FBQyxvQkFBc0I7Z0JBQzdELGNBQWMsRUFBRSw2Q0FBNkM7YUFDOUQsQ0FBQztZQUNGLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLHVDQUFxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsc0JBQWlCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxNQUFHLENBQUM7SUFDL0gsQ0FBQztJQUdEOzs7OztJQUtBO0lBQ0EsdUNBQVEsR0FBUixVQUFTLFdBQW1CLEVBQUUsS0FBYyxFQUFFLElBQWE7UUFBM0QsaUJBYUM7UUFaQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFcEMsSUFBTSxJQUFJLEdBQU0sSUFBSSxDQUFDLE9BQU8sNkJBQXdC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LG1CQUZuQixNQUFNOytCQVBwQjtDQW1HQyxBQTdGRCxJQTZGQztTQTFGWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUhoQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDYXBDb250ZW50ZnVsU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgaHR0cE9wdGlvbnM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgY3JlZGVudGlhbHM6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Y3JlZGVudGlhbHMuZGVsaXZlcnlfYWNjZXNzVG9rZW59YCxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuY29udGVudGZ1bC5kZWxpdmVyeS52MStqc29uJ1xuICAgICAgfSksXG4gICAgICBvYnNlcnZlOiBcInJlc3BvbnNlXCJcbiAgICB9O1xuICAgIHRoaXMuYmFzZVVybCA9IGBodHRwczovL2Nkbi5jb250ZW50ZnVsLmNvbS9zcGFjZXMvJHt0aGlzLmNyZWRlbnRpYWxzLnNwYWNlX2lkfS9lbnZpcm9ubWVudHMvJHt0aGlzLmNyZWRlbnRpYWxzLmVudmlyb25tZXR9L2A7XG4gIH1cblxuXG4gIC8qKlxuICogUmV0dXJuIHRoZSBpdGVtcyByZWxhdGVkIHdpdGggYSBzcGVjaWZpYyBjb250ZW50IHR5cGVcbiAqIEBwYXJhbSBjb250ZW50VHlwZSBTdHJpbmdcbiAqIEBwYXJhbSBsaW1pdCBPcHRpb25hbChOdW1iZXIpXG4gKiBAcGFyYW0gc2tpcCBPcHRpb25hbChOdW1iZXIpXG4qL1xuICBnZXRJdGVtcyhjb250ZW50VHlwZTogc3RyaW5nLCBsaW1pdD86IG51bWJlciwgc2tpcD86IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGltaXQgPyBsaW1pdCA9IGxpbWl0IDogbGltaXQgPSAxMDA7XG5cbiAgICBjb25zdCBfdXJsID0gYCR7dGhpcy5iYXNlVXJsfWVudHJpZXM/Y29udGVudF90eXBlPSR7Y29udGVudFR5cGV9JmxpbWl0PSR7bGltaXR9JnNraXA9JHtza2lwfWA7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxuICAgICAgICB0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcblxuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gKiBSZXR1cm4gYSBzcGVjaWZpYyBpdGVtIGJ5IElkXG4gKiBAcGFyYW0gZW50cnlJZCBTdHJpbmdcbiovXG4gIGdldEl0ZW1CeUlkKGVudHJ5SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IF91cmwgPSBgJHt0aGlzLmJhc2VVcmx9ZW50cmllcy8ke2VudHJ5SWR9YFxuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxuICAgICAgICB0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gIH1cblxuICAvKipcbiAqIFJldHVybiBhIGxpc3Qgb2YgaXRlbXMgcmVsYXRlZCB3aXRoIGEgc3BlY2lmaWMgY29udGVudCB0eXBlXG4gKiBAcGFyYW0gY29udGVudFR5cGUgU3RyaW5nXG4gKiBAcGFyYW0gbGltaXQgT3B0aW9uYWwoTnVtYmVyKVxuICogQHBhcmFtIHNraXAgT3B0aW9uYWwoTnVtYmVyKVxuKi9cbiAgZ2V0RWxlbWVudHNCeUNvbnRlbnRUeXBlKGNvbnRlbnRUeXBlOiBzdHJpbmcsIGxpbWl0PzogbnVtYmVyLCBza2lwPzogbnVtYmVyKSB7XG4gICAgbGltaXQgPyBsaW1pdCA9IGxpbWl0IDogbGltaXQgPSAxMDA7XG4gICAgbGV0IF91cmwgPSBgJHt0aGlzLmJhc2VVcmx9ZW50cmllcz9jb250ZW50X3R5cGU9JHtjb250ZW50VHlwZX0mbGltaXQ9JHtsaW1pdH0mc2tpcD0ke3NraXB9YFxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcbiAgICAgICAgdGFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gKiBSZXR1cm4gYW4gaXRlbSByZWxhdGVkIHdpdGggYSBzcGVjaWZpYyBhc3NldElkXG4gKiBAcGFyYW0gYXNzZXRJZCBTdHJpbmdcbiovXG4gIGdldEFzc2V0KGFzc2V0SWQ6IHN0cmluZykge1xuICAgIGxldCBfdXJsID0gYCR7dGhpcy5iYXNlVXJsfWFzc2V0cy8ke2Fzc2V0SWR9YDtcblxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==