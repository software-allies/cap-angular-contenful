import { Injectable, NgModule } from '@angular/core';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/config.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ConfigInterface() { }
if (false) {
    /** @type {?} */
    ConfigInterface.prototype.space_id;
    /** @type {?} */
    ConfigInterface.prototype.environment;
    /** @type {?} */
    ConfigInterface.prototype.delivery_accessToken;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigService {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.space_id = '';
        this.environment = '';
        this.delivery_accessToken = '';
        if (data) {
            this.space_id = data.space_id;
            this.environment = data.environment;
            this.delivery_accessToken = data.delivery_accessToken;
        }
    }
}
ConfigService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: undefined }
];
if (false) {
    /** @type {?} */
    ConfigService.prototype.space_id;
    /** @type {?} */
    ConfigService.prototype.environment;
    /** @type {?} */
    ConfigService.prototype.delivery_accessToken;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/contentful.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CapContentfulService {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/contentful.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CapContentfulModule {
    /**
     * @param {?} config
     * @return {?}
     */
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
CapContentfulModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: cap-angular-contentful.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CapContentfulModule, CapContentfulService, ConfigService };
//# sourceMappingURL=cap-angular-contentful.js.map
