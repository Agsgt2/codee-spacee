type message = {
    msg: string;
    nick: string;
    home: string;
}

type socketObject = {
    on: <T extends string>(ev: T, fn: (...data: any[])=>void)=>socketObject;
    emit: <T extends string>(ev: T, ...data: string[])=>socketObject;
    send: (...data: string[])=>socketObject;
}

type heObject = {
    decode: (s: string)=>string;
}

const io: (url: string | URL)=>socketObject = require("socket.io-client")
const he: heObject = require("he")
const socket = io("https://v2.windows93.net:8088")

socket.emit("user joined", "CommonBot (cb!)", "orange", "", "", "")

socket.on("message", (data: message)=>{
    const [msg, nick, home] = [he.decode(data.msg), he.decode(data.nick), he.decode(data.home)]
    switch (msg.split(" ")[0]) {
        case "help":
            socket.send([
                "CommonBot: A bot made in CommonTS",
                "say      : ..."
            ].join("\n"))
            break;
        case "say":
            socket.send(`${nick} says:${msg.replace("cb!say", "")}`)
            break;
    }
})