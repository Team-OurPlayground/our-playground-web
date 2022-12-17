import {Container, FormControl, Input, InputAdornment, InputLabel} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {AccountCircle} from "@mui/icons-material";
import SockJS from 'sockjs-client';
import {Stomp} from "@stomp/stompjs";
import {useEffect, useState} from "react";

const sock = new SockJS('http://localhost:8080/ws-stomp')
const ws = Stomp.over(sock);
function ChatMessageInput({username}) {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    useEffect(() => {
        connect(ws, username, setMessageList);
    }, [username]);

    function send() {
        sendMessage(ws, username, message)
    }

    return (
        <Container>
            <div>
                {
                    messageList.map((message, index) => (
                        <div key={index}>
                            {message}
                        </div>
                    ))
                }
            </div>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">{username}</InputLabel>
                <Input id="input-with-icon-adornment"
                       startAdornment={
                           <InputAdornment position="start">
                               <AccountCircle />
                           </InputAdornment>
                       }
                       placeholder="메시지 입력하기"
                       onChange={(e) => setMessage(e.target.value)}
                />
                <SendIcon sx={{
                    ml : 'auto',
                    cursor: 'pointer'
                }}
                onClick={send}/>
            </FormControl>
        </Container>
    )
}

function connect(ws, username, setMessageList) {
    ws.connect({}, function (frame) {
        ws.subscribe("/sub/chat/room/" + "6c06e39f-e5d3-46da-9028-c64b0af862ff",
            (message) => {
                console.log(message.body)
                setMessageList(messageList => ([...messageList, message.body]));
            })
        ws.send("/pub/chat/message", {},
            JSON.stringify({
                type: 'ENTER',
                roomId: "6c06e39f-e5d3-46da-9028-c64b0af862ff",
                sender: username,
            }))
    })
}

function sendMessage(ws, username, message) {
    ws.send("/pub/chat/message", {},
        JSON.stringify({
            type: 'TALK',
            roomId : "6c06e39f-e5d3-46da-9028-c64b0af862ff",
            sender: username,
            message: message,
        }))
}

export default ChatMessageInput;