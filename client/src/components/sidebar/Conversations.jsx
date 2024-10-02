import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <>
      <div>
        {conversations?.data?.map((item, index) => (
          <Conversation
            key={item._id}
            conversation={item}
            lastIndex={index}
          />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </>
  );
};

export default Conversations;
