import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class ConfigService {
    constructor(data) {
        this.data = data;
        this.space_id = '';
        this.environment = '';
        this.delivery_accessToken = '';
        if (this.data) {
            this.space_id = this.data.space_id;
            this.environment = this.data.environment;
            this.delivery_accessToken = this.data.delivery_accessToken;
        }
    }
}

class CapContentfulService {
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
/** @nocollapse */ CapContentfulService.ɵfac = function CapContentfulService_Factory(t) { return new (t || CapContentfulService)(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); };
/** @nocollapse */ CapContentfulService.ɵprov = ɵɵdefineInjectable({ token: CapContentfulService, factory: CapContentfulService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CapContentfulService, [{
        type: Injectable
    }], function () { return [{ type: HttpClient }, { type: ConfigService }]; }, null); })();

class CapContentfulModule {
    static forRoot(config) {
        return {
            ngModule: CapContentfulModule,
            providers: [
                {
                    provide: ConfigService,
                    useValue: config
                },
            ]
        };
    }
}
/** @nocollapse */ CapContentfulModule.ɵmod = ɵɵdefineNgModule({ type: CapContentfulModule });
/** @nocollapse */ CapContentfulModule.ɵinj = ɵɵdefineInjector({ factory: function CapContentfulModule_Factory(t) { return new (t || CapContentfulModule)(); }, providers: [
        CapContentfulService
    ], imports: [[
            HttpClientModule,
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CapContentfulModule, { imports: [HttpClientModule,
        CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CapContentfulModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    HttpClientModule,
                    CommonModule,
                ],
                exports: [],
                providers: [
                    CapContentfulService
                ],
                schemas: []
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CapContentfulModule, CapContentfulService, ConfigService };
//# sourceMappingURL=cap-angular-contentful.js.map
