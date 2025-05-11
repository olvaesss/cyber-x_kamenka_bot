import OrderDTO from "./OrderDTO";

export class Order{
    GuestName:string;
    GuestNumber:string
    StartSession:Date
    DurationSession:number
    Comment?:string
    Answer:string

    constructor(OrderDTO:OrderDTO)
    {
        this.GuestName = OrderDTO.GuestName;
        this.GuestNumber = OrderDTO.GuestNumber;
        this.StartSession = OrderDTO.StartSession;
        this.DurationSession = OrderDTO.DurationSession;
        this.Comment = OrderDTO.Comment
        this.Answer = 'in queue'
    }

    setAnswer(Answer:string){
        this.Answer = Answer
    }
}