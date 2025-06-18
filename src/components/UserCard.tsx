import React, { memo } from "react";
import Image from "next/image";
import { IUser } from "@/types/users";

const UserCard = ({ user }: { user: IUser }) => {
  const { name, picture } = user;
  const fullName = `${name.title} ${name.first} ${name.last}`;
  return (
    <div className="w-full p-4 bg-zinc-100 flex flex-col items-center justify-center text-center rounded-md">
      <Image
        className="bg-zinc-200 rounded-full"
        src={picture.large}
        alt={name.first}
        width={100}
        height={100}
      />
      <div className="mt-4">
        <p>Hi, My name is</p>
        <h1 className="text-2xl font-bold">{fullName}</h1>
      </div>
    </div>
  );
};

export default memo(UserCard);
