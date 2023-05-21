import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Block, GradientButton, Header, Text, TextInput } from "@components";
import { theme } from "@theme";
import { height, width } from "@utils/responsive";
import { navigate } from "@navigation/RootNavigation";

const Bill = () => {
  return (
    <LinearGradient
      style={[styles.backgroundColor, { justifyContent: "flex-end" }]}
      colors={theme.colors.backgroundColor}
    >
      <Header canGoBack title="Hoá đơn" />
      <Block
        paddingTop={30}
        flex
        borderTopRightRadius={45}
        borderTopLeftRadius={45}
        backgroundColor={"white"}
        paddingHorizontal={20}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block marginBottom={30} row alignCenter space={"between"}>
            <Text size={24}>Phòng 1</Text>
            <Text size={24} color={theme.colors.darkRed}>
              20-10-2000
            </Text>
          </Block>
          <TextInput
            label={"Tiền phòng"}
            placeholder="Tiền phòng"
            value={"1.200.000"}
            style={styles.input}
            containerInputStyle={{ marginBottom: 30 }}
            labelStyle={{ fontSize: 18 }}
          />

          <TextInput
            label={"Tiền điện"}
            placeholder="Nhập tiền điện"
            value={"1.200.000"}
            style={styles.input}
            containerInputStyle={{ marginBottom: 30 }}
            labelStyle={{ fontSize: 18 }}
          />

          <TextInput
            label={"Tiền nước"}
            placeholder="Nhập tiền nước"
            value={"1.200.000"}
            style={styles.input}
            containerInputStyle={{ marginBottom: 30 }}
            labelStyle={{ fontSize: 18 }}
          />

          <TextInput
            label={"Số điện tiêu thụ"}
            placeholder="Nhập số điện"
            value={"1.200.000"}
            style={styles.input}
            containerInputStyle={{ marginBottom: 30 }}
            labelStyle={{ fontSize: 18 }}
          />

          <TextInput
            label={"Số nước tiêu thụ"}
            placeholder="Nhập số nước"
            value={"1.200.000"}
            style={styles.input}
            containerInputStyle={{ marginBottom: 30 }}
            labelStyle={{ fontSize: 18 }}
          />

          <TextInput
            label={"Phụ thu"}
            placeholder="Nhập phụ thu"
            value={"1.200.000"}
            style={styles.input}
            containerInputStyle={{ marginBottom: 30 }}
            labelStyle={{ fontSize: 18 }}
          />

          <Block
            marginTop={30}
            borderTopWidth={1}
            row
            alignCenter
            space={"between"}
            paddingVertical={30}
          >
            <Text size={24}>Tổng cộng</Text>
            <Text fontType={"bold"} size={24} color={theme.colors.darkRed}>
              1.200.000
            </Text>
          </Block>

          <GradientButton title="Lưu" style={styles.button} />
        </ScrollView>
      </Block>
    </LinearGradient>
  );
};

export default Bill;

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
