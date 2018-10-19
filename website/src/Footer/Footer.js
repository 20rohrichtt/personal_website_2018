import React from "react";
import { github, reddit } from "./../Images";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <a href="https://github.com/20rohrichtt">
          <img
            className="socialMediaIcon"
            src={github}
            alt=""
            style={{ width: "30px", height: "30px" }}
          />
        </a>
        <a href="https://www.reddit.com/user/tmant1234/">
          <img
            className="socialMediaIcon"
            src={reddit}
            alt=""
            style={{ width: "30px", height: "30px" }}
          />
        </a>
        <div className="footerText">Contact Me: taylorrohrich@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
