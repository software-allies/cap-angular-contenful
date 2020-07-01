import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
export declare class CapContentfulService {
    private _http;
    private credentials;
    private baseUrl;
    private httpOptions;
    constructor(_http: HttpClient, credentials: ConfigService);
    /**
   * Return the items related with a specific content type
   * @param contentType String
   * @param limit Optional(Number)
   * @param skip Optional(Number)
  */
    getItems(contentType: string, limit?: number, skip?: number): Observable<any>;
    /**
   * Return a specific item by Id
   * @param entryId String
  */
    getItemById(entryId: string): Observable<any>;
    private handleError;
    /**
   * Return a list of items related with a specific content type
   * @param contentType String
   * @param limit Optional(Number)
   * @param skip Optional(Number)
  */
    getElementsByContentType(contentType: string, limit?: number, skip?: number): Observable<any>;
    /**
   * Return an item related with a specific assetId
   * @param assetId String
  */
    getAsset(assetId: string): Observable<any>;
}
