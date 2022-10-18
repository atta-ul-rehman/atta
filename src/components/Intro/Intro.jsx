import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy2.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { openLink } from "../../helper/openLink";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <div className="i-floating-name">
            <span className="name-before">Atta ul Rehman</span>
            <span className="name-after">Atta ul Rehman</span>
          </div>
          <span style={{ color: darkMode && "white" }}>
            I’m a Full-Stack Developer located in Pakistan. I have a serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences .Apart form these I also try to make sure that app
            has high performance and responsiveness to requests from the
            back-end. I am Well-organised person, problem solver, independent
            employee with high attention to detail. Fan of MMA, outdoor
            activities, TV series and history. Interested in the
            entire frontend spectrum and working on ambitious projects with
            positive people.
          </span>
        </div>
        <Link className="hire-me-content" to="contact" smooth={true} spy={true}>
          <div className="i-button" data-text="Hire me">
            Hire me
          </div>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" onClick={() => openLink("https://github.com/atta-ul-rehman/")} />
          <img src={LinkedIn} alt="" onClick={() => openLink("https://linkedin.com/in/atta-ul-rehman-b854851a4")} />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div
        className="blur t-blur1"
        style={{ background: "rgb(195, 212, 250)" }}
      />
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "50%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv classn={"floatingDiv"} img={crown} text1={`Frontend-developer`} />
        </motion.div>
        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv
            classn={"floatingDiv"}
            img={thumbup}
            text1={`Backend-developer`}
          />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      </div>
    </div>
  );
};

export default Intro;
