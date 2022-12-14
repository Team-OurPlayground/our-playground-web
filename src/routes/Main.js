import ServerListDrawer from "../components/ServerListDrawer";

function Main() {
    const dummyServers = ["일산 모임", "고양국제고 동창회", "영사모"];
    return (
        <ServerListDrawer servers={dummyServers}></ServerListDrawer>
    )
}
export default Main;