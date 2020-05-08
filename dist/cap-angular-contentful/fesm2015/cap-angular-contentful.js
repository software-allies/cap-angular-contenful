import { __decorate, __param } from 'tslib';
import { Optional, Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

let ConfigService = class ConfigService {
    constructor(config) {
        if (config) {
            this.accessToken = config.accessToken;
            this.space = config.space;
            this.environment = config.environment;
        }
    }
};
ConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }] }
];
ConfigService = __decorate([
    Injectable(),
    __param(0, Optional())
], ConfigService);

let CapContentfulService = class CapContentfulService {
    constructor(_http, configService) {
        this._http = _http;
        this.configService = configService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.configService.accessToken}`,
                'Content-Type': 'application/vnd.contentful.delivery.v1+json'
            }),
            observe: "response"
        };
        this.actionUrl = `https://cdn.contentful.com/spaces/${this.configService.space}/environments/${this.configService.environment}/`;
    }
    responseWithRelatedAssets(response, relatedAssetKey) {
        if (!response.includes ||
            !response.includes.Asset ||
            !response.items) {
            return response;
        }
        const includes = response.includes.Asset;
        const items = response.items;
        // By each item must be know his related Asset
        let newItems = [];
        items.map(item => {
            relatedAssetKey.map(key => {
                // Search and replace by a include file
                let file = includes.filter(a => a.sys.id === item.fields[key].sys.id)[0].fields;
                const fileClone = file;
                file = file.file;
                file['title'] = fileClone.title || '';
                file['description'] = fileClone.description || '';
                item.fields[key] = Object.assign({}, item.fields[key], { file });
                newItems = [...newItems, item];
            });
        });
        response.items = newItems;
        return response.items;
    }
    getItems(contentType, relatedAssetKey) {
        const _url = `${this.actionUrl}entries?content_type=${contentType}`;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((response) => response.body), tap((response) => {
            if (relatedAssetKey) {
                return this.responseWithRelatedAssets(response, relatedAssetKey);
            }
            else {
                return response;
            }
        }), catchError(error => this.handleError(error)));
    }
    getItemById(contentType, id, relatedAssetKey) {
        const _url = `${this.actionUrl}entries?content_type=${contentType}&fields.id=${id}`;
        return this._http.get(_url, this.httpOptions)
            .pipe(map((response) => response.body), tap((response) => {
            if (relatedAssetKey) {
                return this.responseWithRelatedAssets(response, relatedAssetKey);
            }
            else {
                return response;
            }
        }), catchError(error => this.handleError(error)));
    }
    handleError(error) {
        console.error(error);
        return throwError(error || 'Server error');
    }
};
CapContentfulService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
CapContentfulService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CapContentfulService_Factory() { return new CapContentfulService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: CapContentfulService, providedIn: "root" });
CapContentfulService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CapContentfulService);

var CapContentfulModule_1;
let CapContentfulModule = CapContentfulModule_1 = class CapContentfulModule {
    static forRoot(config) {
        return {
            ngModule: CapContentfulModule_1,
            providers: [
                {
                    provide: ConfigService,
                    useValue: config
                },
            ]
        };
    }
};
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

/*
 * Public API Surface of cap-contentful
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CapContentfulModule, CapContentfulService, ConfigService };
//# sourceMappingURL=cap-angular-contentful.js.map
