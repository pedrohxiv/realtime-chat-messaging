"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

import { Button } from "@/components/button";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      await signIn("google");
    } catch (error) {
      toast.error("Something went wrong with your login.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            <Image src="/logo.svg" alt="Logo" width="180" height="180" />
            <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <Button
            variant="indigo"
            isLoading={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full"
            onClick={onClick}
          >
            {!isLoading && <FcGoogle className="mr-2 h-5 w-5" />}
            Login with Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
