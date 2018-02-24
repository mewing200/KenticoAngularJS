import {
  Component, OnInit, ChangeDetectionStrategy,
  ChangeDetectorRef } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { first, last, filter, delay, map } from 'rxjs/operators';


interface IMyData {
  name: string;
  address: string;
}

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class MycomponentComponent implements OnInit {

  private readonly myData: Array<IMyData> = [
    { name: 'Rick', address: 'earth' },
    { name: 'John', address: 'jupitor' },
    { name: 'Howard', address: 'saturn'}];
  source: Observable<IMyData>;
  example: Observable<IMyData>;
  aSubject: Subject<IMyData>;
  aObserverFromSubject: Observable<IMyData>;
  subscribedData: IMyData;
  subjectStuff: IMyData;
  loading = true;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.loading = true;
   }

  ngOnInit() {
    console.log('ngOnInit');
    this.aSubject = new Subject<IMyData>();
    this.aObserverFromSubject = this.aSubject.asObservable().pipe(delay(6000));
    this.source =  from<IMyData>(this.myData);
    this.subjectStuff = { name: '', address: ''};


    /* create contract */
      this.example = this.source.pipe(
        first(x => x.name === 'John'),
        delay(2000)
      );
      this.subscribeToMyData();
      this.subscribeToObservableFromSubject();


    this.aSubject.next({ name: 'Bob', address: 'uranus' });
    this.changeDetector.markForCheck();
    }

  private subscribeToObservableFromSubject() {
    this.aObserverFromSubject.subscribe(
      (data: IMyData) => {
        this.subjectStuff = data;
        console.log('subscribe', this.subjectStuff);
        this.changeDetector.markForCheck();
      //  this.changeDetector.markForCheck();
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log('operation complete');
      }
    );
  }

  private subscribeToMyData() {
    this.example.subscribe(
      (data: IMyData) => {
        this.loading = false;
        this.subscribedData = data;
        console.log(this.subscribedData);
        this.changeDetector.markForCheck();
      },
      (error => {
        console.log('an error occured,', error);
      }),
      () => console.log('operation complete')
    );
  }

}
