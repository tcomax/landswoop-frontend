import { DocumentClass } from './document-class';
import { UserClass } from './user-class';
import { LandClass } from './land-class';

export class PortfolioClass {
    id: number;
    owner: UserClass;
    land: LandClass;
    status: string; 
    quantity: number;

    constructor(_id: number, _owner: UserClass,
                _land: LandClass, _quantity: number, _status: string) {
        this.id = _id;
        this.owner = _owner;
        this.land = _land;
        this.quantity = _quantity;
        this.status = _status;
    }
/*
    getAllOrders(): OrderClass {
        // return baale.getAllOrders();
    }
*/

}
