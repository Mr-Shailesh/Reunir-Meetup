import React, { useState } from "react";
import SimpleForm from "./SimpleForm";
import "./ChatBot.css";

const ChatBot = (props) => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <>
      <div className="bot">
        <div style={{ display: showChat ? "" : "none" }}>
          <SimpleForm />
        </div>
        <div>
          {!showChat ? (
            <button className="btn" onClick={() => startChat()}>
              Chat
            </button>
          ) : (
            <button className="btn" onClick={() => hideChat()}>
              Hide
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatBot;
