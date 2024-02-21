import { UserPlus, type LucideIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FriendRequestsSidebarOption } from "@/components/friend-requests-sidebar-option";
import { SignOutButton } from "@/components/sign-out-button";
import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";

interface SidebarOption {
  id: number;
  name: string;
  href: string;
  Icon: LucideIcon;
}

const sidebarOptions: SidebarOption[] = [
  {
    id: 1,
    name: "Add friend",
    href: "/dashboard/add",
    Icon: UserPlus,
  },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return notFound();
  }

  const unseenRequestCount = (
    (await fetchRedis(
      "smembers",
      `user:${session.user.id}:incoming_friend_requests`
    )) as User[]
  ).length;

  return (
    <div className="w-full flex h-screen">
      <div className="flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <Link href="/dashboard" className="flex h-16 shrink-0 items-center">
          <Image
            src="/icon.svg"
            alt="Logo"
            width="32"
            height="32"
            className="w-auto text-indigo-600"
          />
        </Link>
        <div className="text-xs font-semibold leading-6 text-gray-400">
          Your chats
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li></li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">
                Overview
              </div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {sidebarOptions.map((option) => (
                  <li key={option.id}>
                    <Link
                      href={option.href}
                      className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    >
                      <span className="text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white">
                        <option.Icon className="h-4 w-4" />
                      </span>
                      <span className="truncate">{option.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="-mx-2">
              <FriendRequestsSidebarOption
                sessionId={session.user.id}
                initialUnseenRequestCount={unseenRequestCount}
              />
            </li>
            <li className="-mx-6 mt-auto flex items-center">
              <div className="flex flex-1 items-center justify-center gap-x-4 px-4 py-3 text-sm font-semibold leading-6 text-gray-900">
                <div className="relative h-8 w-8">
                  <Image
                    src={session.user.image || ""}
                    fill
                    referrerPolicy="no-referrer"
                    className="rounded-full"
                    alt="Your prfile picture"
                  />
                </div>
                <span className="sr-only">Your profile</span>
                <div className="flex flex-col flex-grow">
                  <span className="max-w-[175px] truncate" aria-hidden="true">
                    {session.user.name}
                  </span>
                  <span
                    className="text-xs text-zinc-400 max-w-[175px] truncate"
                    aria-hidden="true"
                  >
                    {session.user.email}
                  </span>
                </div>
                <SignOutButton className="h-full aspect-square" />
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
