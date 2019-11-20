import { Injectable} from '@angular/core';
import {Observable} from "rxjs";
import { Http } from '@angular/http';

@Injectable()
export class SearchService {
    private searchKey: string;
    constructor(private http: Http) {}

    public get SearchKey(): string {
        return this.searchKey;
    }

    public setSearchKey(searchKey: string): void {
        this.searchKey = searchKey;
    }

    public searchArticles (page: any, pageLimit: any, key: string): Observable<any> {
        // return this.http.get(`http://localhost:3000/api/article/searchArticles?page=${page}&limit=${pageLimit}&key=${key}`);
        return this.http.get(`http://www.deepinews.com:10003/api/article/searchArticles?page=${page}&limit=${pageLimit}&key=${key}`);
    }
}
