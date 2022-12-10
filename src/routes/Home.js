import {useEffect, useState} from "react";

function Home() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    const getUser = async () => {
        await console.log("사용자 정보 받아오는 API");
        setTimeout(() => {
            setUser(["유저명", "유저 정보"]);
            setLoading(false);
        }, 1000);
    }
    useEffect(() => {
        getUser();
    }, []);
    return (<div>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
                {user.map((userInfo, index) => (
                    <div key={index}>{userInfo}</div>
                ))}
            </div>
        )
        }</div>);
}
export default Home;