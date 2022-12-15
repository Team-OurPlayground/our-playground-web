import {Container, FormControl, Input, InputAdornment, InputLabel} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {AccountCircle} from "@mui/icons-material";
import SockJS from 'sockjs-client';
import {Stomp} from "@stomp/stompjs";

function ChatMessageInput({username}) {
    const sock = new SockJS('http://localhost:8080/ws-stomp')
    const ws = Stomp.over(sock);
    ws.connect({}, function (frame) {
        console.log(frame)
    })
    return (
        <Container>
            <div>
                <div>메시지 내용</div>
                <div>메시지 내용2</div>
            </div>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">{username}</InputLabel>
                <Input id="input-with-icon-adornment"
                       startAdornment={
                           <InputAdornment position="start">
                               <AccountCircle />
                           </InputAdornment>
                       }
                       placeholder="메시지 입력하기" />
                <SendIcon sx={{
                    ml : 'auto',
                    cursor: 'pointer'
                }}/>
            </FormControl>
        </Container>
    )
}

export default ChatMessageInput;