import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowStatus = false
  serverCreationStatus:string = "server was not created..!"
  serverName = 'fff';
  serverCreated:boolean =  false;
  servers = ['Test Server','Productio Server'];

  constructor() {
    setTimeout (()=>{
        this.allowStatus = true;

    },2000);
   }

   getServerCreateStatus() {
     this.serverCreated = true;
     this.servers.push(this.serverName);
     this.serverCreationStatus = " server created sucessfully. Name is " + this.serverName ;
   }

  ngOnInit() {
  }


  onUpdateServerName(event :Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
