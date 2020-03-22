import { Injectable} from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
    private searchKey: string;
    constructor(private http: HttpClient) {}

    public get SearchKey(): string {
        return this.searchKey;
    }

    public setSearchKey(searchKey: string): void {
        this.searchKey = searchKey;
    }

    public searchArticles (page: any, pageLimit: any, key: string): Observable<any> {
        // return this.http.get(`http://192.168.163.16/api/articles/searchArticles?page=${page}&limit=${pageLimit}&key=${key}`);
        return this.http.get(`https://www.deepinews.com/api/articles/searchArticles?page=${page}&limit=${pageLimit}&key=${key}`);
    }
}
