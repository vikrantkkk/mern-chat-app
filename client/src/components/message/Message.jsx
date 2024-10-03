import React from "react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ messages }) => {
  const { authUser } = useAuthContext();
  const fromMe = messages.sender === authUser?.data?._id;
  const formattedTime = extractTime(messages.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const { selectedConversation } = useConversation();
  const profilePic = fromMe
    ? authUser?.data?.profilePic
    : selectedConversation?.profilePic;

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className="chat-bubble">{messages?.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
