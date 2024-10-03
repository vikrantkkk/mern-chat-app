import React from "react";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "./MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const { loading, message } = useGetMessage();

  return (
    <div className="flex-1 px-4">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && (!message || message.length === 0) && (
        <div className="text-center">No messages yet</div>
      )}

      {!loading &&
        Array.isArray(message?.data) &&
        message.data.length > 0 &&
        message.data.map((msg) => (
          <div key={msg._id}>
            <Message messages={msg} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
