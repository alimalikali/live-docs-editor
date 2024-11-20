"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider, RoomProvider, ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { getClerkUsers, getDocumentUsers } from "@/lib/actions/user.actions";
import { useUser } from "@clerk/nextjs";

const Provider = ({ children }: { children: ReactNode}) => {

  const { user: clerkUser } = useUser();


  return (
    <LiveblocksProvider
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUsers({ userIds});

        return users;
      }}
      resolveMentionSuggestions={async ({ text, roomId }) => {
        const roomUsers = await getDocumentUsers({
          roomId,
          currentUser: clerkUser?.emailAddresses[0].emailAddress!,
          text,
        })

        return roomUsers;
      }}
    // publicApiKey={"pk_prod_y1Z2FAlt9U4qFAs-vez43RHkpE1LbY0YggaQM95DqmkB4Tyg51YN7osogOYhV7JS"}
    >
      <ClientSideSuspense fallback={<Loader />}>
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  );
}
export default Provider