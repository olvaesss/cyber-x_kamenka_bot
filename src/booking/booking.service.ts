import { Injectable, OnModuleInit } from '@nestjs/common';
import { TelegramService } from 'src/telegram/telegram.service';

@Injectable()
export class BookingService implements OnModuleInit{    
    constructor(private telegramService:TelegramService) {}
    onModuleInit() {
    }

    async startBooking(){
        this.telegramService.bot.action('PC', async (ctx)=>ctx.reply(await this.Booking(TypeBooking.PC)))
        this.telegramService.bot.action('PS5', (ctx)=>this.Booking(TypeBooking.PS5))
        this.telegramService.bot.action('Lounge', (ctx)=>this.Booking(TypeBooking.Lounge))
    }

    async Booking(type:TypeBooking){
        return 'booked'
    }
}
