import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing inline style
  it('should have yellow bg color in h2 element', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const bgColor = compiled.querySelector('h2')?.style.backgroundColor;
    // expect(bgColor).toBe('red'); // not recommeneded if you use #ff0000 or rgb(255, 0, 0) in html
    expect(bgColor).toBe('rgb(255, 0, 0)');
  });

  //TODO: Testing css class 'redText' 


  // counter values defaults to 0
  it('has default counter value 0', () => {
    expect(component.counterValue).toEqual(0);
  });

  // should increment and decrement 
  it('should increment and decrement counterValue', () => {
    component.handleIncrement(); // calling the event handler method
    expect(component.counterValue).toEqual(1);

    component.handleDecrement(); // calling the event handler method
    expect(component.counterValue).toEqual(0);
  });

  // Events 
  it('should increment value in html template', () => {
    // find a button element that has css class .increment
    debugElement.query(By.css('.increment'))
                .triggerEventHandler('click', null); // triggering event thru program

    fixture.detectChanges();
    const value = debugElement.query(By.css('p.counter'))
                              .nativeElement.innerText;
    expect(value).toEqual('1'); // then, check whether it is incremented
  });

  it('should stop at 0 and show Minimum Reached upon decrement', () => {
    // find a button element that has css class .increment
    debugElement.query(By.css('.decrement'))
                .triggerEventHandler('click', null); 

    fixture.detectChanges();
    
    const message = debugElement.query(By.css('p.message'))
                              .nativeElement.innerText;
              
    expect(component.counterValue).toEqual(0);
    expect(message).toBe('Minimum Reached');
  });

  it('should stop at 10 and show Maximum Reached upon increment', () => {
    // find a button element that has css class .increment
    component.counterValue = 10;
    debugElement.query(By.css('.increment'))
                .triggerEventHandler('click', null); 

    fixture.detectChanges();
    
    const message = debugElement.query(By.css('p.message'))
                              .nativeElement.innerText;
              
    expect(component.counterValue).toEqual(10);
    expect(message).toBe('Maximum Reached');
  });

});
