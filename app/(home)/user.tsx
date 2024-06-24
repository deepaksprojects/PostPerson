import { useAuth } from "@/components/providers/authProvider";
import UserListItems from "@/components/userListItems";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";

export default function UserScreen() {
  const [users, setUsers] = useState<any>([]);
  const { user } = useAuth();

  useEffect(() => {
    (async function fetchUsers() {
      let { data: profiles, error } = await supabase
        .from("profiles")
        .select("*")
        .neq("id", user!.id); // exclude me
      setUsers(profiles);
    })();
  }, []);

  return (
    <FlatList
      data={users}
      contentContainerStyle={{ gap: 5 }}
      renderItem={({ item }: any) => {
        return <UserListItems user={item} />;
      }}
    />
  );
}
