import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class PasseventsService {

  private leaveblogsection = new Subject<boolean>();

  constructor() { }

  navigateout$ = this.leaveblogsection.asObservable();

  exitblogsection(searchInputStatus: boolean) {
    this.leaveblogsection.next(searchInputStatus);
  }
}
