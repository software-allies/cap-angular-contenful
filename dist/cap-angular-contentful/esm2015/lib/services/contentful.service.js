import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./config.service";
export class CapContentfulService {
    constructor(_http, credentials) {
        this._http = _http;
        this.credentials = credentials;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${credentials.delivery_accessToken}`,
                'Content-Type': 'application/vnd.contentful.delivery.v1+json'
            }),
            observe: "response"
        };
        this.baseUrl = `https://cdn.contentful.com/spaces/${this.credentials.space_id}/environments/${this.credentials.environmet}/`;
    }
    /**
   * Return the items related with a specific content type
   * @param contentType String
   * @param limit Optional(Number)
   * @param skip Optional(Number)
  */
    getItems(contentType, limit, skip) {
        limit ? limit = limit : limit = 100;
        const _url = `${this.baseUrl}entries?content_type=${contentType}&limit=${limit}&skip=${skip}`;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((response) => response.body), tap((response) => {
            return response;
        }), catchError(error => this.handleError(error)));
    }
    /**
   * Return a specific item by Id
   * @param entryId String
  */
    getItemById(entryId) {
        let _url = `${this.baseUrl}entries/${entryId}`;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((response) => response.body), tap((response) => response), catchError(error => this.handleError(error)));
    }
    handleError(error) {
        console.error(error);
        return throwError(error || 'Server error');
    }
    /**
   * Return a list of items related with a specific content type
   * @param contentType String
   * @param limit Optional(Number)
   * @param skip Optional(Number)
  */
    getElementsByContentType(contentType, limit, skip) {
        limit ? limit = limit : limit = 100;
        let _url = `${this.baseUrl}entries?content_type=${contentType}&limit=${limit}&skip=${skip}`;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((response) => response.body), tap((response) => response), catchError(error => this.handleError(error)));
    }
    /**
   * Return an item related with a specific assetId
   * @param assetId String
  */
    getAsset(assetId) {
        let _url = `${this.baseUrl}assets/${assetId}`;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((response) => response.body), catchError(error => this.handleError(error)));
    }
}
/** @nocollapse */ CapContentfulService.ɵfac = function CapContentfulService_Factory(t) { return new (t || CapContentfulService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigService)); };
/** @nocollapse */ CapContentfulService.ɵprov = i0.ɵɵdefineInjectable({ token: CapContentfulService, factory: CapContentfulService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CapContentfulService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FwLWFuZ3VsYXItY29udGVudGZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU10RCxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQ1UsS0FBaUIsRUFDakIsV0FBMEI7UUFEMUIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsZUFBZSxFQUFFLFVBQVUsV0FBVyxDQUFDLG9CQUFvQixFQUFFO2dCQUM3RCxjQUFjLEVBQUUsNkNBQTZDO2FBQzlELENBQUM7WUFDRixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQ0FBcUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLGlCQUFpQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxDQUFDO0lBQy9ILENBQUM7SUFHRDs7Ozs7SUFLQTtJQUNBLFFBQVEsQ0FBQyxXQUFtQixFQUFFLEtBQWMsRUFBRSxJQUFhO1FBQ3pELEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUVwQyxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxP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bnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2FwQ29udGVudGZ1bFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xuICBwcml2YXRlIGh0dHBPcHRpb25zOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNyZWRlbnRpYWxzOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2NyZWRlbnRpYWxzLmRlbGl2ZXJ5X2FjY2Vzc1Rva2VufWAsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmNvbnRlbnRmdWwuZGVsaXZlcnkudjEranNvbidcbiAgICAgIH0pLFxuICAgICAgb2JzZXJ2ZTogXCJyZXNwb25zZVwiXG4gICAgfTtcbiAgICB0aGlzLmJhc2VVcmwgPSBgaHR0cHM6Ly9jZG4uY29udGVudGZ1bC5jb20vc3BhY2VzLyR7dGhpcy5jcmVkZW50aWFscy5zcGFjZV9pZH0vZW52aXJvbm1lbnRzLyR7dGhpcy5jcmVkZW50aWFscy5lbnZpcm9ubWV0fS9gO1xuICB9XG5cblxuICAvKipcbiAqIFJldHVybiB0aGUgaXRlbXMgcmVsYXRlZCB3aXRoIGEgc3BlY2lmaWMgY29udGVudCB0eXBlXG4gKiBAcGFyYW0gY29udGVudFR5cGUgU3RyaW5nXG4gKiBAcGFyYW0gbGltaXQgT3B0aW9uYWwoTnVtYmVyKVxuICogQHBhcmFtIHNraXAgT3B0aW9uYWwoTnVtYmVyKVxuKi9cbiAgZ2V0SXRlbXMoY29udGVudFR5cGU6IHN0cmluZywgbGltaXQ/OiBudW1iZXIsIHNraXA/OiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxpbWl0ID8gbGltaXQgPSBsaW1pdCA6IGxpbWl0ID0gMTAwO1xuXG4gICAgY29uc3QgX3VybCA9IGAke3RoaXMuYmFzZVVybH1lbnRyaWVzP2NvbnRlbnRfdHlwZT0ke2NvbnRlbnRUeXBlfSZsaW1pdD0ke2xpbWl0fSZza2lwPSR7c2tpcH1gO1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcbiAgICAgICAgdGFwKChyZXNwb25zZTogYW55KSA9PiB7XG5cbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICogUmV0dXJuIGEgc3BlY2lmaWMgaXRlbSBieSBJZFxuICogQHBhcmFtIGVudHJ5SWQgU3RyaW5nXG4qL1xuICBnZXRJdGVtQnlJZChlbnRyeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBfdXJsID0gYCR7dGhpcy5iYXNlVXJsfWVudHJpZXMvJHtlbnRyeUlkfWBcblxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcbiAgICAgICAgdGFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xuICB9XG5cbiAgLyoqXG4gKiBSZXR1cm4gYSBsaXN0IG9mIGl0ZW1zIHJlbGF0ZWQgd2l0aCBhIHNwZWNpZmljIGNvbnRlbnQgdHlwZVxuICogQHBhcmFtIGNvbnRlbnRUeXBlIFN0cmluZ1xuICogQHBhcmFtIGxpbWl0IE9wdGlvbmFsKE51bWJlcilcbiAqIEBwYXJhbSBza2lwIE9wdGlvbmFsKE51bWJlcilcbiovXG4gIGdldEVsZW1lbnRzQnlDb250ZW50VHlwZShjb250ZW50VHlwZTogc3RyaW5nLCBsaW1pdD86IG51bWJlciwgc2tpcD86IG51bWJlcikge1xuICAgIGxpbWl0ID8gbGltaXQgPSBsaW1pdCA6IGxpbWl0ID0gMTAwO1xuICAgIGxldCBfdXJsID0gYCR7dGhpcy5iYXNlVXJsfWVudHJpZXM/Y29udGVudF90eXBlPSR7Y29udGVudFR5cGV9JmxpbWl0PSR7bGltaXR9JnNraXA9JHtza2lwfWBcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXG4gICAgICAgIHRhcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICogUmV0dXJuIGFuIGl0ZW0gcmVsYXRlZCB3aXRoIGEgc3BlY2lmaWMgYXNzZXRJZFxuICogQHBhcmFtIGFzc2V0SWQgU3RyaW5nXG4qL1xuICBnZXRBc3NldChhc3NldElkOiBzdHJpbmcpIHtcbiAgICBsZXQgX3VybCA9IGAke3RoaXMuYmFzZVVybH1hc3NldHMvJHthc3NldElkfWA7XG5cbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG59XG4iXX0=