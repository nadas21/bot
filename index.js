const Telegrambot = require("node-telegram-bot-api");

const Token = "6780354646:AAHvGHBICI-iXt0V4s_r1Dmjot5iBUQ-zO8";

const bot = new Telegrambot(Token, {
  polling: true,
});

bot.setMyCommands([
  {
    command: "/start",
    description: "botni qayta ishga turish",
  },
  {
    command: "/info",
    description: "bot haqida  malumot olish ",
  },
]);

bot.onText(/start/, async (msg) => {
  const chatId = msg.chat?.id;
  await bot.sendMessage(
    chatId,
    `Assalomu aleykim botimizga xush kelibsiz ${msg.chat.first_name}`,
    {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "Menu",
            },
            {
              text: "Buyurtama berish",
            },
          ],
          [
            {
              text: "☎️ Qo'llab-quvatlash",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    }
  );
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  if (msg.text === "Menu") {
    bot.sendMessage(chatId, "Menular", {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "Lavash",
            },
            {
              text: "Hamburger",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    });
    }


    if (msg.text === "Lavash") {
        bot.sendMessage(chatId, "Tanleng", {
          reply_markup: JSON.stringify({
            keyboard: [
              [
                {
                  text: "Mol go'shlik lavash",
                },
                {
                  text: "Tovuq go'shlik lavash",
                },
                {
                    text: "Sirli lavash",
                  },
              ],
            ],
            resize_keyboard: true,
          }),
        });
        }


        if (msg.text === "Mol go'shlik lavash") {
          bot.sendPhoto(
            chatId,
            "https://anhor.uz/wp-content/uploads/2023/12/side_view_chicken_roll_grilled_chicken_lettuce_cucumber_tomato_mayo_pita_1200x675.jpg",
            {
              caption: `
              <strong>Lavash</strong>
<i class="tg-spoiler">25 000 uzs</i>
<i class="tg-spoiler">Mol go'shlik lavash</i>
        `,
              parse_mode: "HTML",
              reply_markup: {
                 inline_keyboard: [
                  [
                      {
                          text : "Buyurtma berish",
                          callback_data: "Buyurtma"
                      }
                  ]
                  ]
              }
        
            }
          );
        }

        if (msg.text === "Tovuq go'shlik lavash") {
            bot.sendPhoto(
              chatId,
              "https://i.ytimg.com/vi/ZuUwHo6Vcoc/sddefault.jpg",
              {
                caption: `
                <strong>Lavash</strong>
<i class="tg-spoiler">24 000 uzs</i>
<i class="tg-spoiler">Tovuq go'shlik lavash</i>
          `,
                parse_mode: "HTML",
                reply_markup: {
                   inline_keyboard: [
                    [
                        {
                            text : "Buyurtma berish",
                            callback_data: "Buyurtma"
                        }
                    ]
                    ]
                }
          
              }
            );
          }

          if (msg.text === "Sirli lavash") {
            bot.sendPhoto(
              chatId,
              "https://minifood.uz/wp-content/uploads/2024/03/Lavash-sirli.png",
              {
                caption: `
                <strong>Lavash</strong>
<i class="tg-spoiler">24 000 uzs</i>
<i class="tg-spoiler">Sirli lavash</i>
          `,
                parse_mode: "HTML",
                reply_markup: {
                   inline_keyboard: [
                    [
                        {
                            text : "Buyurtma berish",
                            callback_data: "Buyurtma"
                        }
                    ]
                    ]
                }
          
              }
            );
          }

          if (msg.text === "Hamburger") {
            bot.sendPhoto(
              chatId,
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBGJSHXpTS1tUfuOHWcrm68o5vpVXCK4yiA&s",
              {
                caption: `
                <strong>Lavash</strong>
<i class="tg-spoiler">30 000 uzs</i>
<i class="tg-spoiler">Mol go'shlik </i>
          `,
                parse_mode: "HTML",
                reply_markup: {
                   inline_keyboard: [
                    [
                        {
                            text : "Buyurtma berish",
                            callback_data: "Buyurtma"
                        }
                    ]
                    ]
                }
          
              }
            );
          }


        });
        
        //           if (msg.text === "☎️ Qo'llab-quvatlash") {
        //             bot.onText(
        //               chatId,
        //               {
        //                 caption: `
        //                 <strong>🗯 Sizda biron bir savol bolsa adminga murojat qiling</strong>
        // <i class="tg-spoiler">☎️ Qo'llab quvatlash: @nadasuzb</i>
        // <i class="tg-spoiler">📆 24/7 08:00 - 22:00</i>
        //           `,
        //                 parse_mode: "HTML",
        //                 reply_markup: {
        //                    inline_keyboard: [
        //                     [
        //                         {
        //                             text : "☎️ Admin bilan bog'lanish",
        //                             callback_data: "Buyurtma"
        //                         },
        //                         {
        //                             text : "Guruximiz bir birimizga yordam bereylik",
        //                             callback_data: "Buyurtma"
        //                         },
        //                         {
        //                             text : "? Kop sorayaldigon savolar",
        //                             callback_data: "Buyurtma"
        //                         }
        //                     ]
        //                     ]
        //                 }
                  
        //               }
        //             );
        //           }