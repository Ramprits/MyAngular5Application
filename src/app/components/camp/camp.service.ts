import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ICamp } from './icamp';
import { ConfigService } from '../../shared/config.service';

@Injectable()
export class CampService {
  public BaseUrl = '';
  constructor(private httpClient: HttpClient, private _ConfigService: ConfigService) {
    this.BaseUrl = this._ConfigService.getApiURI();
  }
  getCamps(): Observable<ICamp[]> {
    return this.httpClient.get<ICamp[]>(this.BaseUrl + `/camps`);
  }
  getCamp(campId: ICamp): Observable<ICamp> {
    return this.httpClient.get<ICamp>(this.BaseUrl + `/camps` + `${campId}`);
  }
  addCamp(camp: ICamp): Observable<ICamp> {
    return this.httpClient.post<ICamp>(this.BaseUrl + `/camps`, camp);
  }
  deleteCamp(campId: ICamp): Observable<ICamp> {
    return this.httpClient.delete<ICamp>(this.BaseUrl + `/camps` + `${campId}`);
  }
  updateCamp(camp: ICamp): Observable<ICamp> {
    return this.httpClient.put<ICamp>(this.BaseUrl + `/camps`, camp);
  }
}
