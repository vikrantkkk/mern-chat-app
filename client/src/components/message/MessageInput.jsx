import React, { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [chatInput, setChatInput] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput) return;
    await sendMessage(chatInput);
    setChatInput("");
  };

  return (
    <form onSubmit={hanldeSubmit} className="px-4 my-3">
      <div className="w-full relative">
        <input
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          className="block w-full p-2 rounded-2xl"
          
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
