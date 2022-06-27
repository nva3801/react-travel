import React from "react";
import { Button } from "../../components/button";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-end gap-5 p-5 bg-white border-b">
      <Button to="/dashboard" className="p-5 header-button">
        Write new post
      </Button>
      <div className="w-[52px] h-[52px]">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
