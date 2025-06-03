// src/booking/booking.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { BookingService } from './booking.service';



@Controller('booking')
export class BookingController {
  constructor(
    private readonly bookingService: BookingService,
  ) {}

}
