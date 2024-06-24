import { PropsWithChildren, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";
import { useAuth } from "./authProvider";
import { supabase } from "@/lib/supabase";
const client = StreamChat.getInstance(
  process.env.EXPO_PUBLIC_STREAM_API_KEY as string
);

export default function ChatProvider({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState<boolean>(false);
  const { profile } = useAuth();
  useEffect(() => {
    if (!profile) {
      return;
    }
    const connect = async () => {
      await client.connectUser(
        {
          id: profile.id,
          name: profile.full_name,
          image: supabase.storage.from("avatars").getPublicUrl(profile.avatar_url)?.data?.publicUrl,
        },
        client.devToken(profile.id)
      );
      setIsReady(true);
    };

    connect();
    return () => {
      if (isReady) {
        client.disconnectUser();
      }
      setIsReady(false);
    };
  }, [profile?.id]);

  if (!isReady) {
    return <ActivityIndicator />;
  }
  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  );
}
