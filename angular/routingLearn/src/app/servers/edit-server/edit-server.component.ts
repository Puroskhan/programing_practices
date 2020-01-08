import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanDeactivateGuard{
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit:boolean = false;
  changesSaved:boolean =  false;

  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // console.log("snapshot : ",this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
 
    setTimeout(() => {
      this.route.queryParams.subscribe(
        (queryParams:Params)=>{
          console.log('queryParams : ',queryParams);
        this.allowEdit  = queryParams['allowEdit'] ==='1'? true:false;
        }
      );
    });
 
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo:this.route})

  }
  canDeactivate():Observable<boolean>|Promise<boolean>|boolean{
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !==this.server.status ) && !this.changesSaved){
      return confirm("do u want discard?");
    }
  }

}