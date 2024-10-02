import React from "react";
import useGetMessage from "../../hooks/useGetMessage";

const Messages = () => {
  const { messages } = useGetMessage();
  return <div className="flex-1 px-4">he</div>;
};

export default Messages;
