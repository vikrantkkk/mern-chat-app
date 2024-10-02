import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { message, addMessage, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `api/v1/messages/getmessage/${selectedConversation._id}`
        );
        const data = await res.json();
        addMessage(data);
        if (data.error) throw new Error(data.error);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, addMessage]);

  return { message, loading };
};
export default useGetMessage;
