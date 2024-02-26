"use client";

import { Loader2, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/button";

interface SignOutButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SignOutButton = ({ ...props }: SignOutButtonProps) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);

  const onClick = async () => {
    try {
      setIsSigningOut(true);

      await signOut();
    } catch (error) {
      toast.error("There was a problem signing out");
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <Button {...props} variant="ghost" onClick={onClick}>
      {isSigningOut ? (
        <Loader2 className="animate-spin h-4 w-4" />
      ) : (
        <LogOut className="h-4 w-4" />
      )}
    </Button>
  );
};
