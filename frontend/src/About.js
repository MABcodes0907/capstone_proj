import pic1 from "./images/about-1.jpg";
import pic2 from "./images/about-2.jpg";
import pic3 from "./images/about-3.jpg";
import pic4 from "./images/about-4.jpg";


function About() {
  return (
    <div className="content">
        <div className="nav-text">
            <svg width={10} height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width={10} height="100%" x="o" y={0} rx={0} ry={0} fill="aqua" />
            </svg>
            <div className="text1">ABOUT</div>
        </div>
        <div className="about-grid">
            <div className="nav-info">
            <p className="p1">
                Welcome to <br /> MEGAY BEACH RESORT
            </p>
            <p className="p2">
                From the refreshing view of nature, Megay Beach Resort welcomes you to a
                place where peace and serenity exist. A place where all you have to do
                is sit back, relax and enjoy the day.
            </p>
            </div>
            <div className="about-image">
            <img className="about-pic1" src={pic1} />
            <img className="about-pic2" src={pic2} />
            <img className="about-pic3" src={pic3} />
            <img className="about-pic4" src={pic4} />
            </div>
        </div>
        <div className="resort-policies">
            <div className="resort-policies-title">RESORT POLICIES</div>
            <div className="resort-policies-content">
            A. GENERAL TERMS AND CONDITIONS
            </div>
            <div>
            1. Smoking is strictly prohibited inside the rooms and swimming pool area.
            Smoking shall only be allowed at designated smoking areas. <br />
            2. The guests shall observe and heed all the safety precautions and
            warning signs issued by the management within the resort. <br />
            3. The Resort, Its officers and employees shall not be held liable for any
            injury, damages, or loss incurred by any reason by consumption of the food
            and or drinks brought into the resort. <br />
            4. The guests are requested to use the resort equipment and facilities
            with proper care. Any damage caused due to the fault or negligence of the
            guests shall be charge to their account. <br />
            5. The Resort has parking spaces allocated to its guests. However, the
            Resort assumes no liability for any loss and or damages to the vehicles
            parked therein and to the valuables left inside the vehicles. <br />
            6. Resort guests are obliged to make an effort to keep the surroundings
            clean. Guests should refrain from throwing rubbish anywhere other than
            strategically located trash bins. <br />
            7. Pets are strictly prohibited inside the hotel rooms. <br />
            8. Resort guests are expected to behave in a manner not disruptive to the
            peace of the resort and the stay of others guests. The resort management
            reserve to ask misbehaving guest/s to leave the premises of the Resort.{" "}
            <br />
            9. In case of emergencies requiring medical attention, resort guests may
            requests assistance from the Resort to bring the ailing guest to a
            hospital. Any cost incurred there to shall be charge for the account of
            the guest.
            </div>
            <div className="resort-policies-content">
            B.BOOKING ARRANGEMENTS AND RATES
            </div>
            <div>
            1. Reservations maybe done through Facebook messenger, onsite, email or
            cellphone. <br />
            2. A deposit equivalent at least thirty to fifty percent (30% - 50%) of
            the total amount of the reservation shall be required to confirm the
            booking. The remaining balance thereof shall be paid at the front desk of
            the resort upon arrival and check-in. <br />
            3. All room rates and day trip rates are subject to adjustment without
            prior notice. <br />
            </div>
            <div className="resort-policies-content">C. CANCELLATION AND NO-SHOWS</div>
            <div>
            1.Once a reservation has been confirmed, guests are only allowed to modify
            or cancel at least 5 days prior to the date of arrival for overnight
            accommodation to avoid incurring penalty amounting to 30% of the total
            booking costs. <br />
            2. In the event that the guests failed to show up on the arrival date
            (No-Show), all payments made for booking shall be forfeited. <br />
            3. Re-booking is subject to availability.
            </div>
            <div className="resort-policies-content">
            -Megay Beach Resort Management-
            </div>
        </div>
    </div>

  );
}

export default About;
