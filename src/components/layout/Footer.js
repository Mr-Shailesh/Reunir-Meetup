import React from "react";

import classes from "./Footer.module.css";

const Footer = () => (
  <footer className={classes.footer}>
    <p>
      &copy; 2022 Copyright:
      <u>
        <a
          href="https://github.com/Mr-Shailesh"
          rel="noreferrer"
          target="_blank"
        >
          Reunir-Club
        </a>
      </u>
    </p>
  </footer>
);

export default Footer;
