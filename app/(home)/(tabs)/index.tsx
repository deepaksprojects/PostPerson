import { StyleSheet } from "react-native";

import { Channel as ChannelType } from "stream-chat";

import { useState } from "react";
import { Channel, ChannelList, MessageInput, MessageList } from "stream-chat-expo";
import { router } from "expo-router";

export default function MainTabScreen() {
  const [channel, setChannel] = useState<ChannelType>();

  if (channel) {
    return <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>;
  }

  return <ChannelList onSelect={(channel) => router.push('/channel')} />;
}
