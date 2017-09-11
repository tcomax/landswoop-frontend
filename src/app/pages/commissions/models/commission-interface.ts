import { OrderClass } from '../../orders/models/order-class';
import { UserClass } from '../../users/models/user-class';

export interface OrderInterface {
    id: number;
    type: string; // (referral | holdings)
    order: OrderClass;
    recipient: UserClass;
    amount: number;
    rate: number;    
    status: number; // {sucessful/failed/pending//cancelled}
}
