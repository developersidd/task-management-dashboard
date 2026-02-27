import React from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen w-full bg-donezo-bg text-donezo-text overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Header onMenuClick={toggleSidebar} />
    </div>
  );
};

export default Dashboard;
