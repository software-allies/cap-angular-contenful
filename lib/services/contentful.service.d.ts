import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
export declare class CapContentfulService {
    private _http;
    private configService;
    private actionUrl;
    private httpOptions;
    constructor(_http: HttpClient, configService: ConfigService);
    responseWithRelatedAssets(response: any, relatedAssetKey: string[]): any;
    getItems(contentType: string, relatedAssetKey?: string[]): Observable<any>;
    getItemById(contentType: string, id: string, relatedAssetKey?: string[]): Observable<any>;
    private handleError;
}
