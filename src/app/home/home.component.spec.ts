import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

// TEST SUITE 
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    // Smiliar to app module or like feature module 
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent, 
        EllipsisPipe  // load ellipsis pipe here in declarations
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test spec #1 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
