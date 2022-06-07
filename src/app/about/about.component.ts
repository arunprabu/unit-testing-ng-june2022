import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  counterValue = 0;
  message = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleIncrement(){
    if(this.counterValue < 10){
      this.counterValue += 1;
    }else{
      this.message = 'Maximum Reached';
    }
  }

  handleDecrement(){
    if(this.counterValue > 0 ){
      this.counterValue -= 1;
    }else{
      this.message = 'Minimum Reached';
    }
  }
}
