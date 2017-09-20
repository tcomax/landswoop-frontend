export class PortfolioClass {
    id: number;
    landId: number;
    quantity: number;
    total: number;
    location: string;

    constructor(_id: number,
                _landId: number, _quantity: number, 
                _total: number, _location: string) {
        this.id = _id;
        this.landId = _landId;
        this.quantity = _quantity;
        this.total = _total;
        this.location = _location;
    }
/*
    getAllOrders(): OrderClass {
        // return baale.getAllOrders();
    }
*/

}
