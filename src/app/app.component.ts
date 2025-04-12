import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//declaration 
  title = 'DummyApp';
  student = {
   name:"Leo",
   gender:"Male"
   };
}
