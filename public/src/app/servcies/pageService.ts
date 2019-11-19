import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class PageService {
    private isHomePage$: BehaviorSubject<Boolean>;
    constructor() {
        this.isHomePage$ = new BehaviorSubject(true);
    }

    public get isHome$(): Observable<Boolean> {
        return this.isHomePage$.asObservable();
    }

    public setIsHome(isHome: boolean): void {
        this.isHomePage$.next(isHome);
    }
}
