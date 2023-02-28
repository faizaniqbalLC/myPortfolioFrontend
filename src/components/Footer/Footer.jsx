import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is <b>Muhammad</b> Fizan Iqbal. I am a Full-Stack
          Developer and a Youtube channel called <b> Muhammad Fizan Iqbal</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Muhammad-fizan-Iqbal" target="blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-fizan-iqbal/"
          target="blank">
          <BsLinkedin />
        </a>
        <a
          href="https://www.youtube.com/channel/UCZD6RlYALqCcXeLyJzjzn1w"
          target="blank">
          <BsYoutube />
        </a>
        <a href="https://twitter.com/Muhammad_fizan_" target="blank">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
