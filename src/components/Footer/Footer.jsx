import React from "react";
import "./Footer.css";
// import Wave from "../../img/wave.png";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook-f";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkin from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import Callus from "@iconscout/react-unicons/icons/uil-fast-mail";
import { openLink } from "../../helper/openLink";
const Footer = () => {
  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5c32c"
          fillOpacity="1"
          d="M0,64L120,85.3C240,107,480,149,720,138.7C960,128,1200,64,1320,32L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      <div className="f-content">
        <div className="f-icons">
          <Insta className="social-icon" />
          <Facebook className="social-icon" />
          <Gitub
            className="social-icon"
            onClick={() => openLink("https://github.com/atta-ul-rehman/")}
          />
          <Linkin
            className="social-icon"
            onClick={() =>
              openLink("www.linkedin.com/in/atta-ul-rehman-b854851a4")
            }
          />
          <Callus
            className="social-icon"
            onClick={() =>
              openLink(
                "mailto:rehmanatta866@example.com?subject=Subject&body=Body%20goes%20here"
              )
            }
          />
        </div>
        {/* <div className="Address">
          <span style={{ paddingTop: 13, paddingBottom: 5 }}>Residense</span>
          <p style={{ fontWeight: 300, color: "gray" }}>
            Eden Value Homes, Multan Road, Lahore
            <br />
            22 House Main Street
            <br />
            Opposite to Honda Showroom
          </p>
          <div className="cntct">Contact Now</div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
