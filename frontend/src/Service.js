import coin from "./images/coin.svg";
import water from "./images/water.svg"; 
import swimming from "./images/swimming.svg";
import jetski from "./images/jetski.svg";
import party from "./images/party.svg";
import volleyball from "./images/volleyball.svg";



function Service() {
  return (
    <div className="content">
        <div className="nav-text">
            <svg width={10} height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width={10} height="100%" x="o" y={0} rx={0} ry={0} fill="aqua" />
            </svg>
            <div className="text1">SERVICE</div>
        </div>
        <div className="service-grid">
            <div className="s1">
            <div className="logo">
                <div className="service-logo">
                <img className="logo1" src={coin} />
                </div>
            </div>
            <div className="service-name">VIDEOKE &amp; SINGKO WIFI</div>
            <div className="service-info">
                Both are payable by 5 peso coin before used. Sing and have fun, while
                connecting online and to everyone.
            </div>
            </div>
            <div className="s1">
            <div className="logo">
                <div className="service-logo">
                <img className="logo1" src={water} />
                </div>
            </div>
            <div className="service-name">FLOATER/SALBABIDA</div>
            <div className="service-info">
                Each are rented for only 50 pesos for you and your loved one's safety
                during your stay for we believe that your safety is our priority
            </div>
            </div>
            <div className="s1">
            <div className="logo">
                <div className="service-logo">
                <img className="logo1" src={swimming} />
                </div>
            </div>
            <div className="service-name">SWIMMING POOL</div>
            <div className="service-info">
                Provides a refreshing amenity for guests, offering relaxation, exercise,
                and entertainment to everyone during their stay.
            </div>
            </div>
            <div className="s1">
            <div className="logo">
                <div className="service-logo">
                <img className="logo1" src={jetski} />
                </div>
            </div>
            <div className="service-name">BANANA BOAT &amp; JETSKI</div>
            <div className="service-info">
                Try riding our new and speed type of jetski anda try it as well our
                banana boat that will surely adda fun to your resort experience.
            </div>
            </div>
            <div className="s1">
            <div className="logo">
                <div className="service-logo">
                <img className="logo1" src={party} />
                </div>
            </div>
            <div className="service-name">EVENT &amp; PARTY</div>
            <div className="service-info">
                We cater different events whether it may be big or small, elegant or
                simple because you are alla welcome to this place
            </div>
            </div>
            <div className="s1">
            <div className="logo">
                <div className="service-logo">
                <img className="logo1" src={volleyball} />
                </div>
            </div>
            <div className="service-name">PLAYING GROUND</div>
            <div className="service-info">
                Wanna have fun but don't know where to start? Try our Volleyball and
                Playing ground especially if you and those who are with you are into
                sports
            </div>
            </div>
        </div>
    </div>

  );
}

export default Service;
