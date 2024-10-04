import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { message, addMessage } = useConversation();

  useEffect(() => {
    socket.on("getMessage", (newMessage) => {
      if (message?.data) {
        addMessage({
          ...message,
          data: [...message.data, newMessage], 
        });
      }
    });
    return () => {
      socket.off("getMessage");
    };
  }, [addMessage, socket, message]);
};

export default useListenMessage;
