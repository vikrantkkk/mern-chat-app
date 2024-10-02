import React from "react";
import Conversations from "./Conversations";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  return (
    <div className=" w-[25%] border-r">
      <SearchBar />
      <div className="border-b" />
      <Conversations />
      <div className="p-4">
        <button className="p-2 bg-red-600 rounded-md">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
