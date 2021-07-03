import React from "react";
import "./InfoBar.css";
import closeIcon from "../../Icons/closeIcon.png";
import onlineIcon from "../../Icons/onlineIcon.png";

const InfoBar = ({room}) => (
   <div className={"infoBar"}>
      <div className={"leftInnerContainer"}>
         <img src={onlineIcon} alt="onlineIcon" className="onlineIcon"/>
         <h3>{room}</h3>
      </div>
      <div className={"rightInnerContainer"}>
         <a href="/">
            <img src={closeIcon} alt="closeIcon" className="closeIcon"/>
         </a>
      </div>
   </div>
);
export default InfoBar;
