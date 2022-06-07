// all unit testing files will be with extn .spec.ts 
// test specs for App Component

// TESTING PATTERN: GIVEN /  WHEN / THEN

// Configures and initializes environment for unit testing and provides methods 
// for creating components and services in unit tests.
import { TestBed } from '@angular/core/testing'; // 
// Sets up the router to be used for testing.
import { RouterTestingModule } from '@angular/router/testing';
// Taking up the comp for testing
import { AppComponent } from './app.component';

// group of related test specs -- TEST SUITE 
describe('AppComponent', () => {
  // will be executed before each test spec
  beforeEach(async () => {
    // similar to app module 
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  });

  // test spec
  it('should create the app', () => {
    // ACT
    // fixture will have both template (html) and the class (Ts)
    const fixture = TestBed.createComponent(AppComponent);
    // let's take the app.comp.ts for testing 
    const app = fixture.componentInstance;
    // ASSERT
    expect(app).toBeTruthy();
  });

  // test spec
  it(`should have as title 'Welcome to Unit Testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Welcome to Unit Testing!');
  });

  // test spec
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();// Trigger a change detection cycle for the component.
    const compiled = fixture.nativeElement as HTMLElement; // Taking up app.comp.html for testing
    expect(compiled.querySelector('h1')?.textContent).toEqual('Welcome to Unit Testing!');
  });
});
