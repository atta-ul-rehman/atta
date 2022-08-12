import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import map from "../../img/map2.png";
import mapmarker from "../../img/map-marker.png";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x1knoef",
        "template_44nii8s",
        form.current,
        "hVzRhXpjhxHiOqrF6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
        <span className="desc">
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </span>
        <form ref={form}>
          <input type="text" name="name" className="user" placeholder="Name" />
          <input
            type="email"
            name="email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          {!done && (
            <button className="button" onClick={sendEmail}>
              Send
            </button>
          )}
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "#ABF1FF94 " }}
          ></div>
        </form>
      </div>
      {/* right side form */}
      <div className="c-right">
        <div className="map-wrapper">
          <img src={map} alt="" />
        </div>
        <img className="map-marker" src={mapmarker} alt="" />
        <div className="Address">
          <span style={{ paddingTop: 3, paddingBottom: 5 }}>
            Atta ul rehman
          </span>
          <p>
            Eden Value Homes, Multan Road, Lahore
            <br />
            22 House Main Street
          </p>
          <span className="cntct">
            <p style={{ color: "var(--orange)" }}>@: </p>
            <p> rehmanatta866@gmail.com</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
