type message = {
    msg: string;
    nick: string;
    home: string;
}

import { io } from "socket.io-client";
import he from "he"
const socket = io("https://trollbox.fun")

socket.emit("user joined", "GitBot (g!)", "gray", "bot", "")

socket.on("message", (data: message)=>{
    console.log(`${data.nick}: ${data.msg}`)
    switch (data.msg.split(" ")[0]){
        case "g!help":
            socket.send([
                "GitBot: A bot made in Github Codespace",
                "ping  : aaaaaaaaaaaaa",
                "pong  : gnop",
                "hello : yes.",
                "decode: decodes something [arg: undecoded]",
                "gta10 : installer for gta 10"
            ].join("\n"))
            break;
        case "g!ping":
            socket.send("Pong!")
            break;
        case "g!pong":
            socket.send("Ping!")
            break;
        case "g!hello":
            socket.send("Hello, "+data.nick+"!")
            break;
        case "g!decode":
            socket.send(`${data.nick} decoded${he.decode(data.msg.replace("g!decode", ""))}`)
            break;
        case "g!gta10":
            socket.send(he.decode("<button onclick=\"socket.send('yay i installed GTA 10!!')\">GTA 10 DOWNLOAD</button>"))
            break;
    }
})