import { Component } from '@angular/core';


@Component({
selector:"app-server",
templateUrl:"./server.component.html",
styles:[`
.online{
    color:white
}
`]
})
export class ServerComponent{
serverId:number =10
serverName = "AWS";
serverStatus ='offline';


constructor(){
   this.serverStatus =Math.random()  > 0.5 ?  'online': 'offline';
}


getServerName(){
 return this.serverName
}
 getColor(){
    return this.serverStatus === 'online' ? 'green':'red'; 
 }

}