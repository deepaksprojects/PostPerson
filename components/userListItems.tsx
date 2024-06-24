import React from "react";
import { Pressable, Text } from "react-native";
import { useChatContext } from "stream-chat-expo";
import { useAuth } from "./providers/authProvider";
import { router } from "expo-router";

const UserListItems = ({ user }: any) => {
  const { client } = useChatContext();
  const { user: me } = useAuth();
  const onPress = async () => {
    const channel = client.channel("messaging", {
      members: [me?.id, user.id],
    });
    channel.watch();
    router.replace(`/(home)/channel/${channel.cid}`);
  };

  return (
    <Pressable
      onPress={onPress}
      style={{ padding: 10, backgroundColor: "white" }}
    >
      <Text style={{ fontWeight: "600" }}>{user.full_name ?? "No Name"}</Text>
    </Pressable>
  );
};

export default UserListItems;
