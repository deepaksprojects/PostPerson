import { useAuth } from "@/components/providers/authProvider";
import ChatProvider from "@/components/providers/chatProvider";
import { Redirect, Stack } from "expo-router";

export default function HomeLayout() {
    const { user } = useAuth();
    if (!user) {
      return <Redirect href="/(auth)" />;
    }
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ChatProvider> );
}
