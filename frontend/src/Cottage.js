import small from "./images/small.jpg";
import big from "./images/big.jpg";
import tent from "./images/room-3.jpg";
import { Link } from 'react-router-dom';


function Cottage() {
  const book = () => {
  };

  return (
    <div className="cottage">
      <div className="cottage-grid">

        <div className="cottage-box">
          <div className="image1">
            <img className="cottage-pic" src={small} />
          </div>
          <div className="cinfo">
            <div className="t1">SMALL COTTAGE</div>
            <div className="t2">Day Tour-1,000 / Overnight- 1,500</div>
            <div className="t3">10 PAX</div>
          </div>
          <div className="time">
            <div className="day">
              Day tour
              <br />
              (8:00 am- 5:00 pm)
            </div>
            <div className="night">
              Overnight
              <br />
              (6:00 pm- 7:00 am)
            </div>
          </div>
          <div className="book">
            <Link to={'/cottage/booking'} onClick={book} className="book-btn">
              BOOK
            </Link>
          </div>
        </div>

        <div className="cottage-box">
          <div className="image1">
            <img className="cottage-pic" src={big} />
          </div>
          <div className="cinfo">
            <div className="t1">BIG COTTAGE</div>
            <div className="t2">Day Tour-1,000 / Overnight- 1,500</div>
            <div className="t3">20 PAX</div>
          </div>
          <div className="time">
            <div className="day">
              Day tour
              <br />
              (8:00 am- 5:00 pm)
            </div>
            <div className="night">
              Overnight
              <br />
              (6:00 pm- 7:00 am)
            </div>
          </div>
          <div className="book">
            <Link to={'/cottage/booking'} className="book-btn">
              BOOK
            </Link>
          </div>
        </div>

        <div className="cottage-box">
          <div className="image1">
            <img className="cottage-pic" src={tent} />
          </div>
          <div className="cinfo">
            <div className="t1">UMBRELLA/TENT</div>
            <div className="t2">Umbrella-500 / Tent-300</div>
            <div className="t3">U-5 PAX / T-3 PAX</div>
          </div>
          <div className="time">
            <div className="day">
              Day tour
              <br />
              (8:00 am- 5:00 pm)
            </div>
            <div className="night">
              Overnight
              <br />
              (6:00 pm- 7:00 am)
            </div>
          </div>
          <div className="book">
            <Link to={'/cottage/booking'} className="book-btn">
              BOOK
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Cottage;
