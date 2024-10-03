import React from "react";
import Conversations from "./Conversations";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  return (
    <div className=" w-[25%] border-r">
      <SearchBar />
      <Conversations />
      <div className="p-4">
        <button className="btn">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
