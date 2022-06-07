import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  constructor() { 
    console.log('Inside constructor');
  }

  // lifecycle hook/method
  ngOnInit(): void {
    // this will be called when the comp comes into view 
    // ideal place for you to send ajax calls
    console.log('Inside ngOnInit');
  }

  // lifecycle hook
  ngOnDestroy(){
    //this will be called when the comp goes out of the view 
    // clear the data, remove timeout, interval
    console.log('Inside ngOnDestroy');
  }

}
