import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Approach #1: [RECOMMENDED]
  it('has London as city - approach #1', fakeAsync(() => {
    component.ngOnInit();
    tick(4001);
    expect(component.city).toEqual('London');
  }));


  // Approach #2 
  it('has London as city - approach #2', ( (done) => {
    component.ngOnInit(); // call a methis that has async code
    setTimeout( () => {
      fixture.detectChanges(); // can be useful if you want to work with updates in HTML
      expect(component.city).toEqual('London');
      done();
    }, 4001);
  }));

  it('should have two elements in userList array',fakeAsync(() => {
    component.ngOnInit();
    tick(4001);
    expect(component.userList.length).toEqual(2);
  }));

  it('should render atlease one user', fakeAsync(() => {
    component.ngOnInit();
    tick(4001);
    fixture.detectChanges();
    const h3El = fixture.nativeElement.querySelector('h3');
    expect(h3El.innerText).toContain('Leanne Graham')
  }));

});
