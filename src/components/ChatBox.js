import ChatMessageInput from "./ChatMessageInput";
import {Container} from "@mui/material";

function ChatBox({username}) {
    return (
        <Container>
            <ChatMessageInput username={username}></ChatMessageInput>
        </Container>
    )
}

export default ChatBox;