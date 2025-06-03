import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Markup, Telegraf } from 'telegraf';

@Injectable()
export class TelegramService implements OnModuleInit {
  public bot: Telegraf;
  private lastUserMessageId: number | null = null;
  private lastBotMessageId: number | null = null;

  onModuleInit() {
    this.bot = new Telegraf(process.env.BOT_TOKEN??'7836277284:AAEmR49Vp5j_j8ibf94x1ybkngWdMe68RFA');
    this.bot.start(async (ctx) =>{ 
      console.log(this.lastUserMessageId = ctx.update.message.message_id || ctx.message?.message_id)
      ctx.reply('Привет! Выбери одну из кнопок:', Markup.inlineKeyboard([
      [Markup.button.callback('Забронировать ПК', 'PC')],
      [Markup.button.callback('Забронировать PS5', 'PS5')],
      [Markup.button.callback('Информация о клубе', 'Info_Club')],
      [Markup.button.callback('Информация о боте', 'Info')],
    ]))
    // console.log(await ctx.deleteMessage(ctx.message.message_id))
    try {
    ctx.deleteMessage(await ctx.message.message_id-1)
    } catch (err) {
      console.log(err)
    }
  });
    this.bot.action('Info', (ctx) => ctx.reply('Бот разработан Старовойтовым stepaosnova1@gmail.com Степаном'));
    this.bot.action('Info_Club', (ctx) => ctx.reply('Мы - компьютерный клуб CyberX Kamenka. Наш адрес: Неманская 72. У нас ты найдешь лучшие ПК и целых 3 комнаты с PS5! Также у нас есть 3 VIP-комнаты на компанию до 5 человек, а также PREMIUM-комната для двоих. У нас большой ассортимент еды и напитков, которые можно покушать как за ПК или в PS-комнате, так и на клевой трансляции в лаунже. Еще у нас есть кальяны, которые доступны в VIP, PS и PREMIUM комнатах, а ассортимент вкусов поражает воображение. Ждем тебя в нашем клубе!'));

    this.bot.launch();
    console.log('Telegram bot started');
  }

  // constructor() {
  //   const token = '7836277284:AAEmR49Vp5j_j8ibf94x1ybkngWdMe68RFA';
  //   this.bot = new Telegraf(token);
  //   this.initializeBot();
  // }

  //  initializeBot() {
  //   this.bot.start((ctx) => ctx.reply('Привет! Выбери одну из кнопок:', Markup.inlineKeyboard([
  //     [Markup.button.callback('Забронировать ПК', 'PC')],
  //     [Markup.button.callback('Забронировать PS5', 'PS5')],
  //     [Markup.button.callback('Забронировать стол в Lounge-Zone', 'Lounge')],
  //     [Markup.button.callback('Информация о клубе', 'Info_Club')],
  //     [Markup.button.callback('Информация о боте', 'Info')],
  //   ])));
  
  //   this.bot.action('Info', (ctx) => ctx.reply('Бот разработан Старовойтовым stepaosnova1@gmail.com Степаном'));
  //   this.bot.action('Info_Club', (ctx) => ctx.reply('Мы - компьютерный клуб CyberX Kamenka. Наш адрес: Неманская 72. У нас ты найдешь лучшие ПК и целых 3 комнаты с PS5! Также у нас есть 3 VIP-комнаты на компанию до 5 человек, а также PREMIUM-комната для двоих. У нас большой ассортимент еды и напитков, которые можно покушать как за ПК или в PS-комнате, так и на клевой трансляции в лаунже. Еще у нас есть кальяны, которые доступны в VIP, PS и PREMIUM комнатах, а ассортимент вкусов поражает воображение. Ждем тебя в нашем клубе!'));
  //   this.bot.launch();
    
  // }

  start() {
    return 'Бот запущен!';
  }

  handleCallback(body: any) {
    // Например, можно обработать нажатие кнопки
  }
}
