import Users from "@/components/Users";
import React from "react";

const page = () => {
  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold text-center pt-2">Random Users</h1>
      <div className="p-4 mt-4 w-full">
        <Users />
      </div>
    </div>
  );
};

export default page;
