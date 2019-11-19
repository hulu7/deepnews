import { Injectable} from '@angular/core';

@Injectable()
export class SearchService {
    private searchKey: string;
    constructor() {}

    public get SearchKey(): string {
        return this.searchKey;
    }

    public setSearchKey(searchKey: string): void {
        this.searchKey = searchKey;
    }
}
