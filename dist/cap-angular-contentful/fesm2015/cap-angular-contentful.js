import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

class ConfigService {
    constructor(data) {
        this.data = data;
        this.space_id = '';
        this.environmet = '';
        this.delivery_accessToken = '';
        if (data) {
            this.space_id = this.data.space_id;
            this.environmet = this.data.environmet;
            this.delivery_accessToken = this.data.delivery_accessToken;
        }
    }
}
/** @nocollapse */ ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(ɵɵinject(Object)); };
/** @nocollapse */ ConfigService.ɵprov = ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConfigService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [Object]
            }] }]; }, null); })();

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
        ConfigService
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
                    ConfigService
                ],
                schemas: []
            }]
    }], null, null); })();

class CapContentfulService {
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
/** @nocollapse */ CapContentfulService.ɵfac = function CapContentfulService_Factory(t) { return new (t || CapContentfulService)(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); };
/** @nocollapse */ CapContentfulService.ɵprov = ɵɵdefineInjectable({ token: CapContentfulService, factory: CapContentfulService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CapContentfulService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }, { type: ConfigService }]; }, null); })();

/*
 * Public API Surface of cap-contentful
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CapContentfulModule, CapContentfulService, ConfigService };
//# sourceMappingURL=cap-angular-contentful.js.map
