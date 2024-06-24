import ChatProvider from "@/components/providers/chatProvider";
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ChatProvider> );
}
