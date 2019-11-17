import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class ListContentService {
    constructor(private http: Http) {}

    public getArticles(page: any, pageLimit: any, catalog: string): Observable<any> {
        // return this.http.get(`http://localhost:3000/api/article/getArticle?page=${page}&limit=${pageLimit}&catalog=${catalog}`);
        return this.http.get(`http://www.deepinews.com:3000/api/article/getArticle?page=${page}&limit=${pageLimit}&catalog=${catalog}`);
    }
}
