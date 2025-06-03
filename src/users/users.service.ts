import { Injectable, OnModuleInit } from "@nestjs/common";
import { TelegramService } from "src/telegram/telegram.service";

@Injectable()
export class UsersService implements OnModuleInit{
    constructor(private telegramService:TelegramService) {}
    onModuleInit(){}

    RegNewUser(){
    }
}