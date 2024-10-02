import React from "react";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, Index }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out ${
          isSelected ? "bg-sky-500" : ""
        }`}
      >
        <div className="">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={conversation?.profilePic}
            alt="profile pic"
          />
        </div>

        <div className="flex-1 ml-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-medium text-lg">
              {conversation?.name || "Unknown User"}
            </span>
            <span className="text-sm text-gray-500">
              {conversation?.lastMessageTime || "Now"}
            </span>
          </div>

          <div className="text-gray-600 text-sm truncate">
            {conversation?.lastMessage || "No messages yet"}
          </div>
        </div>
      </div>
      {Index !== conversation.length - 1 && (
        <div className=" border-b w-full" />
      )}
    </>
  );
};

export default Conversation;
