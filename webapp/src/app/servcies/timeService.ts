import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { currentDateUrl } from '../const/common-variables'

@Injectable()
export class TimeService {
    constructor(private http: HttpClient) {}

    public getCurrentDate(): Observable<any> {
        return this.http.get(currentDateUrl);
    }
}
