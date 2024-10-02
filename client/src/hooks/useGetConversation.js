import { useEffect, useState } from "react";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const getConversation = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/v1/users/getsidebaruser");
        const data = await response.json();
        setConversations(data);
        if (data.error) {
            throw new Error(data.error);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);
  return { loading, conversations };
};

export default useGetConversations;
