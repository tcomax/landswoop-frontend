import { Component, Input } from '@angular/core';
import { TransactionClass } from '../../models/transaction-class';

import { UserDataService } from '../../services/userdata.service';
import { UserClass } from '../../models/user-class';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.html',
  providers: [],
})
export class TransactionsComponent {

  trnxs: TransactionClass[]; 
  subscription: Subscription;

  constructor(private uds: UserDataService) {
    this.subscription = this.uds.getData('TransactionsComponent').subscribe(
      payload => { 
        if ((payload.key === 'transactions') && (payload.sender !== 'TransactionsComponent')) {
          this.trnxs = payload.data;           
         //console.log(`trnxs: ${JSON.stringify(this.trnxs)}`);
        }
      },
      error => {
        console.log(`Error getting trnxs data fro UDS - ${error}`);
      });
      this.uds.setData('TransactionsComponent', 'transactions', 'list', {});
  }
} 
