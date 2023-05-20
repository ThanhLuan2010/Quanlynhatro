import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Block, GradientButton, Header, Text, TextInput } from "@components";
import { theme } from "@theme";
import { height } from "@utils/responsive";

const ListRoom = () => {
  const data = [
    { title: "Phòng 1" },
    { title: "Phòng 2" },
    { title: "Phòng 3" },
    { title: "Phòng 4" },
    { title: "Phòng 5" },
    { title: "Phòng 6" },
  ];
  return (
    <LinearGradient
      style={[styles.backgroundColor, { justifyContent: "flex-end" }]}
      colors={theme.colors.backgroundColor}
    >
      <Header canGoBack title="Danh sách phòng" />
      <Block
        paddingTop={30}
        flex
        borderTopRightRadius={45}
        borderTopLeftRadius={45}
        backgroundColor={"white"}
      >
        <ScrollView></ScrollView>
      </Block>
    </LinearGradient>
  );
};

export default ListRoom;

const styles = StyleSheet.create({
  backgroundColor: {
    flex: 1,
  },
  button: {
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 30,
    alignItems: "center",
  },
});
