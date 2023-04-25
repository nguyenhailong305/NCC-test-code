import React from "react";
import "./homepage.css";
import ContentBox from "./common/boxContent";
import { TEXT_CONTENT_P } from "../utils/config";

const HomePage = () => {
  return (
    <div>
      <div className="sidebar">
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="header">
          <img src="https://i.postimg.cc/MZ7SX6tH/logo-NCC-1.png" alt="Logo" />
        </div>
        <div className="box">
          <h1>Lorem ipsum dolor sit asmet?</h1>
          <p>{TEXT_CONTENT_P}</p>
        </div>

        <div className="content__text">
          <ContentBox title="Lorem ipsum dolor sit amet" content={TEXT_CONTENT_P}  imgSrc="https://i.postimg.cc/kMLVK3VL/css-icon-1.png"/>
          <ContentBox title="Lorem ipsum dolor sit amet" content={TEXT_CONTENT_P} imgSrc="https://i.postimg.cc/28CsH3BW/html-icon-1.png"/>
          <ContentBox title="Lorem ipsum dolor sit amet" content={TEXT_CONTENT_P}  imgSrc="https://i.postimg.cc/dVpSK0D4/url-icon-1.png"/>
        </div>
       
      </div>

      <div className="footer">
            <span className="footer__content">Copyright © 2021</span>
        </div>
    </div>
  );
};

export default HomePage;
