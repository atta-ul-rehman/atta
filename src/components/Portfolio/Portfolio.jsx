import React, { useContext, useEffect, useState } from "react";
import "./Portfolio.css";
import "swiper/css";
import musicapp from "../.././img/work1.png";
import musicapp2 from "../.././img/work2.png";
import rect from "../.././img/react.png";
import redx from "../.././img/redux.png";
import javascrpt from "../.././img/javascript.png";
import css from "../.././img/css.png";
import { themeContext } from "../../Context";
import AOS from "aos";
import "aos/dist/aos.css";
import { openLink } from "../../helper/openLink";
const Portfolio = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [ref, setref] = useState(0);

  const data = ["All", "UI/UX", "WordPress", "Mobile", "Web", "InfoGraphis"];
  const projects = [
    {
      title: "Food Delivery/Reviews app",
      desc: "This is food delivey and review with a lot of unique features chat Image moderation model integration and alot more",
      img: musicapp2,
      link: "https://github.com/atta-ul-rehman/fyp-frontend",
    },
    {
      title: "Ecommerce app",
      desc: "If you ever lost in a forest and needed a new animal friend to help you navigate your way out, take this quiz to find out who it would be.",
      img: musicapp,
      link: "https://github.com/atta-ul-rehman/next-app",
    },
    {
      title: "Random Css Effects",
      desc: "If you ever lost in a forest and needed a new animal friend to help you navigate your way out, take this quiz to find out who it would be.",
      img: musicapp2,
      link: "https://github.com/atta-ul-rehman/next-app",
    },
    {
      title: "Music app",
      desc: "If you ever lost in a forest and needed a new animal friend to help you navigate your way out, take this quiz to find out who it would be.",
      img: musicapp,
      link: "https://github.com/atta-ul-rehman/music-app",
    },
  ];
  const [prj, setprj] = useState(projects.slice(0, 2));
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  //const openLink = (url) => window.open(url, "_blank")?.focus();
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <div className="div1">
        <span className="span1" style={{ color: darkMode ? "white" : "" }}>
          Work{" "}
        </span>
        <span className="span2" style={{ marginBottom: 50 }}>
          A Selection Of Stuff I've Built
        </span>
      </div>
      {/* slider */}
      <div className="techs1">
        {data.map((item, index) => (
          <button
            key={index}
            style={{
              background:
                ref === index &&
                "linear-gradient(180deg, #fdc50f 56.71%, #fb982f 69.36%)",
              boxShadow: "inset 0 0 0 4px var(--colour-white)",
              border: "solid 1px var(--button-border)",
              transition: "all 0.3s",
              color: ref === index ? "white" : darkMode && "var(--orange)",
              // gridColumnStart: index === 5 && 2,
              // gridColumnEnd: index === 5 && 3,
              // marginLeft: (index === 3 || index === 4) && 50,
              // paddingRight:
              //   index === 3 ? 55 : index === 4 ? 70 : index === 5 && 80,
              // overflowWrap: "normal",
            }}
            className={`button2`}
            onClick={() => {
              setref(index);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      {prj.map((item, index) => (
        <div
          className="works2-data"
          data-content={item.desc}
          data-aos="zoom-in"
          key={index}
          style={{
            position: "relative",
            marginBottom: "5rem",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
          }}
        >
          <div
            className="boxed"
            style={{
              width: 200,
              height: 200,
              backgroundColor:
                index % 2 === 0 ? "rgb(27,116,228)" : "rgb(245,195,44)",
              zIndex: -1,
              position: "absolute",
              top: -35,
              marginLeft: 20,
            }}
          >
            {" "}
          </div>
          <div className="img1-div">
            <img className="img1" src={item.img} alt="" />
          </div>
          <div
            className="cntet"
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: index % 2 === 0 ? 0 : 120,
              marginLeft: index % 2 === 0 ? 0 : 30,
            }}
          >
            {/* <div className="blur2 t-blur2" style={{ background:index%2===0?"rgb(195, 212, 250)":'rgb(242, 107, 131)' }}></div> */}

            <span
              className="worktitle"
              style={{ fontWeight: 700, color: darkMode && "white" }}
            >
              {item.title}
            </span>
            <p className="workPara" style={{ paddingTop: 10 }}>
              {item.desc}
            </p>

            <div className="techs">
              <img className="img2" src={rect} alt="react" />
              <img className="img2" src={redx} alt="redex" />
              <img className="img2" src={javascrpt} alt="javascript" />
              <img className="img2" src={css} alt="css3" />
            </div>
            <div style={{ paddingTop: 20 }}>
              <button
                className="button b-github"
                onClick={() => openLink(item.link)}
              >
                View On Github
              </button>
            </div>
          </div>
        </div>
      ))}
      <span
        className="load-more"
        style={{
          margin: "auto",
          cursor: prj.length === projects.length && "not-allowed",
          color: "black",
          fontSize: "large",
        }}
        onClick={() => setprj(projects.slice(0, prj.length + 2))}
        disabled={prj.length === projects.length}
      >
        {prj.length !== projects.length ? "Load More..." : "No More projects"}
      </span>

      <div
        className="boxed2"
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          zIndex: -1,
          position: "absolute",
          top: -35,
          marginLeft: 20,
        }}
      >
        {" "}
      </div>
    </div>
  );
};

export default Portfolio;
