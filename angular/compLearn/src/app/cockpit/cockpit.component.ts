import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

 @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
 @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();;

 // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput:ElementRef;

  constructor() { }

  ngOnInit() {
  }
  onAddServer(servarNameInput:HTMLInputElement) {
    console.log(this.serverContentInput);
   this.serverCreated.emit({
     serverName:servarNameInput.value,
    serverContent:this.serverContentInput.nativeElement.value
  });
  }

  onAddBlueprint(servarNameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:servarNameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    });

}
}