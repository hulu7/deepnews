import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { currentDateUrl } from '../const/common-variables'

@Injectable()
export class TimeService {
    constructor(private http: Http) {}

    public getCurrentDate(): Observable<any> {
        return this.http.get(currentDateUrl);
    }
}
