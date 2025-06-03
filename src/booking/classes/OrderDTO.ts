export default interface OrderDTO{
    GuestName:string;
    Type:TypeBooking
    GuestNumber:string
    StartSession:Date
    DurationSession:number
    Comment?:string
    Answer:string
}