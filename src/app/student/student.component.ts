import { Component } from '@angular/core';
import { StudentServiceService } from './student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  sum = 0;
  result: any;
  name = "Hello Devi";

  type = "number";
  placeholder = "Enter number";
  userReadOnly = false;
  txt:string = '';
  redFont="font-red";
  constructor(public service: StudentServiceService) { }

  ngOnInit(): void {

  }

  calculate(num1:number, num2:number){
    this.sum = num1 + num2;
    return this.sum;
  }

  saveData(){
    let info = {
      sumVal : this.calculate(10,20),
      name: "Testing"
    };

    this.saveDataIntoConsole(info);
    // this.service.SaveDet

  }

  saveDataIntoConsole(info:any){
    console.log(info);
  }
}
