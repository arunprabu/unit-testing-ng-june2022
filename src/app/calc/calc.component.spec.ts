import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has Calculator as heading', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Taking up calc.comp.html for testing
    expect(compiled.querySelector('h2')?.textContent).toContain('Calculator');
  });

  it('adds two numbers properly', () =>{
    // sometimes multiple expections are needed
    expect(component.add(10, 20)).toEqual(30);
    expect(component.add(5, 7)).toEqual(12);
  });
  
  it('should have return type number', () => {
    // checking the return type 
    expect(component.add(10, 20)).not.toBeNaN()
  });


});
