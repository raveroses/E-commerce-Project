import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="win">
      <Contacts />
    </div>
  );
}

function Contacts() {
  return (
    <>
      <div className="homes">
        {" "}
        <p>
          <span>Home </span> / Contact
        </p>
      </div>

      <div className="contact-flex">
        <div className="textContent">
          <div className="text-flex">
            <div className="circle">
              {" "}
              <IoCallOutline style={{ fontSize: "20px" }} />
            </div>
            <h5>Call Us </h5>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
          <hr style={{ marginTop: "30px", marginBottom: "30px" }} />

          <div className="text-flex">
            <div className="circle">
              <FaRegEnvelope style={{ fontSize: "20px" }} />
            </div>
            <h5>Write to us</h5>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Support: support@exclusive.com</p>
        </div>

        <form action="" className="forms">
          <div className="inputplace">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Your Number" />
          </div>
          <div className="textarea">
            <textarea name="" id="" placeholder="Your Message"></textarea>
            <div className="sendmessage">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
