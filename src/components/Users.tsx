"use client";

import { IUser } from "@/types/users";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserCard from "./UserCard";
import ShimmerCards from "./Shimmer/ShimmerCards";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?inc=id,name,picture&page=${page}&results=20`
        );
        const { results } = await response.json();

        setUsers((prevUsers: IUser[]) => [...prevUsers, ...results]);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
      setPage((prevPage) => prevPage + 1);
    };
    fetchUserData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={users.length}
      next={fetchData}
      hasMore={true}
      loader={<ShimmerCards />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Users;
