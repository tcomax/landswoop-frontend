import { DocumentClass } from './document-class';
import { UserClass } from './user-class';
import { LandClass } from './land-class';

export class OrderClass {
    id: number;
    type: string;       // {sell/buy}
    buyer: UserClass;
    seller: UserClass;
    land: LandClass;
    quantity: number;
    status: string; 
    total: number; 
    date: Date;   // {sucessful/failed/pending//cancelled}

    constructor(_id: number, _type: string, _buyer: UserClass, 
                _land: LandClass, _quantity: number, _total: number, _status: string, _date: string,) {
        this.id = _id;
        this.type = _type;
        this.buyer = _buyer;
        this.land = _land;
        this.quantity = _quantity;
        this.status = _status;
        this.total = _total;
        this.date = new Date(_date);
    }

    getOrderTotal(): number {
        return this.quantity * this.land.price;
    }

    createBuyOrder(_buyer: UserClass, _land: LandClass, 
                _quantity: number ): boolean {
        let buyOrder = new OrderClass(-1, "Bought", _buyer, _land, _quantity, 0,
             'pending', this.date.toString()); // status 4 means pending
        // retuen baale.executeBuyOrder(buyOrder) -- restful api to baale service (baale implements OrderClass)
        return true;
    }
    
    createSellOrder(_seller: UserClass, _land: LandClass, 
        _quantity: number ): boolean {
        let sellOrder = new OrderClass(-1, "Sold", _seller, _land, _quantity, 0, 
            'pending', this.date.toString()); // status 4 means pending
        // return baale.executeSellOrder(sellOrder) -- restful api to baale service (baale implements OrderClass)
        return true;
    }
/*
    getAllOrders(): OrderClass {
        // return baale.getAllOrders();
    }
*/

}
