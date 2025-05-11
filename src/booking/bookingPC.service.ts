import { Injectable } from '@nestjs/common';
import OrderDTO from './classes/OrderDTO';
import { Order } from './classes/Order';

@Injectable()
export class BookingPCService {
    async MakeOrder(OrderDTO:OrderDTO){
        const NewOrder = new Order(OrderDTO)
    }
}
