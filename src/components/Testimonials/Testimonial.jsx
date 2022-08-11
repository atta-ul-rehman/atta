import React, { useContext, useEffect } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic3 from "../../img/women.png";
import profilePic4 from "../../img/man.png";
import { themeContext } from "../../Context";
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonial = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: profilePic3,
      review:
        "He built the best website I have ever seen !! He is responsive, passionate about his work, delivers on time. He gives information and updates over his work.Looking forward to work with him again and wish him all the best for his future!! Choose This Guy !!!",
    },
    {
      img: profilePic4,
      review:
        "Atta was highly recommended so my expectations were already high. I guess I only have one thing to say. He is spectacularly good. Excellent communication and he shows you why great creative people make the difference. Don't hesitate if you have the chance to work with him.",
    },
    {
      img: profilePic3,
      review:
        "Seller has good communication and work ethic. I would recommend his services to others and will continue to work with seller on expanding my website features. Thank you again",
    },
    {
      img: profilePic4,
      review:
        "It is with much enthusiasm that I recommend this guy He has designed very creative and polished mobile designs for me, and he understood it exactly how I imagined it and executed it flawlessly and quickly. Highly recommend!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur tt-blur1"
          style={{ background: !darkMode ? "var(--purple)" : "white" }}
        ></div>
        <div
          className="blur tt-blur2"
          style={{ background: !darkMode ? "skyblue" : "white" }}
        ></div>
      </div>

      <Swiper
        className="t-swiper"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        // install Swiper modules
        modules={[Pagination]}
        autoplay={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="testimonial "
                style={{ background: darkMode && "white" }}
              >
                <img src={client.img} alt="" />
                <span style={{}}>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
