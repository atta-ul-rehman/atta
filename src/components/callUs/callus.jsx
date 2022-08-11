import React from "react";
import "./callus.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const Callus = () => {
  return (
    <div className="callus">
      <div className="callus1">
        <div className="callus-div1">
          <FaMapMarkerAlt className="icon" color="#fb982f" />
          <span style={{ paddingTop: 13, paddingBottom: 5 }}>Main Office</span>
          <p style={{ fontWeight: 300, color: "gray" }}>
            Eden Value Homes, Lahore
            <br />
            22 House Main Street
          </p>
        </div>
      </div>
      <div className="callus2">
        <div className="callus-div2">
          <FaPhoneAlt className="icon" color="#fb982f" />
          <span style={{ paddingTop: 13, paddingBottom: 5 }}>Call</span>
          <p style={{ fontWeight: 300, color: "gray" }}>+92 355 4660755</p>
        </div>
      </div>
      <div className="callus3">
        <div className="callus-div3">
          <FaEnvelope className="icon" color="#fb982f" />
          <span style={{ paddingTop: 13, paddingBottom: 5 }}>Email</span>
          <p style={{ fontWeight: 300, color: "gray" }}>
            rehmanatta866@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Callus;
