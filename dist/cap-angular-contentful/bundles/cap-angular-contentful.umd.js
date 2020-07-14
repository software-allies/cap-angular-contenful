(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('cap-angular-contentful', ['exports', '@angular/core', '@angular/common/http', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
  (global = global || self, factory(global['cap-angular-contentful'] = {}, global.ng.core, global.ng.common.http, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, http, rxjs, operators, common) { 'use strict';

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
  var ConfigService = /** @class */ (function () {
      function ConfigService(data) {
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
      ConfigService.decorators = [
          { type: core.Injectable }
      ];
      /** @nocollapse */
      ConfigService.ctorParameters = function () { return [
          { type: undefined }
      ]; };
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
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
   */
  var CapContentfulService = /** @class */ (function () {
      function CapContentfulService(_http, credentials) {
          this._http = _http;
          this.credentials = credentials;
          if (credentials) {
              this.httpOptions = {
                  headers: new http.HttpHeaders({
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
              .pipe(operators.map((/**
           * @param {?} response
           * @return {?}
           */
          function (response) { return response.body; })), operators.tap((/**
           * @param {?} response
           * @return {?}
           */
          function (response) {
              return response;
          })), operators.catchError((/**
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
              .pipe(operators.map((/**
           * @param {?} response
           * @return {?}
           */
          function (response) { return response.body; })), operators.tap((/**
           * @param {?} response
           * @return {?}
           */
          function (response) { return response; })), operators.catchError((/**
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
          return rxjs.throwError(error || 'Server error');
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
              .pipe(operators.map((/**
           * @param {?} response
           * @return {?}
           */
          function (response) { return response.body; })), operators.tap((/**
           * @param {?} response
           * @return {?}
           */
          function (response) { return response; })), operators.catchError((/**
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
              .pipe(operators.map((/**
           * @param {?} response
           * @return {?}
           */
          function (response) { return response.body; })), operators.catchError((/**
           * @param {?} error
           * @return {?}
           */
          function (error) { return _this.handleError(error); })));
      };
      CapContentfulService.decorators = [
          { type: core.Injectable }
      ];
      /** @nocollapse */
      CapContentfulService.ctorParameters = function () { return [
          { type: http.HttpClient },
          { type: ConfigService }
      ]; };
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
   * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
          { type: core.NgModule, args: [{
                      declarations: [],
                      imports: [
                          http.HttpClientModule,
                          common.CommonModule,
                      ],
                      exports: [],
                      providers: [
                          CapContentfulService
                      ],
                      schemas: []
                  },] }
      ];
      return CapContentfulModule;
  }());

  exports.CapContentfulModule = CapContentfulModule;
  exports.CapContentfulService = CapContentfulService;
  exports.ConfigService = ConfigService;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cap-angular-contentful.umd.js.map
