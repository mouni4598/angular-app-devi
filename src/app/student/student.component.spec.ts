import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import { FormsModule } from '@angular/forms';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      imports:[
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Interpolation', () => {
    let name : HTMLElement = fixture.debugElement.nativeElement.querySelector('#name');
    expect(name.innerText).toEqual(component.name);

    component.name = "Devi updated";  //Updated
    fixture.detectChanges();  //Detect changes
    expect(name.innerText).toEqual(component.name);
  });

  it('Input type',()=>{
    let userNum : HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#inpText");
    expect(userNum.type).toEqual(component.type);

  });

  it('ngClass',()=>{
    let element = fixture.debugElement.nativeElement.querySelector("#name");
    expect(element.getAttribute('class')).toContain(component.redFont);
    
  });

  it('ngStyle',()=>{
    let element = fixture.debugElement.nativeElement.querySelector("#header");
    expect(element.getAttribute('style')).toContain('color: black;');
  })
});
