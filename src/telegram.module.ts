import { Module } from '@nestjs/common';
import { TelegramController } from './telegram.controller';
import { TelegramService } from './telegram.service';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [BookingModule],
  controllers: [TelegramController],
  providers: [TelegramService],
})
export class AppModule {}
