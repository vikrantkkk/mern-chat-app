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
    if (conversation) {
      setSelectedConversation(conversation);
      setInputvalue("");
    } else toast.error("No such user found!");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 flex gap-2 items-center justify-center"
    >
      <input
        value={inputValue}
        onChange={(e) => setInputvalue(e.target.value)}
        type="text" placeholder="Search..."
        className="input input-bordered w-full max-w-xs"
      />
      <button
        type="submit"
        className="btn btn-primary"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
