import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        ReactiveFormsModule // importing because we use formGroup in contact comp
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isSubmitted to true', () => {
    component.handleAddContact();
    expect(component.isSubmitted).toBeTruthy();
  });

  // LEt's learn spyOn 
  it('should call the handleAddContact  ', () => {
    spyOn(component, "handleAddContact");
    // find out submit button element 
    const btnEl = fixture.debugElement.query(By.css('button')).nativeElement;
    btnEl.click();
    expect(component.handleAddContact).toHaveBeenCalled();
  });

  it('has valid form when all fields are properly filled', () => {
    component.contactForm?.controls['name'].setValue('john');
    component.contactForm?.controls['phone'].setValue('1234567890');
    component.contactForm?.controls['email'].setValue('a@b.com');
    expect(component.contactForm.valid).toBeTruthy();
  });

  it('has invalid form when all fields are not properly filled', () => {
    component.contactForm?.controls['name'].setValue('');
    component.contactForm?.controls['phone'].setValue('2343');
    component.contactForm?.controls['email'].setValue('abc');
    expect(component.contactForm.valid).toBeFalsy();
  });

});
