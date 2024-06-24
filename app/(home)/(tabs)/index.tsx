import { useAuth } from "@/components/providers/authProvider";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link, router, Stack } from "expo-router";
import { ChannelList } from "stream-chat-expo";

export default function MainTabScreen() {
  const { user } = useAuth();
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Link href={"/(home)/user"} asChild >
              <FontAwesome5
                name="users"
                size={24}
                color="gray"
                style={{ marginHorizontal: 15 }}
              />
            </Link>
          ),
        }}
      />
      <ChannelList
        filters={{ members: { $in: [user!.id] } }}
        onSelect={(channel) => router.push(`/channel/${channel?.cid}`)}
      />
    </>
  );
}
