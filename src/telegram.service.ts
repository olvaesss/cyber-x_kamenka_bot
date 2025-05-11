import { Injectable } from '@nestjs/common';
import { Markup, Telegraf } from 'telegraf';

@Injectable()
export class TelegramService {
  private bot: Telegraf;

  constructor() {
    const token = '7836277284:AAEmR49Vp5j_j8ibf94x1ybkngWdMe68RFA';
    this.bot = new Telegraf(token);
    this.initializeBot();
  }

  private initializeBot() {
    this.bot.start((ctx) => ctx.reply('Привет! Выбери одну из кнопок:', Markup.inlineKeyboard([
      [Markup.button.callback('Забронировать ПК', 'PC')],
      [Markup.button.callback('Забронировать PS5', 'PS5')],
      [Markup.button.callback('Забронировать стол в Lounge-Zone', 'Lounge')],
      [Markup.button.callback('Информация о клубе', 'Info_Club')],
      [Markup.button.callback('Информация о боте', 'Info')],
    ])));
    this.bot.action('PC', (ctx) => ctx.reply('Сколько по времени хочешь поиграть?', Markup.inlineKeyboard([
      [Markup.button.callback('1 час', 'PC_1h')],
      [Markup.button.callback('3 часа', 'PC_3h')],
      [Markup.button.callback('5 часов', 'PC_5h')],
      [Markup.button.callback('Пакет Ночь(22:00 - 08:00)', 'PC_Night')],
      [Markup.button.callback('Другое время', 'PC_Other')],
    ])));
    this.bot.action('PS5', (ctx) => ctx.reply('Сколько по времени хочешь поиграть?', Markup.inlineKeyboard([
      [Markup.button.callback('1 час', 'PS5_1h')],
      [Markup.button.callback('3 часа', 'PS5_3h')],
      [Markup.button.callback('5 часов', 'PS5_5h')],
      [Markup.button.callback('Пакет Ночь(22:00 - 08:00', 'PS5_Night')],
      [Markup.button.callback('Другое время', 'PS5_Other')],
    ])));
    this.bot.action('Info', (ctx) => ctx.reply('Бот разработан Старовойтовым stepaosnova1@gmail.com Степаном'));
    this.bot.action('Info_Club', (ctx) => ctx.reply('Мы - компьютерный клуб CyberX Kamenka. Наш адрес: Неманская 72. У нас ты найдешь лучшие ПК и целых 3 комнаты с PS5! Также у нас есть 3 VIP-комнаты на компанию до 5 человек, а также PREMIUM-комната для двоих. У нас большой ассортимент еды и напитков, которые можно покушать как за ПК или в PS-комнате, так и на клевой трансляции в лаунже. Еще у нас есть кальяны, которые доступны в VIP, PS и PREMIUM комнатах, а ассортимент вкусов поражает воображение. Ждем тебя в нашем клубе!'));
    this.bot.launch();
  }

  start() {
    return 'Бот запущен!';
  }

  handleCallback(body: any) {
    // Например, можно обработать нажатие кнопки
  }
}
