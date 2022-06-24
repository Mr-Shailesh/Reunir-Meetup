import React from "react";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import ChatBot from "../../ChatBot/ChatBot";
const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Layout;
