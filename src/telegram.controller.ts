import { Controller, Get, Post, Body } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Get('start')
  start() {
    return this.telegramService.start();
  }

  @Post('callback')
  handleCallback(@Body() body: any) {
    return this.telegramService.handleCallback(body);
  }
}
