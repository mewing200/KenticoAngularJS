import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime, map, first, distinctUntilChanged, delay } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'app';
  str: string;
  inputdata: string;

  @ViewChild('inputthis') private inputthis: ElementRef;
  @ViewChild('mytest') private mytest: ElementRef;
  @ViewChild('morecontent') private morecontent: ElementRef;

  constructor(private myservice: MyServiceService) {
  }


  performAction($event) {
    alert('hit me');
  }


  ngAfterViewInit() {
    console.log(this.mytest);
    console.log(this.morecontent);
    this.morecontent.nativeElement.textContent = 'this is even more content';

  }
  ngOnInit() {
    this.myservice.changed$.subscribe(
      (data: any) => {
        alert(data);
      }
    );

    const inputElement = document.getElementById('inputstuff');

    const keyPress$ = fromEvent<ElementRef>(inputElement, 'keypress')
    .pipe(
      delay(500)

    );

    keyPress$.subscribe(
      (event: any) => {
         this.inputdata = (this.inputdata ? this.inputdata : '') + event.key;
      }
    );



    const now = moment.now();
    const formatit = moment(moment.now()).format('LLL');
    const myBirthDay = moment(moment.now()).add(1, 'day').format('LLL');

    /* monthly stuff */
    const startOfThisMonth = moment().startOf('month');
    const endOfThisMonth = moment().endOf('month');
    const numberOfDaysInMonth = moment.duration(endOfThisMonth.diff(startOfThisMonth)).asDays();
    const numberOfWeeksInMonth = moment.duration(endOfThisMonth.diff(startOfThisMonth)).asWeeks();
    const monthStart = moment(startOfThisMonth).format('LLL');
    const monthEnd = moment(endOfThisMonth).format('LLL');

    /* yearly calculation stuff */
    const startOfYear = moment().startOf('year');
    const endOfYear = moment().endOf('year');
    const numberOfMonthsInYear = moment.duration(endOfYear.diff(startOfYear)).asMonths();
    const numberOfWeeksInYear = moment.duration(endOfYear.diff(startOfYear)).asWeeks();
    const numberOfDaysInYear = moment.duration(endOfYear.diff(startOfYear)).asDays();
    const numberOfHoursInYear = moment.duration(endOfYear.diff(startOfYear)).asHours();

    /* yearly formatting */
    const yearStart = moment(startOfYear).format('LLL');
    const yearEnd = moment(endOfYear).format('LLL');

    /* previous year calculation stuff */
    const prevYearStart = moment(moment.now()).subtract(1, 'year').startOf('year');
    const prevYearEnd = moment(moment.now()).subtract(1, 'year').endOf('year');
    const prevYearStartStr = moment(prevYearStart).format('LLL');
    const prevYearEndStr = moment(prevYearEnd).format('LLL');

    /* weekly stuff */
    const startOfWeek = moment().startOf('week');
    const endOfWeek = moment().endOf('week');
    const numberOfDaysInWeek = moment.duration(endOfWeek.diff(startOfWeek)).asDays();
    const numberOfHoursInWeek = moment.duration(endOfWeek.diff(startOfWeek)).asHours();
    const numberOfMinutesInWeek = moment.duration(endOfWeek.diff(startOfWeek)).asMinutes();

    /* weekly formating */
    const weekStart = moment(startOfWeek).format('LLL');
    const weekEnd = moment(endOfWeek).format('LLL');


    const testit = `now-${now}
                    not-formatted-${formatit}
                    birthday-i did this on the 5th ${myBirthDay}
                    week start - ${weekStart}
                    week end - ${monthStart}
                    # of days in week - ${Math.round(numberOfDaysInWeek)}
                    # of hours in week - ${Math.round(numberOfHoursInWeek)}
                    # of Min in week - ${Math.round(numberOfMinutesInWeek)}
                    month start - ${monthStart}
                    month end - ${monthEnd}
                    # of days in month - ${Math.round(numberOfDaysInMonth)}
                    # of weeks in month - ${Math.round(numberOfWeeksInMonth)}
                    year start - ${yearStart}
                    year end - ${yearEnd}
                    # of days in year - ${Math.round(numberOfDaysInYear)}
                    # of weeks in year - ${Math.round(numberOfWeeksInYear)}
                    # of months in year - ${Math.round(numberOfMonthsInYear)}
                    prev year - ${prevYearStartStr}
                    end prev year - ${prevYearEndStr}
                 `;

    console.log(testit);
  }

  ngOnDestroy() {

  }



  sendInput(inputstr: string) {
    this.myservice.startMySubject(inputstr);
  }
}
