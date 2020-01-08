import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs/';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  numberSubscription:Subscription;
  customSubcription:Subscription;
  
  changeNumber:number;
  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
   this.numberSubscription = myNumbers.subscribe(
      (numbers:number)=>{
       this.changeNumber=numbers;
       console.log(this.changeNumber);
      }
    )
    
  const myObservable = Observable.create((observar:Observer<string>)=>{
     setTimeout(
       ()=>{ 
       observar.next('first pack');
       },1000);
       setTimeout(
        ()=>{ 
        observar.next('second pack');
        },4000);
        setTimeout(
          ()=>{ 
          observar.complete();
          },5000);
        setTimeout(
          ()=>{ 
          observar.error('error occured');
          },6000)
  })
 this.customSubcription = myObservable.subscribe(
    (data:string)=>{
      console.log(data);
    },
    (error:string)=>{
      console.log(error);
    },
    ()=>{
      console.log('completed ');
    }
  )
  }

  ngOnDestroy(){
  this.numberSubscription.unsubscribe();
  this.customSubcription.unsubscribe();
  }
}
