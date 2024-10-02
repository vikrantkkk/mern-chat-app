import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/message/MessageContainer";

const Home = () => {
  return (
    <div className="flex backdrop-blur-lg bg-white/30 shadow-xl min-h-screen min-w-96">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
