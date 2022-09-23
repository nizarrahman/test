
## CATATAN
Script ini untuk semua orang, bukan untuk Dijual. Jika dijual neraka menunggumu kakak !
#### a little about this bot
- [x] **Fast Respon** 
- [x] **Simple** 
- [x] **Button Template** 
- [x] **Multi Device** 
- [x] **Button Document(Experiment)** 
---------
#### Some of the features include
- [x] Downloader 
- [x] Internet 
- [x] Game Rpg 
- [x] Nsfw 
- [x] Sticker 
- [x] Game 
- [x] Kerang Ajaib 
- [x] Quotes 
- [x] Anime 
- [x] Premium 
- [x] Tools 
- [x] Exec 
- [x] React 
---------

## `SETTING`

- Owner Number [Here](https://github.com/Kahfi-XD/Maxxy-V5/blob/master/config.js#L1)
- Owner Name [Here](https://github.com/Kahfi-XD/Maxxy-V5/blob/master/config.js#L1)
- Bot Name [Here](https://github.com/Kahfi-XD/Maxxy-V5/blob/master/config.js#L1)
---------

## ```Heroku Buildpack```
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/)

| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git) |
| **IMAGEMAGICK** | [here](https://github.com/mcollina/heroku-buildpack-imagemagick.git) |

## TERMUX USER
```bash
$ pkg upgrade && pkg update
$ pkg install git -y
$ pkg install nodejs -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ git clone https://github.com/Kahfi-XD/Maxxy-V5
$ cd Maxxy-V5
$ npm i 
```
If error try using yarn instead of npm, see [here](https://github.com/BochilGaming/games-wabot/tree/multi-device#if-npm-install-failed--try--using-yarn-instead-of-npm)
```bash
$ node .
```


---------

## ```Arguments node . [--options] [<session name>]```

## `--self`
* Activate self mode (Ignores other)

## `--pconly`
* If that chat not from private bot, bot will ignore

## `--gconly`
* If that chat not from group, bot will ignore

## `--swonly`
* If that chat not from status, bot will ignore

## `--prefix <prefixes>`
* `prefixes` are seperated by each character
Set prefix

## `--server`
* Used for [heroku](https://heroku.com/) or scan through website

## `--restrict`
* Enables restricted plugins (which can lead your number to be **banned** if used too often)
* Group Administration `add, kick`

## `--img`
* Enable image inspector through terminal

## `--autoread`
* If enabled, all incoming messages will be marked as read

## `--nyimak`
* No bot, just print received messages and add users to database

## `--test`
* **Development** Testing Mode

---------

## ```How To Customise Message Display```
```js
// Syntax
conn.sendButton(
      jid, // jid of the user to send the message to
      text, // text to send
      foooter, // footer to send
      buffer, // buffer to send (optional), if you want to send button image, location, etc
      buttons, // buttons to send, example [['text1', 'id1'], ['text2', 'id2']]
      quoted, // quoted message to send (optional)
      options // options to send, example { asLocation: true }
)

// example 
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', null, [
      ['Hello', 'hello'], ['Bye', 'bye']
])
// example button location
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', 'https://github.com/BochilGaming', 
      [['Hello', 'hello'], ['Bye', 'bye']], 
      null, { asLocation: true }
)
```
---------

### 📮 S&K
1. Don't For Sale
2. Don't forget give star this repo
3. Follow Github
4. Don't use this repository wrong!
5. If you have problem chat me in owner number

---------

### ❗ Note : Apikeynya Beli Sendiri Ya Guys😁

---------

## ```Thanks to ✨```
* [`Allah SWT`](https://github.com/WH-MODS-BOT)
* [`My parents`](https://github.com/WH-MODS-BOT)
* [`All Friends`](https://github.com/WH-MODS-BOT)
* [`All Contributors`](https://github.com/WH-MODS-BOT)
* [`All Creator Bot`](https://github.com/WH-MODS-BOT)
* [`Adiwajshing`](https://github.com/adiwajshing/Baileys)
* [`Nurutomo`](https://github.com/nurutomi)
* [`BochilGaming`](https://github.com/bochilgaming)
* [`ImYanXiao`](https://github.com/ImYanXiao)
* [`KannaChann`](https://github.com/kannachann) 
* [`The.Sad.Boy01`](https://github.com/Kangsad01) 
* [`Papah-Chan`](https://github.com/FahriAdison) 

## ```Recode By ✏️```
[![WH-MODS-BOT](https://github.com/kahfi-XD.png?size=70)](https://github.com/kahfi-XD)
