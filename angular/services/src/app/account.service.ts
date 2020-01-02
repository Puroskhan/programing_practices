import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class AccountService{

    constructor(private laggingservice :LoggingService){

    }
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

   statusUptated = new EventEmitter<string>();

   addAccout(name:string,staus:string){
    this.accounts.push({name:name,status:staus});
    this.laggingservice.accountStatuService(status);

   }
   updateStatus(id:number,staus:string){
    this.accounts[id].status = staus;
    this.laggingservice.accountStatuService(status);
   }
}