import ServerListDrawer from "../components/ServerListDrawer";
import ChatBox from "../components/ChatBox";

function Main() {
    const dummyServers = ["일산 모임", "고양국제고 동창회", "영사모"];
    return (
        <>
            <ServerListDrawer servers={dummyServers}></ServerListDrawer>
            <ChatBox username={"이동영"}></ChatBox>
        </>
    )
}
export default Main;