import { ChevronRight } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getFriendsByUserId } from "@/data/get-friends-by-user-id";
import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import { chatHrefContructor } from "@/lib/utils";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return notFound();
  }

  const friends = await getFriendsByUserId(session.user.id);

  const friendsWithLastMessage = await Promise.all(
    friends.map(async (friend) => {
      const [lastMessageRaw] = (await fetchRedis(
        "zrange",
        `chat:${chatHrefContructor(session.user.id, friend.id)}:messages`,
        -1,
        -1
      )) as string[];

      const lastMessage = JSON.parse(lastMessageRaw) as Message;

      return { ...friend, lastMessage };
    })
  );

  return (
    <div>
      <h1 className="font-bold text-5xl mb-8">Recent chats</h1>
      {friendsWithLastMessage.length === 0 ? (
        <p className="text-sm text-zinc-500">Nothing to show here...</p>
      ) : (
        friendsWithLastMessage.map((friend) => (
          <div
            className="relative bg-zinc-50 border-zinc-200 p-0 rounded-md my-2"
            key={friend.id}
          >
            <Link
              href={`/dashboard/chat/${chatHrefContructor(
                session.user.id,
                friend.id
              )}`}
              className="flex items-center py-2 ml-4"
            >
              <div className="absolute right-4 inset-y-0 flex items-center">
                <ChevronRight className="h-7 w-7 text-zinc-400" />
              </div>
              <div className="sm:mr-4">
                <div className="relative h-7 w-7">
                  <Image
                    referrerPolicy="no-referrer"
                    className="rounded-full lr"
                    alt={`${friend.name} profile picture`}
                    src={friend.image}
                    fill
                  />
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold">{friend.name}</h4>
                <p className="mt-1 max-w-md truncate">
                  <span className="text-zinc-400">
                    {friend.lastMessage.senderId === session.user.id
                      ? "You: "
                      : ""}
                  </span>
                  {friend.lastMessage.text}
                </p>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default DashboardPage;
