import { Component, Input } from '@angular/core';
import { LandClass } from '../../models/land-class';

import { UserDataService } from '../../services/userdata.service';
import { UserClass } from '../../models/user-class';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-lands',
  templateUrl: './lands.html',
  providers: [],
})
export class LandsComponent {

  lands: LandClass[]; 
  subscription: Subscription;

  constructor(private uds: UserDataService) {
    this.subscription = this.uds.getData('landsComponent').subscribe(
      payload => { 
        if ((payload.key === 'lands') && (payload.sender !== 'landsComponent')) {
          this.lands = payload.data;           
          //console.log(`Lands: ${JSON.stringify(this.lands)}`);
        }
      },
      error => {
        console.log(`Error getting lands data fro UDS - ${error}`);
      });
      this.uds.setData('landsComponent', 'lands', 'reload', {});
  }
} 
