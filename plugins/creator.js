let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
â¦ @${nomorown.split`@`[0]} â¦
------- ${nameown} -------

ð® *Note:*
â¢ Owner tidak menerima save contact
â¢ Owner berhak blockir tanpa alasan
â¢ Berbicaralah yang sopan & tidak spam
â¢ Owner Hanya merespon yang berkaitan dengan BOT
â¢ No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *ð Nama* : NÌ½ÍiÌ½ÍzÌ½ÍaÌ½ÍrÌ½Í Ì½ÍRÌ½ÍaÌ½ÍhÌ½ÍmÌ½ÍaÌ½ÍnÌ½Í
${htjava} *âï¸ Nama RL* : Nizar
${htjava} *âï¸ Gender* : Boys
${htjava} *ð Agama* : Islam
${htjava} *â° Tanggal lahir* : 02-11-2005 ð¥¶
${htjava} *ð¨ Umur* : 17
${htjava} *ð§® Kelas* : 11 Smk
${htjava} *ð§© Hobby* : Renang Basket
${htjava} *ð¬ Sifat* : ASIK DAH KALAU DAH KENAL
${htjava} *ðºï¸ Tinggal* : Indo, Cianjur, Jawa Barat 
${htjava} *â¤ï¸ Waifu* : Bukan Wibu

${htjava} *ð· ÉªÉ´sá´á´É¢Êá´á´* : ${sig}
${htjava} *ð É¢Éªá´Êá´Ê:* ${sgh}
â¢Â·ââââââââââââââââââââââââââÂ·â¢
`
  let teks = 'Pilih dibawah kak ! o(ãï¼¾â½ï¼¾ã)o'
const sections = [
   {
	title: `${htjava} OWNER âââââââââÂ·â¢`,
	rows: [
	    {title: "ð± â¢ Nomor", rowId: ".owner nomor"},
	{title: "ð¨ â¢ Biodata", rowId: ".owner bio"},
	{title: "ð â¢ Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME âââââââÂ·â¢`,
	rows: [
	    {title: "ð¹ â¢ Donasi", rowId: ".owner nomor"},
	{title: "ð â¢ Sewa", rowId: ".sewa"},
	{title: "ð â¢ Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "ð· Instagram", nomorown, 'ð¹ Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`â®â° Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
