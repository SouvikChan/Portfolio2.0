import React from "react";
import { Icon } from "@iconify/react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/chandra-souvik/"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/my_name_is_sc_/"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/SouvikChan"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <FaGithub/>
        </a>
      </div>
      <div>
        <a
          href="https://leetcode.com/SouvikChandra/"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <Icon icon="simple-icons:leetcode" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
