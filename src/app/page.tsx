import { db } from "@/lib/db";
import { User } from "@prisma/client";

const getUsers = async () => {
  try {
    return await db.user.findMany();
  } catch (error) {
    throw error;
  }
};

export default async function Home() {
  const users: User[] = await getUsers();
  return <>{JSON.stringify(users)}</>;
}
