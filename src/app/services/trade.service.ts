import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TradeService {
    private buyRequestSource = new Subject<any>();

    buyRequested$ = this.buyRequestSource.asObservable();

    executeBuyRequest(request: any) {
      this.buyRequestSource.next(request);
    }


}
