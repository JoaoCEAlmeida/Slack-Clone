import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { ChatInputContainer } from "./styles";
import db, { auth } from "../../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [value, setValue] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault(); //prevent page refresh
    if (!channelId) return false;

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setValue("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
