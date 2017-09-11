import { Component, Input } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { LandClass } from '../../models/land-class';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-lands',
  templateUrl: './lands.html',
  providers: [],
})
export class LandsComponent {

  lands: LandClass[]; 

  constructor(private _mds: MockDataService) {
    this.lands = _mds.lands;
  }

  // @Input() lands: landClass[]; 


} 
