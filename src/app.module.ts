import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { TelegramModule } from './telegram/telegram.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BookingModule, TelegramModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
