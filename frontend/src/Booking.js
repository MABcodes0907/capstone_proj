import small from "./images/small.jpg";
import big from "./images/big.jpg";
import tent from "./images/room-3.jpg";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

function Booking() {
  const [cottage, setCottage] = useState("");
	const [cottagetype, setCottageType] = useState("");
	const [payment, setPayment] = useState("");
	const [date, setDate] = useState("");
  const {user} = useContext(UserContext);


	function bookUser(ev) {
		ev.preventDefault();
		axios.post('/cottage/booking', {
			cottage,
			cottagetype,
			payment,
			date,
      user,
		})
	}

  return (
    <div className="booking">
      <div className="book-detail">
          <div className="book-title">
              Cottage details
          </div>
          <div>
              <img className="book-pic" src={small} />
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
      </div>
      <div className="user-info">
          <div className="user-title">
            Booking Details
          </div>
          <div className="form-info">
              <form className="form" onSubmit={bookUser}>
                <label for="cottage-type">Cottage:</label>
                <input type="text" className="booking-input" placeholder="Cottage Name"
                  value={cottage}
                  onChange={ev => setCottage(ev.target.value)}
                />
                <label for="cottage-type">Cottage Type:</label>
                <select name="cottage" className="booking-input"
                  value={cottagetype}
                  onChange={ev => setCottageType(ev.target.value)}
                >
                  <option value="Day Tour">Day Tour</option>
                  <option value="Overnight">Overnight</option>
                  <option value="24Hours">24Hours</option>
                </select>
                <label for="payment">Payment Method:</label>
                <select name="payment" className="booking-input"
                  value={payment}
                  onChange={ev => setPayment(ev.target.value)}
                >
                  <option value="GCash">GCash</option>
                  <option value="BDO">BDO</option>
                </select>
                <label for="date">Reserve Date:</label>
                <input type="date" className="booking-input"
                  value={date}
                  onChange={ev => setDate(ev.target.value)}
                />
                <button className="book-bt" type="submit" aria-label="submit">
                  BOOK NOW
                </button>
                  
              </form>
          </div>
      </div>
    </div>
  );
}

export default Booking;
