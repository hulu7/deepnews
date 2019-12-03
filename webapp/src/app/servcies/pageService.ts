import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class PageService {
    private isHomePage$: BehaviorSubject<Boolean>;
    private currentPath$: BehaviorSubject<string>;
    constructor() {
        this.isHomePage$ = new BehaviorSubject(true);
        this.currentPath$ = new BehaviorSubject('');
    }

    public get isHome$(): Observable<Boolean> {
        return this.isHomePage$.asObservable();
    }

    public setIsHome(isHome: boolean): void {
      this.isHomePage$.next(isHome);
    }

    public get getCurrentPath$(): Observable<string> {
      return this.currentPath$.asObservable();
    }

    public setCurrentPath(path: string): void {
      this.currentPath$.next(path);
    }
}
