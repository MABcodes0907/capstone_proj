import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

function Home() {
    const {user} = useContext(UserContext);

    return (
        <div className="home">
            <div className="content-container">
                <div className="content">
                    <div className="text">
                    <div className="FT">
                        <div>
                        CHILL <br />
                        AND <br />
                        HAVE FUN
                        </div>
                    </div>
                    <svg width={10} height="100%" xmlns="http://www.w3.org/2000/svg">
                        <rect
                        width={10}
                        height="100%"
                        x={0}
                        y={0}
                        rx={0}
                        ry={0}
                        fill="#003135"
                        />
                    </svg>
                    <div className="ST">
                        <div>
                        WELCOME TO <br /> MEGAY BEACH <br /> RESORT
                        </div>
                    </div>
                    </div>
                    <div className="register">
                    <div className="cbutton">
                        <Link to={user?'/cottage':'/login'} className="cottage-button">
                        COTTAGE RESERVATION
                        </Link>
                    </div>
                    <div className="rbutton">
                        <Link to={user?'/room':'/login'} className="room-button">
                        BOOK A ROOM
                        </Link>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
