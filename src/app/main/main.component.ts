import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime, map, first, distinctUntilChanged, delay, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';

import * as moment from 'moment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'app';
  str: string;
  inputdata: string;

  @ViewChild('inputthis') private inputthis: ElementRef;
  @ViewChild('mytest') private mytest: ElementRef;
  @ViewChild('morecontent') private morecontent: ElementRef;

  constructor(private myservice: MyServiceService) { }



  ngAfterViewInit() {


  }
  ngOnInit() {


  }

  ngOnDestroy() {

  }




}
