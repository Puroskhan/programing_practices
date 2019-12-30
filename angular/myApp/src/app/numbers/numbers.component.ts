import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
   
  numbersArr = [];
   snumber:any;
   numberType:boolean;

  constructor() { }

  ngOnInit() {
  }

  addNumber(){
    this.numbersArr.push(this.snumber);
    this.numberType = this.isOdd(this.snumber) == 1 ? true:false;
    this.snumber = '';
  }
  removeNumber(i:number){
    let newInn = this.numbersArr.indexOf(i);
    if(newInn > -1){
      this.numbersArr.splice(newInn,1);
    }
  }

  isOdd(i:number){
    console.log(i % 2);
    return i % 2
  }
}
