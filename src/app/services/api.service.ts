import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, throwError, timeout } from 'rxjs';
import { ApiConfig, backendApi } from 'src/assets/config/api-config';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

export interface PathParams {
  [key: string]: any;
}
export enum SnackBarVerticalPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}
export enum SnackBarHorizontalPosition {
  START = 'start',
  CENTER = 'center',
  END = 'end',
  LEFT = 'left',
  RIGHT = 'right',
}
export enum SnackBarClasses {
  ERROR = "error-message",
  SUCCESS = "success-message",
  NOTICE = "notice-message",
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  onError$ = new Subject();

  constructor(
    private _http: HttpClient,
    private _snackBar: MatSnackBar,
    private translate: TranslateService,
  ) {}

  request<T>(
    apiName: string,
    body?: any,
    queryParams?: any,
    pathParams?: PathParams
  ): Observable<T> {
    var apiConfig = this._getApiConfig(apiName);
    return this._request(apiConfig, body, queryParams, pathParams).pipe(
      timeout(apiConfig.timeout!),
      catchError((err) => {
        return this._handleError(err);
      }),
      map((data) => {
        return this._handleSuccess(data);
      })
    );
  }

  private _getApiConfig(apiName: string): ApiConfig {
    var apiConfig = backendApi.find((el) => el.name === apiName);
    if (!apiConfig) {
      throw new Error('No api found');
    }
    if (!apiConfig.timeout) apiConfig.timeout = 30000;
    var headers: HttpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=UTF-8'
    );
    if (apiConfig.headers) {
      for (var key in apiConfig.headers) {
        if (apiConfig.headers.get(key)) {
          headers = headers.set(key, apiConfig.headers.get(key)!.toString());
        }
      }
    }
    apiConfig.headers = headers;
    return apiConfig;
  }

  private _request(
    apiConfig: ApiConfig,
    body: any,
    queryParams: any,
    pathParams?: PathParams
  ): Observable<object> {
    return this._http.request(
      apiConfig.method,
      this._completeUrl(apiConfig.url, pathParams),
      {
        headers: apiConfig.headers,
        observe: 'body',
        body: body || {},
        params: queryParams || null,
        responseType: 'json',
      }
    );
  }

  private _completeUrl(url: string, pathParams?: PathParams): string {
    var urlWithParams = pathParams ? this._bindPathParams(url, pathParams) : url;
    return urlWithParams;
  }

  private _bindPathParams(url: string, params: PathParams): string {
    if (params === void 0) {
      params = {};
    }
    var urlInternal = url;
    for (var key in params) {
      if (params[key]) {
        urlInternal = urlInternal.replace(
          new RegExp('{' + key + '}', 'g'),
          params[key]
        );
      }
    }
    return urlInternal;
  }

  private _handleSuccess(response: any) {
    return response;
  }

  private _handleError(error: any) {
    console.error(error);
    this.onError$.next(error);
    this._showErrorMessage(error);
    return throwError(() => new Error(error));
  }

  private _showErrorMessage(error: any) {
    var errorDurationInSeconds: number = 5;
    this._snackBar.open(this.translate.instant('GENERAL_ERROR_MESSAGE'),
    this.translate.instant('ERROR_MESSAGE_CLOSE'),
    {
      duration: errorDurationInSeconds * 1000,
      horizontalPosition: SnackBarHorizontalPosition.RIGHT,
      verticalPosition: SnackBarVerticalPosition.TOP,
      panelClass: SnackBarClasses.ERROR,
    });
  }
}
