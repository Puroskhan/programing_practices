import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']//,
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingservie:LoggingService,private accountservice:AccountService){

  }
   

  onSetTo(status: string) {
    this.accountservice.updateStatus(this.id,status);
    this.accountservice.statusUptated.emit(status);
  }
}
