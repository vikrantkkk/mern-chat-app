import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, Index }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const userId = useSocketContext();
  console.log("🚀 ~ Conversation ~ userId:", userId)

  return (
    <>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out ${
          isSelected ? "bg-sky-500" : ""
        }`}
      >
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src={conversation?.profilePic} alt="profile pic" />
          </div>
        </div>

        <div className="flex-1 ml-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-medium text-lg">
              {conversation?.name || "Unknown User"}
            </span>
          </div>
        </div>
      </div>
      {Index !== conversation.length - 1 && <div className=" border w-full" />}
    </>
  );
};

export default Conversation;
