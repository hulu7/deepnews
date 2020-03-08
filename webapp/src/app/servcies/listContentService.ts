import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class ListContentService {
    constructor(private http: HttpClient) {}

    public getArticles(page: any, pageLimit: any, catalog: string): Observable<any> {
        // return this.http.get(`http://localhost:3000/article/getArticle?page=${page}&limit=${pageLimit}&catalog=${catalog}`);
        return this.http.get(`https://www.deepinews.com/api/article/getArticle?page=${page}&limit=${pageLimit}&catalog=${catalog}`);
    }

    public putViewedArticle(article: any): Observable<any> {
      // return this.http.post(`http://localhost:3000/article/viewed`, article);
      return this.http.post(`https://www.deepinews.com/api/article/viewed`, article);
    }
}
