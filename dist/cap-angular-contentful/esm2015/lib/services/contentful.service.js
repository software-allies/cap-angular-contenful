import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./config.service";
export class CapContentfulService {
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
   * @param contentType String
   * @param limit Optional(Number)
   * @param skip Optional(Number)
  */
    getItems(contentType, limit, skip) {
        limit ? limit = limit : limit = 100;
        skip ? skip = skip : skip = 0;
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
        skip ? skip = skip : skip = 0;
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
/** @nocollapse */ CapContentfulService.ɵprov = i0.ɵɵdefineInjectable({ token: CapContentfulService, factory: CapContentfulService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CapContentfulService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.ConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FwLWFuZ3VsYXItY29udGVudGZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb250ZW50ZnVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUkzQyxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQ1UsS0FBaUIsRUFDakIsV0FBMEI7UUFEMUIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUNoQyxJQUFHLFdBQVcsRUFBQztZQUNiLElBQUksQ0FBQyxXQUFXLEdBQUc7Z0JBQ2pCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztvQkFDdkIsZUFBZSxFQUFFLFVBQVUsV0FBVyxDQUFDLG9CQUFvQixFQUFFO29CQUM3RCxjQUFjLEVBQUUsNkNBQTZDO2lCQUM5RCxDQUFDO2dCQUNGLE9BQU8sRUFBRSxVQUFVO2FBQ3BCLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLHFDQUFxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsaUJBQWlCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLENBQUM7U0FDL0g7SUFDTCxDQUFDO0lBR0Q7Ozs7O0lBS0E7SUFDQSxRQUFRLENBQUMsV0FBbUIsRUFBRSxLQUFjLEVBQUUsSUFBYTtRQUN6RCxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDcEMsSUFB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SUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUM3QyxDQUFDO0lBQ04sQ0FBQzs7MkdBNUZVLG9CQUFvQjsrRUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBRmhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBDYXBDb250ZW50ZnVsU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgaHR0cE9wdGlvbnM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgY3JlZGVudGlhbHM6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgIGlmKGNyZWRlbnRpYWxzKXtcbiAgICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Y3JlZGVudGlhbHMuZGVsaXZlcnlfYWNjZXNzVG9rZW59YCxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmNvbnRlbnRmdWwuZGVsaXZlcnkudjEranNvbidcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvYnNlcnZlOiBcInJlc3BvbnNlXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYGh0dHBzOi8vY2RuLmNvbnRlbnRmdWwuY29tL3NwYWNlcy8ke3RoaXMuY3JlZGVudGlhbHMuc3BhY2VfaWR9L2Vudmlyb25tZW50cy8ke3RoaXMuY3JlZGVudGlhbHMuZW52aXJvbm1lbnR9L2A7XG4gICAgICB9XG4gIH1cblxuXG4gIC8qKlxuICogUmV0dXJuIHRoZSBpdGVtcyByZWxhdGVkIHdpdGggYSBzcGVjaWZpYyBjb250ZW50IHR5cGVcbiAqIEBwYXJhbSBjb250ZW50VHlwZSBTdHJpbmdcbiAqIEBwYXJhbSBsaW1pdCBPcHRpb25hbChOdW1iZXIpXG4gKiBAcGFyYW0gc2tpcCBPcHRpb25hbChOdW1iZXIpXG4qL1xuICBnZXRJdGVtcyhjb250ZW50VHlwZTogc3RyaW5nLCBsaW1pdD86IG51bWJlciwgc2tpcD86IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGltaXQgPyBsaW1pdCA9IGxpbWl0IDogbGltaXQgPSAxMDA7XG4gICAgc2tpcCA/IHNraXAgPSBza2lwIDogc2tpcCA9IDA7XG4gICAgY29uc3QgX3VybCA9IGAke3RoaXMuYmFzZVVybH1lbnRyaWVzP2NvbnRlbnRfdHlwZT0ke2NvbnRlbnRUeXBlfSZsaW1pdD0ke2xpbWl0fSZza2lwPSR7c2tpcH1gO1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcbiAgICAgICAgdGFwKChyZXNwb25zZTogYW55KSA9PiB7XG5cbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICogUmV0dXJuIGEgc3BlY2lmaWMgaXRlbSBieSBJZFxuICogQHBhcmFtIGVudHJ5SWQgU3RyaW5nXG4qL1xuICBnZXRJdGVtQnlJZChlbnRyeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBfdXJsID0gYCR7dGhpcy5iYXNlVXJsfWVudHJpZXMvJHtlbnRyeUlkfWBcblxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxhbnk+KF91cmwsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZS5ib2R5KSxcbiAgICAgICAgdGFwKChyZXNwb25zZTogYW55KSA9PiByZXNwb25zZSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xuICB9XG5cbiAgLyoqXG4gKiBSZXR1cm4gYSBsaXN0IG9mIGl0ZW1zIHJlbGF0ZWQgd2l0aCBhIHNwZWNpZmljIGNvbnRlbnQgdHlwZVxuICogQHBhcmFtIGNvbnRlbnRUeXBlIFN0cmluZ1xuICogQHBhcmFtIGxpbWl0IE9wdGlvbmFsKE51bWJlcilcbiAqIEBwYXJhbSBza2lwIE9wdGlvbmFsKE51bWJlcilcbiovXG4gIGdldEVsZW1lbnRzQnlDb250ZW50VHlwZShjb250ZW50VHlwZTogc3RyaW5nLCBsaW1pdD86IG51bWJlciwgc2tpcD86IG51bWJlcikge1xuICAgIGxpbWl0ID8gbGltaXQgPSBsaW1pdCA6IGxpbWl0ID0gMTAwO1xuICAgIHNraXAgPyBza2lwID0gc2tpcCA6IHNraXAgPSAwO1xuICAgIGxldCBfdXJsID0gYCR7dGhpcy5iYXNlVXJsfWVudHJpZXM/Y29udGVudF90eXBlPSR7Y29udGVudFR5cGV9JmxpbWl0PSR7bGltaXR9JnNraXA9JHtza2lwfWBcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXG4gICAgICAgIHRhcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICogUmV0dXJuIGFuIGl0ZW0gcmVsYXRlZCB3aXRoIGEgc3BlY2lmaWMgYXNzZXRJZFxuICogQHBhcmFtIGFzc2V0SWQgU3RyaW5nXG4qL1xuICBnZXRBc3NldChhc3NldElkOiBzdHJpbmcpIHtcbiAgICBsZXQgX3VybCA9IGAke3RoaXMuYmFzZVVybH1hc3NldHMvJHthc3NldElkfWA7XG5cbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8YW55PihfdXJsLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UuYm9keSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG59XG4iXX0=