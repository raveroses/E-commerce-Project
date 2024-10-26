import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrevent = (e) => {
    e.preventDefault();

    emailjs
      .send("service_aedvl54", "template_qcskz1j", input, "OQLSnmkohBV2wVepn")
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );

    // Optionally clear the form
    setInput({ name: "", email: "", message: "" });
  };

  return (
    <div className="win">
      <Contacts
        handleOnChange={handleOnChange}
        handlePrevent={handlePrevent}
        input={input}
      />
    </div>
  );
}

function Contacts(handleOnChange, handlePrevent, input) {
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

        <form onSubmit={handlePrevent} className="forms">
          <div className="inputplace">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={input.name}
              onChange={handleOnChange}
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={input.email}
            />
            <input
              type="text"
              placeholder="Your Number"
              name="number"
              value={input.number}
            />
          </div>
          <div className="textarea">
            <textarea
              placeholder="Your Message"
              name="message"
              value={input.message}
            ></textarea>
            <div className="sendmessage">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
