"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Menu, UserPlus, X } from "lucide-react";
import { type Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

import { Button } from "@/components/button";
import { FriendRequestsSidebarOptions } from "@/components/friend-requests-sidebar-options";
import { SidebarChatList } from "@/components/sidebar-chat-list";
import { SignOutButton } from "@/components/sign-out-button";

interface MobileChatLayoutProps {
  friends: User[];
  session: Session;
  unseenRequestCount: number;
}

export const MobileChatLayout = ({
  friends,
  session,
  unseenRequestCount,
}: MobileChatLayoutProps) => {
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="fixed bg-zinc-50 border-b border-zinc-200 top-0 inset-x-0 py-2 px-4">
      <div className="w-full flex justify-between items-center">
        <Link href="/dashboard">
          <Image
            src="/icon.svg"
            alt="Logo"
            width="24"
            height="24"
            className="w-auto text-indigo-600"
          />
        </Link>
        <Button onClick={() => setOpen(true)} variant="ghost">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute right-0 top-0 -mr-8 flex pl-2 pt-4 sm:-mr-10 sm:pl-4">
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Dashboard
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {friends.length > 0 && (
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your chats
                          </div>
                        )}
                        <nav className="flex flex-1 flex-col h-full">
                          <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                          >
                            <li>
                              <SidebarChatList
                                sessionId={session.user.id}
                                friends={friends}
                              />
                            </li>
                            <li>
                              <div className="text-xs font-semibold leading-6 text-gray-400">
                                Overview
                              </div>
                              <ul role="list" className="-mx-2 mt-2 space-y-1">
                                <li>
                                  <Link
                                    href="/dashboard/add"
                                    className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  >
                                    <span className="text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white">
                                      <UserPlus className="h-4 w-4" />
                                    </span>
                                    <span className="truncate">Add friend</span>
                                  </Link>
                                </li>
                                <li>
                                  <FriendRequestsSidebarOptions
                                    sessionId={session.user.id}
                                    initialUnseenRequestCount={
                                      unseenRequestCount
                                    }
                                  />
                                </li>
                              </ul>
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
                                  <span
                                    className="max-w-[175px] truncate"
                                    aria-hidden="true"
                                  >
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
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
