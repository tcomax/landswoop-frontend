import { Component, Input } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { PortfolioClass } from '../../models/portfolio-class';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  providers: [],
})
export class PortfolioComponent {

  portfolio: PortfolioClass[]; 
  constructor(private _mds: MockDataService) {
    this.portfolio = _mds.portfolio;
  }

  // @Input() orders: OrderClass[];
}
