(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
  typeof define === 'function' && define.amd ? define('cap-angular-contentful', ['exports', '@angular/core', '@angular/common/http', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
  (global = global || self, factory(global['cap-angular-contentful'] = {}, global.ng.core, global.ng.common.http, global.ng.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, http, common, rxjs, operators) { 'use strict';

  var ConfigService = /** @class */ (function () {
      function ConfigService(data) {
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
      /** @nocollapse */ ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(core.ɵɵinject(Object)); };
      /** @nocollapse */ ConfigService.ɵprov = core.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac });
      return ConfigService;
  }());
  /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ConfigService, [{
          type: core.Injectable
      }], function () { return [{ type: undefined, decorators: [{
                  type: core.Inject,
                  args: [Object]
              }] }]; }, null); })();

  var CapContentfulModule = /** @class */ (function () {
      function CapContentfulModule() {
      }
      CapContentfulModule.forRoot = function (config) {
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
      /** @nocollapse */ CapContentfulModule.ɵmod = core.ɵɵdefineNgModule({ type: CapContentfulModule });
      /** @nocollapse */ CapContentfulModule.ɵinj = core.ɵɵdefineInjector({ factory: function CapContentfulModule_Factory(t) { return new (t || CapContentfulModule)(); }, providers: [
              ConfigService
          ], imports: [[
                  http.HttpClientModule,
                  common.CommonModule,
              ]] });
      return CapContentfulModule;
  }());
  (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(CapContentfulModule, { imports: [http.HttpClientModule,
          common.CommonModule] }); })();
  /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CapContentfulModule, [{
          type: core.NgModule,
          args: [{
                  declarations: [],
                  imports: [
                      http.HttpClientModule,
                      common.CommonModule,
                  ],
                  exports: [],
                  providers: [
                      ConfigService
                  ],
                  schemas: []
              }]
      }], null, null); })();

  var CapContentfulService = /** @class */ (function () {
      function CapContentfulService(_http, credentials) {
          this._http = _http;
          this.credentials = credentials;
          this.httpOptions = {
              headers: new http.HttpHeaders({
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
              .pipe(operators.map(function (response) { return response.body; }), operators.tap(function (response) {
              return response;
          }), operators.catchError(function (error) { return _this.handleError(error); }));
      };
      /**
     * Return a specific item by Id
     * @param entryId String
    */
      CapContentfulService.prototype.getItemById = function (entryId) {
          var _this = this;
          var _url = this.baseUrl + "entries/" + entryId;
          return this._http.get(_url, this.httpOptions)
              .pipe(operators.map(function (response) { return response.body; }), operators.tap(function (response) { return response; }), operators.catchError(function (error) { return _this.handleError(error); }));
      };
      CapContentfulService.prototype.handleError = function (error) {
          console.error(error);
          return rxjs.throwError(error || 'Server error');
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
              .pipe(operators.map(function (response) { return response.body; }), operators.tap(function (response) { return response; }), operators.catchError(function (error) { return _this.handleError(error); }));
      };
      /**
     * Return an item related with a specific assetId
     * @param assetId String
    */
      CapContentfulService.prototype.getAsset = function (assetId) {
          var _this = this;
          var _url = this.baseUrl + "assets/" + assetId;
          return this._http.get(_url, this.httpOptions)
              .pipe(operators.map(function (response) { return response.body; }), operators.catchError(function (error) { return _this.handleError(error); }));
      };
      /** @nocollapse */ CapContentfulService.ɵfac = function CapContentfulService_Factory(t) { return new (t || CapContentfulService)(core.ɵɵinject(http.HttpClient), core.ɵɵinject(ConfigService)); };
      /** @nocollapse */ CapContentfulService.ɵprov = core.ɵɵdefineInjectable({ token: CapContentfulService, factory: CapContentfulService.ɵfac, providedIn: 'root' });
      return CapContentfulService;
  }());
  /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CapContentfulService, [{
          type: core.Injectable,
          args: [{
                  providedIn: 'root'
              }]
      }], function () { return [{ type: http.HttpClient }, { type: ConfigService }]; }, null); })();

  exports.CapContentfulModule = CapContentfulModule;
  exports.CapContentfulService = CapContentfulService;
  exports.ConfigService = ConfigService;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cap-angular-contentful.umd.js.map
