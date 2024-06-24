import { View, Text } from "react-native";
import React from "react";

const UserListItems = ({ user }: any) => {
  return (
    <View style={{padding:10,backgroundColor:'white',}} >
      <Text style={{fontWeight:'600'}} >{user.full_name ?? "No Name"}</Text>
    </View>
  );
};

export default UserListItems;
