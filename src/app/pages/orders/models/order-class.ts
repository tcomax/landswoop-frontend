import { DocumentClass } from '../../documents/models/document-class';
import { UserClass } from '../../users/models/user-class';
import { LandClass } from '../../lands/models/land-class';

export class OrderClass {
    id: number;
    type: number;       // {sell/buy}
    buyer: UserClass;
    land: LandClass;
    quantity: number;
    status: string; 
    total: number;    // {sucessful/failed/pending//cancelled}

    constructor(_id: number, _type: number, _buyer: UserClass, 
                _land: LandClass, _quantity: number, _total: number, _status: string ) {
        this.id = _id;
        this.type = _type;
        this.buyer = _buyer;
        this.land = _land;
        this.quantity = _quantity;
        this.status = _status;
        this.total = _total;
    }

    getOrderTotal(): number {
        return this.quantity * this.land.price;
    }

    createBuyOrder(_buyer: UserClass, _land: LandClass, 
                _quantity: number ): boolean {
        let buyOrder = new OrderClass(-1, 0, _buyer, _land, _quantity, 0, 'pending'); // status 4 means pending
        // retuen baale.executeBuyOrder(buyOrder) -- restful api to baale service (baale implements OrderClass)
        return true;
    }
    
    createSellOrder(_seller: UserClass, _land: LandClass, 
        _quantity: number ): boolean {
        let sellOrder = new OrderClass(-1, 1, _seller, _land, _quantity, 0, 'pending'); // status 4 means pending
        // return baale.executeSellOrder(sellOrder) -- restful api to baale service (baale implements OrderClass)
        return true;
    }
/*
    getAllOrders(): OrderClass {
        // return baale.getAllOrders();
    }
*/

}
