import { OrderClass } from '../../orders/models/order-class';
import { UserClass } from '../../users/models/user-class';

export class CommissionClass {
    id: number;
    type: string; // (referral | holdings)
    order: OrderClass;
    recipient: UserClass;
    amount: number;
    rate: number;    
    status: string; // {sucessful/failed/pending//cancelled}

    constructor(_id: number, _type: string, _order: OrderClass, _recipient: UserClass, 
                _amount: number, _rate: number, _status: string ) {
        this.id = _id;
        this.type = _type;
        this.order = _order;
        this.recipient = _recipient;
        this.amount = _amount;
        this.rate = _rate;
        this.status = _status;
    }
}
