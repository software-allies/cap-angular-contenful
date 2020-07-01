import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule, Optional } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { __decorate, __param, __metadata } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interfaces/config.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigService = /** @class */ (function () {
    function ConfigService(data) {
        this.data = data;
        this.space_id = '';
        this.environment = '';
        this.delivery_accessToken = '';
        if (data) {
            this.space_id = this.data.space_id;
            this.environment = this.data.environment;
            this.delivery_accessToken = this.data.delivery_accessToken;
        }
    }
    return ConfigService;
}());
if (false) {
    /** @type {?} */
    ConfigService.prototype.space_id;
    /** @type {?} */
    ConfigService.prototype.environment;
    /** @type {?} */
    ConfigService.prototype.delivery_accessToken;
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/contentful.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CapContentfulService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    /** @nocollapse */ CapContentfulService.ɵprov = ɵɵdefineInjectable({ factory: function CapContentfulService_Factory() { return new CapContentfulService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: CapContentfulService, providedIn: "root" });
    return CapContentfulService;
}());
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CapContentfulModule = /** @class */ (function () {
    function CapContentfulModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    CapContentfulModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: CapContentfulModule,
            providers: [
                {
                    provide: ConfigService,
                    useValue: config
                },
            ]
        };
    };
    CapContentfulModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        HttpClientModule,
                        CommonModule,
                    ],
                    exports: [],
                    providers: [],
                    schemas: []
                },] }
    ];
    __decorate([
        __param(0, Optional()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], CapContentfulModule, "forRoot", null);
    return CapContentfulModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: cap-angular-contentful.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CapContentfulModule, CapContentfulService, ConfigService };
//# sourceMappingURL=cap-angular-contentful.js.map
