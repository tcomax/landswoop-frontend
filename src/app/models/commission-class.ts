export class CommissionClass {
    id: number;
    type: number; // (referral | holdings)
    rate: number;
    amount: number;
    trxnId: number;
    trxnAmount: number;
    buyer: string;    
    location: string;
    status: number;
    date: Date;

    constructor(_id: number, _type: number, _rate: number, _amount: number, 
                _trxnId: number, _trxnAmount: number, _buyer: string,
                _location: string, _status: number, _date: Date ) {
        this.id = _id;
        this.type = _type;
        this.rate = _rate;
        this.amount = _amount;
        this.trxnId = _trxnId;
        this.trxnAmount = _trxnAmount;
        this.buyer = _buyer;
        this.location = _location;
        this.status = _status;
        this.date = _date;
    }
}
