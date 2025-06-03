import { Module } from "@nestjs/common";
import { TelegramModule } from "src/telegram/telegram.module";

@Module({
    imports:[TelegramModule],
    providers:[],
    exports:[]
})

export class UsersModule{}