// import { Component, VERSION } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ]
// })
// export class AppComponent  {
//   name = 'Angular ' + VERSION.major;
//  public firstName:string='';  
//   public lastName:string='';  
//   public position:string='';  
//   public salary:number;  
// }

import { Component, OnInit} from '@angular/core';    
@Component({  
  selector: 'my-app',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class EmployeeComponent {  
  
  firstName:string="Farhan";  
  lastName:string="Ahmed";  
  age:number=32;  
  position:string="Software Developer";  
  office:string="Bangalore";  
  salary:number=65000;  
}  