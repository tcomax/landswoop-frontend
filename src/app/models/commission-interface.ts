export interface CommissionInterface {
    id: number;
    type: string; // (referral | holdings)
    rate: number;
    amount: number;
    trnxId: number;
    trnxAmount: number;
    buyer: string;    
    location: string;
    date: Date;
}
