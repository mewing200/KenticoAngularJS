import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class MyServiceService {
  public changed$: Observable<any>;
  protected change = new Subject<any>();


  constructor() {
    this.changed$ = this.change.asObservable();
  }


  startMySubject = (msg) => {
    window.setTimeout( () => {
      this.change.next(msg);
    }, 4000);
  }

}
