import { getServerSession } from "next-auth";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ChatInput } from "@/components/chat-input";
import { Messages } from "@/components/messages";
import { getChatMessages } from "@/data/get-chat-messages";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

interface ChatIdPageProps {
  params: {
    chatId: string;
  };
}

const ChatIdPage = async ({ params }: ChatIdPageProps) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return notFound();
  }

  const [userId1, userId2] = params.chatId.split("--");

  if (session.user.id !== userId1 && session.user.id !== userId2) {
    return notFound();
  }

  const chatPartnerId = session.user.id === userId1 ? userId2 : userId1;
  const chatPartner = (await db.get(`user:${chatPartnerId}`)) as User;

  const initialMessages = await getChatMessages(params.chatId);

  return (
    <div className="flex-1 justify-between flex flex-col h-full max-h-[calc(100vh-6rem)]">
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div className="relative flex items-center space-x-4 ml-2">
          <div className="relative">
            <div className="relative w-8 sm:w-12 h-8 sm:h-12">
              <Image
                fill
                referrerPolicy="no-referrer"
                src={chatPartner.image}
                alt={`${chatPartner.name} profile picture`}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-xl flex items-center">
              <span className="text-gray-700 mr-3 font-semibold">
                {chatPartner.name}
              </span>
            </div>
            <span className="text-sm text-gray-600">{chatPartner.email}</span>
          </div>
        </div>
      </div>
      <Messages
        initialMessages={initialMessages}
        sessionId={session.user.id}
        chatPartner={chatPartner}
        sessionImg={session.user.image}
      />
      <ChatInput chatPartner={chatPartner} chatId={params.chatId} />
    </div>
  );
};

export default ChatIdPage;
