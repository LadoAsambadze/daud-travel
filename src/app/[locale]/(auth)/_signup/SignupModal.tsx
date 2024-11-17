"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Separator } from "@/src/components/ui/separator";
import Image from "next/image";
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import img from "@img/images/Batumi.jpg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignUpModal() {
  const [open, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const status = searchParams.get("signup");

  const modalCloseClickHandler = () => {
    if (status === "true") {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete("signup");
      router.replace(`${pathname}?${newSearchParams.toString()}`, {
        scroll: false,
      });
      setIsOpen(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      modalCloseClickHandler();
    }
    setIsOpen(open);
  };

  useEffect(() => {
    if (status === "true") {
      setIsOpen(true);
    }
  }, [status]);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="flex h-[600px] max-w-4xl p-0 border-none rounded-md overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Sign Up</DialogTitle>
        </DialogHeader>

        <div className="relative hidden w-1/2 md:block">
          <Image
            src={img}
            alt="Sign up background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-8 left-8 right-8">
            <h2 className="text-3xl font-bold text-white">
              Join Our Community
            </h2>
            <p className="mt-2 text-white/80">
              Discover amazing features and connect with others
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between bg-white p-8 md:w-1/2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Create an account
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Sign up to get started with all our features
            </p>
            <Button
              className="mt-6 flex w-full items-center justify-center gap-3 bg-white text-gray-700 shadow-md hover:bg-gray-50"
              variant="outline"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>

            <div className="relative my-6">
              <Separator />
              <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                Or continue with
              </span>
            </div>

            {/* Email Sign Up Form */}
            <form className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-11"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="h-11"
                />
                <p className="text-xs text-gray-500">
                  Must be at least 8 characters long
                </p>
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="h-11"
                />
              </div>
            </form>
          </div>

          {/* Sign Up Button */}
          <div className="mt-6">
            <Button className="h-11 w-full   text-white ">
              <Mail className="mr-2 h-4 w-4" />
              Sign up with Email
            </Button>
            <p className="mt-4 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <button className="font-medium text-gray-900 hover:underline">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
