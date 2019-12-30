import { Component, OnInit, Input, ViewEncapsulation, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated //None or Native
})
export class ServerElementComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,OnDestroy {

  ngDoCheck(): void {
    console.log("ngDoCheck is called");
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(changes);
  }
 @Input("srvElement") element:{name:string, type:string,content:string};
 @Input("tempname")name:string;
 @ViewChild('heading') heading:ElementRef;
 @ContentChild('contentParagraph') contentParagh:ElementRef;
  constructor() { 
    console.log("constructor is called");
  }
  

  ngOnInit() {
    console.log("ngOnInit is called");
    console.log(" headdd "+ this.heading.nativeElement.textContent);
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit is called");
    console.log("ngAfterContentInit Froze" + this.contentParagh.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked is called");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit is called");
    console.log(" headdd "+ this.heading.nativeElement.textContent);


  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked is called");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy is called");

  }


}
