import { Component, Input } from '@angular/core';
import { PortfolioClass } from '../../models/portfolio-class';
import { UserDataService } from '../../services/userdata.service';
import { UserClass } from '../../models/user-class';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  providers: [],
})
export class PortfolioComponent {

  portfolio: PortfolioClass[]; 
  subscription: Subscription;
  
    constructor(private uds: UserDataService) {
      this.subscription = this.uds.getData('portfolioComponent').subscribe(
        payload => { 
          this.portfolio = payload.data; 
          if ((payload.key === 'portfolio') && (payload.sender !== 'portfolioComponent')) {
            console.log(`portfolio : ${JSON.stringify(this.portfolio)}`);
          }
        },
        error => {
          console.log(`Error getting portfolio data fro UDS - ${error}`);
        });
        this.uds.setData('portfolioComponent', 'portfolio', 'reload', {});        
    }
}
