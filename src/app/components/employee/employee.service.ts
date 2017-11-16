import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';
import { IEmployee, IEmployeeResponse } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TrackerError } from '../../core/TrackerError';
import { LoggerService } from '../../core/Logger.Service';

@Injectable()
export class EmployeeService {
  private baseUrl = '';
  constructor(private httpClient: HttpClient, private utilService: ConfigService, private loggerService: LoggerService) {
    this.baseUrl = this.utilService.getApiURI();
  }

  getEmployees(): Observable<IEmployee[] | TrackerError> {
    return this.httpClient.get(this.baseUrl + `/employees`).map((employee: IEmployee[]) => {
      return employee;
    }).catch(this.handleError);
  }
  insertEmployee(employee: IEmployee): Observable<IEmployee | TrackerError> {
    return this.httpClient.post<IEmployeeResponse>(this.baseUrl + `/employees`, employee)
      .map((data) => {
        return data.employee;
      });
  }
  private handleError(error: HttpErrorResponse): Observable<TrackerError> {
    const dataError = new TrackerError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occurred retrieving data.';
    return Observable.throw(dataError);
  }
}
