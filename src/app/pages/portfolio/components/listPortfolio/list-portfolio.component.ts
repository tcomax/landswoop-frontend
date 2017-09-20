import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PortfolioClass } from '../../../../models/portfolio-class';
import { TransactionClass } from '../../../../models/transaction-class';

import { TradeService } from '../../../../services/trade.service';
import { SearchService } from '../../../../services/search.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './default-modal/default-modal.component';
import { SearchFilterPipe } from '../../../../filters/search-filter.pipe';

import { UserDataService } from '../../../../services/userdata.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-portfolio',
  templateUrl: './list-portfolio.html',
  providers: [],
})
export class ListPortfolioComponent implements OnDestroy, OnInit {

  folio: PortfolioClass[];
  message: any;
  subscription: Subscription;

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.subscription.unsubscribe();
  }

  ngOnInit() {

    this.subscription = this._ss.getMessage().subscribe(
      data => { 
        this.message = data; 
        console.log('listPortfolioComponent '.concat(this.message));
      },
      error => {
        console.log('Error listPortfolioComponent '.concat(error));
      });
  }

  constructor(
    private _ts: TradeService, 
    private _ss: SearchService,
    private uds: UserDataService,   
    private modalService: NgbModal) {
      
      this.subscription = this._ss.getMessage().subscribe(
        data => { 
          this.message = data; 
          console.log('listPortfolioComponent '.concat(this.message));
          this.uds.setData('listPortfolioComponent', 'portfolio', 'reload', {});
        },
        error => {
          console.log('Error listPortfolioComponent '.concat(error));
        });
       
        this.subscription = this.uds.getData('listPortfolioComponent').subscribe(
          payload => { 
            if ((payload.key === 'portfolio') && (payload.sender !== 'listPortfolioComponent')) {
              let key: any;
              let dFolio: PortfolioClass[] = [];
              for (key in payload.data) {
                if (key) {
                  let folio = payload.data[key];
                   console.log(`folio in payload: ${JSON.stringify(folio)}`);
                  dFolio[key] = new PortfolioClass(
                    folio.id, folio.land_id, folio.quantity, 
                    folio.total, folio.location);
                }
              }
              this.folio = dFolio;           
              // this.lands = this._mds.lands;              
              
              // console.log(`list-trnxs: ${JSON.stringify(JSON.stringify(this.trnxs))}`);
            }
          },
          error => {
            console.log(`Error getting portfolio data from UDS - ${error}`);
          });
  }

  @Input() portfolio: PortfolioClass[];

  lgModalShow(selection: PortfolioClass) {
    /* alert(portfolioItem.land.id);
    this.trnx = new TransactionClass(null, 1, selection.landId, 
      selection.location, null, null,
      selection.quantity, 0, null, 
      null, 0);

    const activeModal = this.modalService.open(DefaultModal, { size: 'lg' });
    activeModal.componentInstance.modalHeader = 'Details';
    activeModal.componentInstance.portfolio = selection;*/
  }

}

