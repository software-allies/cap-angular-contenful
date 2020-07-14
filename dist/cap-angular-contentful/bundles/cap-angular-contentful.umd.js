(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('cap-angular-contentful', ['exports', '@angular/common/http', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/common'], factory) :
  (global = global || self, factory(global['cap-angular-contentful'] = {}, global.ng.common.http, global.rxjs, global.rxjs.operators, global.ng.core, global.ng.common));
}(this, (function (exports, http, rxjs, operators, core, common) { 'use strict';

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
      return ConfigService;
  }());

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
      CapContentfulService.prototype.getItems = function (contentType, limit, skip) {
          var _this = this;
          limit ? limit = limit : limit = 100;
          skip ? skip = skip : skip = 0;
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
          skip ? skip = skip : skip = 0;
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
      /** @nocollapse */ CapContentfulService.ɵprov = core.ɵɵdefineInjectable({ token: CapContentfulService, factory: CapContentfulService.ɵfac });
      return CapContentfulService;
  }());
  /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CapContentfulService, [{
          type: core.Injectable
      }], function () { return [{ type: http.HttpClient }, { type: ConfigService }]; }, null); })();

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
              CapContentfulService
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
                      CapContentfulService
                  ],
                  schemas: []
              }]
      }], null, null); })();

  exports.CapContentfulModule = CapContentfulModule;
  exports.CapContentfulService = CapContentfulService;
  exports.ConfigService = ConfigService;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cap-angular-contentful.umd.js.map
