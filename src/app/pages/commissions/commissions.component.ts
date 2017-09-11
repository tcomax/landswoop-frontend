import { Component, Input } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { CommissionClass } from '../../models/commission-class';


@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.html',
  providers: [],
})
export class CommissionsComponent {

  commissions: CommissionClass[]; 
  constructor(private _mds: MockDataService) {
    this.commissions = _mds.commissions;
  }

  // @Input() commissions: CommissionClass[]; 
} 
