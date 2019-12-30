import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingApp';
  loader:string;
  onChangeCompo(feature:string){
   this.loader= feature;
  }
}
