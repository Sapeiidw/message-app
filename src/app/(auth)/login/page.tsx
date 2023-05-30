"use client";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      alert({
        title: "Error",
        message: "There was an error logging in with Google",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <button onClick={loginWithGoogle}>Login with google</button>
    </div>
  );
};

export default page;
