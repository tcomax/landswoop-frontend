import { Component, Input } from '@angular/core';
import { CommissionClass } from '../../models/commission-class';
import { UserDataService } from '../../services/userdata.service';
import { UserClass } from '../../models/user-class';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.html',
  providers: [],
})
export class CommissionsComponent {

  commissions: CommissionClass[]; 
  subscription: Subscription;

  constructor(private uds: UserDataService) {
    this.subscription = this.uds.getData('commissionComponent').subscribe(
      payload => { 
        if ((payload.key === 'earnings')  && (payload.sender !== 'commissionsComponent')) {
          this.commissions = payload.data;             
          console.log(` earnings: ${JSON.stringify(this.commissions)}`);
        }
      },
      error => {
        console.log(`Error getting user data fro UDS - ${error}`);
      });
      this.uds.setData('commissionsComponent', 'earnings', 'reload', {});  
  }

} 
