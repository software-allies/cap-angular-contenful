import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CapContentfulService {

  private baseUrl: string;
  private httpOptions: any;

  constructor(
    private _http: HttpClient,
    private credentials: ConfigService) {
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
  getItems(contentType: string, limit?: number, skip?: number): Observable<any> {
    limit ? limit = limit : limit = 100;

    const _url = `${this.baseUrl}entries?content_type=${contentType}&limit=${limit}&skip=${skip}`;
    return this._http.get<any>(_url, this.httpOptions)
      .pipe(
        map((response: any) => response.body),
        tap((response: any) => {

          return response;
        }),
        catchError(error => this.handleError(error))
      );
  }

  /**
 * Return a specific item by Id
 * @param entryId String
*/
  getItemById(entryId: string): Observable<any> {
    let _url = `${this.baseUrl}entries/${entryId}`

    return this._http.get<any>(_url, this.httpOptions)
      .pipe(
        map((response: any) => response.body),
        tap((response: any) => response),
        catchError(error => this.handleError(error))
      );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error || 'Server error');
  }

  /**
 * Return a list of items related with a specific content type
 * @param contentType String
 * @param limit Optional(Number)
 * @param skip Optional(Number)
*/
  getElementsByContentType(contentType: string, limit?: number, skip?: number) {
    limit ? limit = limit : limit = 100;
    let _url = `${this.baseUrl}entries?content_type=${contentType}&limit=${limit}&skip=${skip}`
    return this._http.get<any>(_url, this.httpOptions)
      .pipe(
        map((response: any) => response.body),
        tap((response: any) => response),
        catchError(error => this.handleError(error))
      );
  }

  /**
 * Return an item related with a specific assetId
 * @param assetId String
*/
  getAsset(assetId: string) {
    let _url = `${this.baseUrl}assets/${assetId}`;

    return this._http.get<any>(_url, this.httpOptions)
      .pipe(
        map((response: any) => response.body),
        catchError(error => this.handleError(error))
      );
  }
}
