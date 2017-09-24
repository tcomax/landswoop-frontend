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
  land: LandClass; 
  showView: string;
  subscription: Subscription;

  constructor(private uds: UserDataService) {
    this.showView = 'list';
    this.subscription = this.uds.getData('landsComponent').subscribe(
      payload => { 
        if ((payload.key === 'lands') && (payload.sender === 'listLandsComponent')) {
          if (payload.cmd === 'list') {
            this.showView = 'list';
            console.log(`Lands: ${JSON.stringify(this.lands)}`);            
            /* for (const key in payload.data) {
              if (key) {
                const land = payload.data[key];
                console.log(`land in payload: ${JSON.stringify(land)}`);
                this.lands[key] = new LandClass(land.id, land.ownerId,
                  land.description, land.location, land.area, land.available, land.price);
              }
            }
            this.uds.setData('landsComponent', 'lands', this.showView, payload.data);*/
          } else if (payload.cmd === 'buy') {
            this.showView = 'buy';  
            const land = payload.data;
            console.log(`land in payload: ${JSON.stringify(land)}`);
            /* this.land = new LandClass(land.id, land.ownerId,
              land.description, land.location, land.area, land.available, land.price);
            this.land = payload.data;*/
            // this.uds.setData('landsComponent', 'lands', this.showView, payload.data);
          }
        }
      },
      error => {
        console.log(`Error getting lands data fro UDS - ${error}`);
      });
      this.uds.setData('landsComponent', 'lands', this.showView, {});
  }
} 
