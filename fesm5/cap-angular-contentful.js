import { __decorate, __param, __assign, __spread } from 'tslib';
import { Optional, Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

var ConfigService = /** @class */ (function () {
    function ConfigService(config) {
        if (config) {
            this.accessToken = config.accessToken;
            this.space = config.space;
            this.environment = config.environment;
        }
    }
    ConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }] }
    ]; };
    ConfigService = __decorate([
        Injectable(),
        __param(0, Optional())
    ], ConfigService);
    return ConfigService;
}());

var CapContentfulService = /** @class */ (function () {
    function CapContentfulService(_http, configService) {
        this._http = _http;
        this.configService = configService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Authorization': "Bearer " + this.configService.accessToken,
                'Content-Type': 'application/vnd.contentful.delivery.v1+json'
            }),
            observe: "response"
        };
        this.actionUrl = "https://cdn.contentful.com/spaces/" + this.configService.space + "/environments/" + this.configService.environment + "/";
    }
    CapContentfulService.prototype.responseWithRelatedAssets = function (response, relatedAssetKey) {
        if (!response.includes ||
            !response.includes.Asset ||
            !response.items) {
            return response;
        }
        var includes = response.includes.Asset;
        var items = response.items;
        // By each item must be know his related Asset
        var newItems = [];
        items.map(function (item) {
            relatedAssetKey.map(function (key) {
                // Search and replace by a include file
                var file = includes.filter(function (a) { return a.sys.id === item.fields[key].sys.id; })[0].fields;
                var fileClone = file;
                file = file.file;
                file['title'] = fileClone.title || '';
                file['description'] = fileClone.description || '';
                item.fields[key] = __assign({}, item.fields[key], { file: file });
                newItems = __spread(newItems, [item]);
            });
        });
        response.items = newItems;
        return response.items;
    };
    CapContentfulService.prototype.getItems = function (contentType, relatedAssetKey) {
        var _this = this;
        var _url = this.actionUrl + "entries?content_type=" + contentType;
        return this._http.get(_url, this.httpOptions)
            .pipe(map(function (response) { return response.body; }), tap(function (response) {
            if (relatedAssetKey) {
                return _this.responseWithRelatedAssets(response, relatedAssetKey);
            }
            else {
                return response;
            }
        }), catchError(function (error) { return _this.handleError(error); }));
    };
    CapContentfulService.prototype.getItemById = function (contentType, id, relatedAssetKey) {
        var _this = this;
        var _url = this.actionUrl + "entries?content_type=" + contentType + "&fields.id=" + id;
        return this._http.get(_url, this.httpOptions)
            .pipe(map(function (response) { return response.body; }), tap(function (response) {
            if (relatedAssetKey) {
                return _this.responseWithRelatedAssets(response, relatedAssetKey);
            }
            else {
                return response;
            }
        }), catchError(function (error) { return _this.handleError(error); }));
    };
    CapContentfulService.prototype.handleError = function (error) {
        console.error(error);
        return throwError(error || 'Server error');
    };
    CapContentfulService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigService }
    ]; };
    CapContentfulService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CapContentfulService_Factory() { return new CapContentfulService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: CapContentfulService, providedIn: "root" });
    CapContentfulService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CapContentfulService);
    return CapContentfulService;
}());

var CapContentfulModule = /** @class */ (function () {
    function CapContentfulModule() {
    }
    CapContentfulModule_1 = CapContentfulModule;
    CapContentfulModule.forRoot = function (config) {
        return {
            ngModule: CapContentfulModule_1,
            providers: [
                {
                    provide: ConfigService,
                    useValue: config
                },
            ]
        };
    };
    var CapContentfulModule_1;
    CapContentfulModule = CapContentfulModule_1 = __decorate([
        NgModule({
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
        })
    ], CapContentfulModule);
    return CapContentfulModule;
}());

/*
 * Public API Surface of cap-contentful
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CapContentfulModule, CapContentfulService, ConfigService };
//# sourceMappingURL=cap-angular-contentful.js.map
