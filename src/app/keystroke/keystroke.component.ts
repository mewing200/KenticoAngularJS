import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime, map, first, distinctUntilChanged, delay, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-keystroke',
  templateUrl: './keystroke.component.html',
  styleUrls: ['./keystroke.component.css']
})
export class KeystrokeComponent implements OnInit {
  inputdata: string;

  @ViewChild('inputthis') private inputthis: ElementRef;
  @ViewChild('mytest') private mytest: ElementRef;
  @ViewChild('morecontent') private morecontent: ElementRef;
  constructor(private myservice: MyServiceService) { }

  clearInput() {
    this.inputdata = '';
  }

  performAction($event) {
    alert('hit me');
  }

  sendInputToAlert(inputstr: string) {
    this.myservice.startMySubject(inputstr);
  }

  hookToButtonKeyPressAndSubscribeToEvents() {
    const inputElement = document.getElementById('inputstuff');
    const keyPress$ = fromEvent<ElementRef>(inputElement, 'keypress')
      .pipe(delay(500));

    keyPress$.subscribe(
      (keypressevent: any) => {
        this.inputdata = (this.inputdata ? this.inputdata : '') + keypressevent.key;
      }
    );
  }


  subscribeToServiceSubjectAndDisplayData() {
    this.myservice.changed$.subscribe(
      (data: any) => {
        alert(data);
      }
    );
  }


  ngOnInit() {
    this.hookToButtonKeyPressAndSubscribeToEvents();
    this.subscribeToServiceSubjectAndDisplayData();
  }

}
