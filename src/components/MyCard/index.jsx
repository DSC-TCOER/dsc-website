import React from "react";
import "./styles.css";

//const Img = "./images/DSC Team/Zahra.jpg";
const MyCard = ({ name, designation, social, url }) => {
  return (
    <div className="m-card">
      <a href={social} target={"tanmay"} className="m-card-img">
        <img src={url} alt="" />
        <div className="m-card-content">
          <i className="fab fa-linkedin"></i>
        </div>
      </a>
      <p className="m-card-name">{name}</p>
      <p className="m-card-designation">{designation}</p>
    </div>
  );
};

export default MyCard;
