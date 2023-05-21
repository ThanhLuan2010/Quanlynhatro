import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Block, GradientButton, Header, Text, TextInput } from "@components";
import { theme } from "@theme";
import { height, width } from "@utils/responsive";
import { navigate } from "@navigation/RootNavigation";

const BaoCao = () => {
  return (
    <LinearGradient
      style={[styles.backgroundColor, { justifyContent: "flex-end" }]}
      colors={theme.colors.backgroundColor}
    >
      <Header canGoBack title="Báo cáo" />
      <Block
        paddingTop={30}
        flex
        borderTopRightRadius={45}
        borderTopLeftRadius={45}
        backgroundColor={"white"}
        paddingHorizontal={20}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block
            row
            space={"between"}
            alignCenter
            backgroundColor={theme.colors.orange}
            padding={20}
            radius={30}
          >
            <Text size={18} color="white" fontType={"bold"}>
              Phòng đang cho thuê
            </Text>
            <Text size={18} color="white" fontType={"bold"}>
              4
            </Text>
          </Block>

          <Block
            row
            space={"between"}
            alignCenter
            backgroundColor={theme.colors.orange}
            padding={20}
            radius={30}
            marginTop={30}
          >
            <Text size={18} color="white" fontType={"bold"}>
              Phòng còn trống
            </Text>
            <Text size={18} color="white" fontType={"bold"}>
              4
            </Text>
          </Block>

          <Block
            row
            space={"between"}
            alignCenter
            backgroundColor={theme.colors.orange}
            padding={20}
            radius={30}
            marginTop={30}
          >
            <Text size={18} color="white" fontType={"bold"}>
              Số điện tiêu thụ
            </Text>
            <Text size={18} color="white" fontType={"bold"}>
              4
            </Text>
          </Block>

          <Block
            row
            space={"between"}
            alignCenter
            backgroundColor={theme.colors.orange}
            padding={20}
            radius={30}
            marginTop={30}
          >
            <Text size={18} color="white" fontType={"bold"}>
              Số nước tiêu thụ
            </Text>
            <Text size={18} color="white" fontType={"bold"}>
              4
            </Text>
          </Block>

          <Block marginTop={60}>
            <Text size={28} fontType={"bold"}>
              Doanh thu
            </Text>
            <Text
              size={30}
              center
              marginTop={30}
              color={theme.colors.darkRed}
              fontType={"bold"}
            >
              1.000.000.000
            </Text>
          </Block>
        </ScrollView>
      </Block>
    </LinearGradient>
  );
};

export default BaoCao;

const styles = StyleSheet.create({
  backgroundColor: {
    flex: 1,
  },

  itemRoom: {
    width: (width - 40) / 2,
    borderWidth: 1,
  },
  input: {
    borderWidth: 1,
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    borderColor: theme.colors.orange,
    fontSize: 18,
    fontWeight: "bold",
  },
  inputMulti: {
    borderWidth: 1,
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    borderColor: theme.colors.orange,
    fontSize: 18,
    fontWeight: "bold",
    height: 200,
  },
  button: {
    alignItems: "center",
    borderRadius: 7,
    marginTop: 30,
    marginBottom: 10,
  },
});
