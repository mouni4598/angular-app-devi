import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularUnitTestApp';
  personName: string = '';
  personAge: number = 0;   
  countryId:string = ''; 

  private showMessage(msg:string):string{
    return msg;
  }
}
