import React from "react";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
// import { FaFacebookF } from "react-icons/fa";
import { FaCogs } from "react-icons/fa"
import { motion } from "framer-motion";

import "./Footer.scss";
const Footer = () => {
  const parentVariant = {
    view: {
      opacity: [0, 1],
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const childSocialVariant = {
    view: {
      y: [-300, 0],
      opacity: [0, 1],
      transition: {
        opacity: {
          duration: 0.6,
        },
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  const childCopyVariant = {
    view: {
      y: [-100, 0],
      opacity: [0, 1],
      transition: {
        opacity: {
          duration: 0.6,
        },
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="app__flex app__footer">
      <motion.div
        className="app__footer-contacts app__flex"
        variants={parentVariant}
        whileInView="view"
      >
        <motion.div
          className="app__flex"
          variants={childSocialVariant}
          whileInView="view"
        >
          <a
            href="https://www.linkedin.com/in/chandra-souvik/"
            target="_blank"
            rel="noreferrer"
            className="app__flex"
          >
            <GrLinkedinOption />
          </a>
        </motion.div>
        {/* <motion.div
          className="app__flex"
          variants={childSocialVariant}
          whileInView="view"
        >
          <a
            href="https://www.facebook.com/sukanya.barat.7"
            target="_blank"
            rel="noreferrer"
            className="app__flex"
          >
            <FaFacebookF />
          </a>
        </motion.div> */}
        <motion.div
          className="app__flex"
          variants={childSocialVariant}
          whileInView="view"
        >
          <a
            href="https://www.instagram.com/my_name_is_sc_/"
            target="_blank"
            rel="noreferrer"
            className="app__flex"
          >
            <BsInstagram />
          </a>
        </motion.div>
        <motion.div
          className="app__flex"
          variants={childSocialVariant}
          whileInView="view"
        >
          <a
            href="https://souvikportfolio2.sanity.studio"
            target="_blank"
            rel="noreferrer"
            className="app__flex"
          >
            <FaCogs />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="app__footer-copyrights"
        variants={parentVariant}
        whileInView="view"
      >
        <motion.p
          className="p-text"
          variants={childCopyVariant}
          whileInView="view"
        >
          &copy; 2022 SOUVIK
        </motion.p>
        <motion.p
          className="p-text"
          variants={childCopyVariant}
          whileInView="view"
        >
          ALL RIGHTS RESERVED
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Footer;
