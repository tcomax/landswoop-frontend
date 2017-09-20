import { DocumentClass } from './document-class';
import { UserClass } from './user-class';
import { LandClass } from './land-class';

export class OrderClass {
    price: number;
    type: number;       // {sell/buy}
    landId: number;
    quantity: number;
    total: number; 

    constructor(
        _type: number, 
        _landId: number, 
        _quantity: number, 
        _price: number,
        _total: number) {
        this.type = _type;
        this.landId = _landId;
        this.quantity = _quantity;
        this.price = _price;        
        this.total = _total;
    }

   /* getOrderTotal(): number {
        return this.quantity * this.land.price;
    }*/
}
