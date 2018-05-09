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
  styleUrls: ['./app.component.css'],

})


export class AppComponent {

  constructor(private myservice: MyServiceService) {  }

}
