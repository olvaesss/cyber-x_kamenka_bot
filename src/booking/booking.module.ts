import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingPCService } from './bookingPC.service';
import { BookingPS5Service } from './bookingPS5.service';
import { BookingLoungeService } from './bookingLounge.service';
import { BookingService } from './booking.service';

@Module({
  imports: [],
  controllers: [BookingController],
  providers: [ BookingService,BookingPCService, BookingPS5Service, BookingLoungeService],
})
export class BookingModule {}