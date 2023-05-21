import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Block, GradientButton, Header, Text, TextInput } from "@components";
import { theme } from "@theme";
import { height, width } from "@utils/responsive";
import { navigate } from "@navigation/RootNavigation";

const ListRoom = () => {
  const data = [
    { title: "Phòng 1" },
    { title: "Phòng 2" },
    { title: "Phòng 3" },
    { title: "Phòng 4" },
    { title: "Phòng 5" },
    { title: "Phòng 6" },
  ];

  const rederListRoom = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          width: (width - 80) / 2,
          height: (width - 80) / 2,
          marginHorizontal: 20,
          marginBottom: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#48DA5F",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={()=>navigate('RoomDetail',{item})}
        key={index}
      >
        <Text color="#48DA5F">{item.title}</Text>
      </TouchableOpacity>
    );
  };
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
        <ScrollView>
          <Block row wrap>
            {data.map(rederListRoom)}
          </Block>
        </ScrollView>
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
  itemRoom: {
    width: (width - 40) / 2,
    borderWidth: 1,
  },
});
