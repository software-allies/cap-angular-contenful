import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
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
    CapContentfulService.prototype.getItems = function (contentType, limit, skip) {
        var _this = this;
        limit ? limit = limit : limit = 100;
        skip ? skip = skip : skip = 0;
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
        skip ? skip = skip : skip = 0;
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
    /** @nocollapse */ CapContentfulService.ɵprov = i0.ɵɵdefineInjectable({ token: CapContentfulService, factory: CapContentfulService.ɵfac });
    return CapContentfulService;
}());
export { CapContentfulService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CapContentfulService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FwLWFuZ3VsYXItY29udGVudGZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUUzQztJQU9FLDhCQUNVLEtBQWlCLEVBQ2pCLFdBQTBCO1FBRDFCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDaEMsSUFBRyxXQUFXLEVBQUM7WUFDYixJQUFJLENBQUMsV0FBVyxHQUFHO2dCQUNqQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7b0JBQ3ZCLGVBQWUsRUFBRSxZQUFVLFdBQVcsQ0FBQyxvQkFBc0I7b0JBQzdELGNBQWMsRUFBRSw2Q0FBNkM7aUJBQzlELENBQUM7Z0JBQ0YsT0FBTyxFQUFFLFVBQVU7YUFDcEIsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsdUNBQXFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxzQkFBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLE1BQUcsQ0FBQztTQUMvSDtJQUNMLENBQUM7SUFHRDs7Ozs7SUFLQTtJQUNBLHVDQUFRLEdBQVIsVUFBUyxXQUFtQixFQUFFLEtBQWMsRUFBRSxJQUFhO1FBQTNELGlCQWFDO1FBWkMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3BDLElBQUksQ0FB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LE9BQUEsUUFBUSxDQUFDLElBQUksRUFBYixDQUFhLENBQUMsRUFDckMsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUM3QyxDQUFDO0lBQ04sQ0FBQzsrR0E1RlUsb0JBQW9CO21GQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9COytCQVJqQztDQXFHQyxBQS9GRCxJQStGQztTQTdGWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUZoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgQ2FwQ29udGVudGZ1bFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuICBwcml2YXRlIGh0dHBPcHRpb25zOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNyZWRlbnRpYWxzOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgICBpZihjcmVkZW50aWFscyl7XG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XG4gICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2NyZWRlbnRpYWxzLmRlbGl2ZXJ5X2FjY2Vzc1Rva2VufWAsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5jb250ZW50ZnVsLmRlbGl2ZXJ5LnYxK2pzb24nXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb2JzZXJ2ZTogXCJyZXNwb25zZVwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGBodHRwczovL2Nkbi5jb250ZW50ZnVsLmNvbS9zcGFjZXMvJHt0aGlzLmNyZWRlbnRpYWxzLnNwYWNlX2lkfS9lbnZpcm9ubWVudHMvJHt0aGlzLmNyZWRlbnRpYWxzLmVudmlyb25tZW50fS9gO1xuICAgICAgfVxuICB9XG5cblxuICAvKipcbiAqIFJldHVybiB0aGUgaXRlbXMgcmVsYXRlZCB3aXRoIGEgc3BlY2lmaWMgY29udGVudCB0eXBlXG4gKiBAcGFyYW0gY29udGVudFR5cGUgU3RyaW5nXG4gKiBAcGFyYW0gbGltaXQgT3B0aW9uYWwoTnVtYmVyKVxuICogQHBhcmFtIHNraXAgT3B0aW9uYWwoTnVtYmVyKVxuKi9cbiAgZ2V0SXRlbXMoY29udGVudFR5cGU6IHN0cmluZywgbGltaXQ/OiBudW1iZXIsIHNraXA/OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxpbWl0ID8gbGltaXQgPSBsaW1pdCA6IGxpbWl0ID0gMTAwO1xuICAgIHNraXAgPyBza2lwID0gc2tpcCA6IHNraXAgPSAwO1xuICAgIGNvbnN0IF91cmwgPSBgJHt0aGlzLmJhc2VVcmx9ZW50cmllcz9jb250ZW50X3R5cGU9JHtjb250ZW50VHlwZX0mbGltaXQ9JHtsaW1pdH0mc2tpcD0ke3NraXB9YDtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXG4gICAgICAgIHRhcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAqIFJldHVybiBhIHNwZWNpZmljIGl0ZW0gYnkgSWRcbiAqIEBwYXJhbSBlbnRyeUlkIFN0cmluZ1xuKi9cbiAgZ2V0SXRlbUJ5SWQoZW50cnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgX3VybCA9IGAke3RoaXMuYmFzZVVybH1lbnRyaWVzLyR7ZW50cnlJZH1gXG5cbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXG4gICAgICAgIHRhcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgfVxuXG4gIC8qKlxuICogUmV0dXJuIGEgbGlzdCBvZiBpdGVtcyByZWxhdGVkIHdpdGggYSBzcGVjaWZpYyBjb250ZW50IHR5cGVcbiAqIEBwYXJhbSBjb250ZW50VHlwZSBTdHJpbmdcbiAqIEBwYXJhbSBsaW1pdCBPcHRpb25hbChOdW1iZXIpXG4gKiBAcGFyYW0gc2tpcCBPcHRpb25hbChOdW1iZXIpXG4qL1xuICBnZXRFbGVtZW50c0J5Q29udGVudFR5cGUoY29udGVudFR5cGU6IHN0cmluZywgbGltaXQ/OiBudW1iZXIsIHNraXA/OiBudW1iZXIpIHtcbiAgICBsaW1pdCA/IGxpbWl0ID0gbGltaXQgOiBsaW1pdCA9IDEwMDtcbiAgICBza2lwID8gc2tpcCA9IHNraXAgOiBza2lwID0gMDtcbiAgICBsZXQgX3VybCA9IGAke3RoaXMuYmFzZVVybH1lbnRyaWVzP2NvbnRlbnRfdHlwZT0ke2NvbnRlbnRUeXBlfSZsaW1pdD0ke2xpbWl0fSZza2lwPSR7c2tpcH1gXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxuICAgICAgICB0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAqIFJldHVybiBhbiBpdGVtIHJlbGF0ZWQgd2l0aCBhIHNwZWNpZmljIGFzc2V0SWRcbiAqIEBwYXJhbSBhc3NldElkIFN0cmluZ1xuKi9cbiAgZ2V0QXNzZXQoYXNzZXRJZDogc3RyaW5nKSB7XG4gICAgbGV0IF91cmwgPSBgJHt0aGlzLmJhc2VVcmx9YXNzZXRzLyR7YXNzZXRJZH1gO1xuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PGFueT4oX3VybCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLmJvZHkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxufVxuIl19