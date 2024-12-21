import couple from "./images/room-1.jpg";
import family from "./images/room-2.jpg";
import barkadahan from "./images/room-3.jpg";


function Room() {
  return (
    <div className="room">
      <div className="room-grid">
        <div className="room-box">
          <div className="image1">
            <img className="room-pic" src={couple} />
          </div>
          <div className="rtype">
            <div className="rname">COUPLE ROOM</div>
            <div className="rprice">2,000 for 12 Hours / 3,000 for 24 Hours</div>
          </div>
          <div className="rhave">
            <div className="b">
              <img className="bed" src="style/images/bed.svg" />
              <div>1 Bed, Side Table and Tv</div>
            </div>
            <div className="t">
              <img className="toilet" src="style/images/toilet.svg" />
              <div>1 Rest Room</div>
            </div>
            <div className="ac">
              <img className="air-con" src="style/images/air_con.svg" />
              <div>Fan/ Air-Conditioned</div>
            </div>
          </div>
          <div className="rinfo">
            <div>
              Perfect for 2 person to stay. This room offers a very cozy and
              comfortable have to live the moment because customer's satisfaction is
              always our goal.
            </div>
          </div>
          <div className="book">
            <a className="book-btn" href="">
              BOOK
            </a>
          </div>
        </div>
        <div className="room-box">
          <div className="image1">
            <img className="room-pic" src={family} />
          </div>
          <div className="rtype">
            <div className="rname">FAMILY ROOM</div>
            <div className="rprice">Day Tour-1,500 / Overnight- 2,000</div>
          </div>
          <div className="rhave">
            <div className="b">
              <img className="bed" src="style/images/bed.svg" />
              <div>2 Queensize Bed, Side Table and Tv</div>
            </div>
            <div className="t">
              <img className="toilet" src="style/images/toilet.svg" />
              <div>1 Rest Room</div>
            </div>
            <div className="ac">
              <img className="air-con" src="style/images/air_con.svg" />
              <div>Fan/ Air-Conditioned</div>
            </div>
          </div>
          <div className="rinfo">
            <div>
              Family is love, so we would like you to experience this wide and
              comfortable room for you and your loved ones that will make your stay
              memorable.
            </div>
          </div>
          <div className="book">
            <a className="book-btn" href="">
              BOOK
            </a>
          </div>
        </div>
        <div className="room-box">
          <div className="image1">
            <img className="room-pic" src={barkadahan} />
          </div>
          <div className="rtype">
            <div className="rname">BARKADAHAN ROOM</div>
            <div className="rprice">Day Tour-1,500 / Overnight- 2,000</div>
          </div>
          <div className="rhave">
            <div className="b">
              <img className="bed" src="style/images/bed.svg" />
              <div>1 Double Deck, 1 Queensize Bed, Side Table and Tv</div>
            </div>
            <div className="t">
              <img className="toilet" src="style/images/toilet.svg" />
              <div>1 Rest Room</div>
            </div>
            <div className="ac">
              <img className="air-con" src="style/images/air_con.svg" />
              <div>Fan/ Air-Conditioned</div>
            </div>
          </div>
          <div className="rinfo">
            <div>
              When there is fun, there are friends. To make your barkadahan more fun,
              you can invite more because we have provided a wider space for all.
            </div>
          </div>
          <div className="book">
            <a className="book-btn" href="">
              BOOK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
