import React, { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchBar = () => {
  const [inputValue, setInputvalue] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    if (inputValue.length < 3) {
      return toast.error("Please enter at least 3 characters");
    }
    const conversation = conversations?.data?.find((c) =>
      c.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log("🚀 ~ handleSubmit ~ conversation:", conversation)
    if (conversation) {
      setSelectedConversation(conversation);
      setInputvalue("");
    } else toast.error("No such user found!");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 flex items-center justify-center"
    >
      <input
        value={inputValue}
        onChange={(e) => setInputvalue(e.target.value)}
        placeholder="search..."
        className="p-2 rounded-md w-full"
      />
      <button
        type="submit"
        className="p-2 rounded-md bg-blue-500 text-white ml-2"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
