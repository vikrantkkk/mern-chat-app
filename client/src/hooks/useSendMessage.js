import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { message, addMessage, selectedConversation } = useConversation();
  console.log("🚀 ~ useSendMessage ~ message:", message)

  const sendMessage = async (chatInput) => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/v1/messages/sendmessage/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: chatInput }),
        }
      );
      const data = await response.json();
      console.log("🚀 ~ sendMessage ~ data:", data)
      if (data.error) {
        throw new Error(data.error);
      }
      addMessage({
        ...message,
        data: [...message.data, data.data],
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};

export default useSendMessage;
