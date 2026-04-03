type message = {
    msg: string;
    nick: string;
    home: string;
}

import { io } from "socket.io-client";
const socket = io("https://trollbox.fun")

socket.emit("user joined", "GitBot (g!)", "gray", "")

socket.on("message", (data: message)=>{
    console.log(`${data.nick}: ${data.msg}`)
    switch (data.msg.split(" ")[0]){
        case "g!help":
            socket.send([
                "GitBot: A bot made in Github Codespace",
                ""
            ].join("\n"))
    }
})