// src/booking/booking.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingLoungeService } from './bookingLounge.service';
import { BookingPCService } from './bookingPC.service';
import { BookingPS5Service } from './bookingPS5.service';


@Controller('booking')
export class BookingController {
  constructor(
    private readonly bookingService: BookingService,
    private readonly bookingPSService: BookingPS5Service,
    private readonly bookingPCService: BookingPCService,
    private readonly bookingLoungeService: BookingLoungeService,
  ) {}

  @Post('ps')
  async bookPS(@Body() body: any) {
    return this.bookingPSService.book(body);
  }

  @Post('pc')
  async bookPC(@Body() body: any) {
    return this.bookingPCService.book(body);
  }

  @Post('lounge')
  async bookLounge(@Body() body: any) {
    return this.bookingLoungeService.book(body);
  }
}
