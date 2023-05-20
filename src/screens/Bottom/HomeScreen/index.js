import { Block, Text } from "@components";
import { navigate } from "@navigation/RootNavigation";
import { theme } from "@theme";
import { height, width } from "@utils/responsive";
import React from "react";
import { Pressable, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch } from "react-redux";
import styles from "./styles";

const HomeView = ({ navigation }) => {

  const data = [
    {
      title: "Danh sách phòng",
      image: "",
      color: theme.colors.blue,
      navigate: "ListRoom",
    },
    {
      title: "Báo cáo",
      image: "",
      color: theme.colors.orange,
      navigate: "AddRoom",
    },
    {
      title: "Thêm phòng",
      image: "",
      color: theme.colors.secondary,
      navigate: "AddRoom",
    },
    {
      title: "Danh sách phòng thuê",
      image: "",
      color: theme.colors.blue,
      navigate: "AddRoom",
    },
  ];
  const renderMenu = (item, index) => {
    return (
      <Pressable
        style={{
          backgroundColor: item.color,
          width: (width - 100) / 2,
          height: (width - 100) / 2,
          justifyContent: "center",
          marginHorizontal: 20,
          borderRadius: 20,
          alignItems: "center",
          marginBottom: 40,
        }}
        key={index}
        onPress={() => navigate(item.navigate)}
      >
        {/* <Block
          width={(width - 100) / 2}
          height={(width - 100) / 2}
          marginHorizontal={20}
          backgroundColor={item.color}
          key={index}
          justifyCenter
          alignCenter
          radius={20}
          marginBottom={40}
        > */}
        <Text color="white" center>
          {item?.title}
        </Text>
        {/* </Block> */}
      </Pressable>
    );
  };
  return (
    <LinearGradient
      style={[styles.backgroundColor, { justifyContent: "flex-end" }]}
      colors={theme.colors.backgroundColor}
    >
      <Block justifyCenter alignCenter flex>
        <Text size={20} color="white">
          PHÒNG TRỌ{" "}
          <Text
            fontFamily={theme.fonts.fontFamily.SourceSans3Bold}
            size={24}
            color={theme.colors.orange}
          >
            NHẬT MINH
          </Text>
        </Text>
      </Block>
      <Block
        height={height / 1.5}
        paddingTop={30}
        borderTopRightRadius={45}
        borderTopLeftRadius={45}
        backgroundColor={"white"}
      >
        <ScrollView>
          <Block justifyCenter row wrap>
            {data.map(renderMenu)}
          </Block>
        </ScrollView>
      </Block>
    </LinearGradient>
  );
};

export default HomeView;
