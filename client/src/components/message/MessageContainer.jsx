import React, { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  const { selectedConversation , setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex-1">
      <div>
        {!selectedConversation ? (
          <NotSelectedComp />
        ) : (
          <>
            <div className="p-6 shadow-md">To:{selectedConversation?.name}</div>
            <Messages />
            <MessageInput />
          </>
        )}
      </div>
    </div>
  );
};

export default MessageContainer;

const NotSelectedComp = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="px-4 text-center sm:text-lg md:text-4xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser?.data?.name} ❄</p>
        <p>Select a chat to start messaging</p>
        {/* <TiMessages className='text-3xl md:text-6xl text-center' /> */}
      </div>
    </div>
  );
};
