import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { addition } from './calculator';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  var component : AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });


  it('should bind input text value to Component property', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#nameId');
    const ageInput: HTMLInputElement = hostElement.querySelector('#ageId');
    const countryInput: HTMLSelectElement = hostElement.querySelector('#country');

    fixture.detectChanges();

    nameInput.value = 'Amit Shah';
    ageInput.value = '20';
    countryInput.value='2'  ;

    nameInput.dispatchEvent(new Event('input'));
    ageInput.dispatchEvent(new Event('input'));
    countryInput.dispatchEvent(new Event('change'));

    expect(component.personName).toBe('Amit Shah');
    expect(component.personAge.toString()).toBe('20');
    expect(component.countryId.toString()).toBe('2');

  });

  it('should perform display binding in HTML template', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#nameId');
    const ageInput: HTMLInputElement = hostElement.querySelector('#ageId');
    const countryInput: HTMLSelectElement = hostElement.querySelector('#country');

    const displayName: HTMLInputElement = hostElement.querySelector('#disName');
    const displayAge: HTMLInputElement = hostElement.querySelector('#disAge');

    fixture.detectChanges();

    fixture.whenStable().then(val => {
      nameInput.value = 'Amit Shah';
      ageInput.value = '20';
      countryInput.value='2';

      nameInput.dispatchEvent(new Event('input'));
      ageInput.dispatchEvent(new Event('input'));
      countryInput.dispatchEvent(new Event('change'));

      fixture.detectChanges();
      expect(displayName.textContent).toBe('Amit Shah');
      expect(displayAge.textContent).toBe('20');
      expect(countryInput.textContent).toBe('Srilanka');

    });
  });

});
