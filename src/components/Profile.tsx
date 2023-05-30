"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FC } from "react";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  const { data, status } = useSession();
  return (
    <div className="flex w-fit items-center justify-center gap-2 rounded-lg bg-white p-2 dark:bg-gray-800 dark:text-white">
      <Image
        alt="foto profile"
        src={data?.user.image || ""}
        width={100}
        height={100}
        className="rounded-full"
      />
      <h1>{data?.user.name}</h1>
    </div>
  );
};

export default Profile;
