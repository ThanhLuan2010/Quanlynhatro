import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Block, GradientButton, Header, Text, TextInput } from "@components";
import { theme } from "@theme";
import { height } from "@utils/responsive";

const AddRoom = () => {
  return (
    <LinearGradient
      style={[styles.backgroundColor, { justifyContent: "flex-end" }]}
      colors={theme.colors.backgroundColor}
    >
      <Header canGoBack title="Thêm phòng" />
      <Block
        paddingTop={30}
        flex
        borderTopRightRadius={45}
        borderTopLeftRadius={45}
        backgroundColor={"white"}
      >
        <ScrollView>
          <Block marginHorizontal={20}>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 20,
                height: 41,
                borderColor: theme.colors.greenBold,
              }}
              label={"Tên phòng"}
            />
          </Block>

          <Block marginTop={30} marginHorizontal={20}>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 20,
                height: 41,
                borderColor: theme.colors.greenBold,
              }}
              label={"Tiền phòng"}
            />
          </Block>

          <Block marginTop={30} marginHorizontal={20}>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 20,
                height: 41,
                borderColor: theme.colors.greenBold,
              }}
              label={"Số người ở"}
            />
          </Block>

          <Block marginTop={30} marginHorizontal={20}>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 20,
                height: 41,
                borderColor: theme.colors.greenBold,
              }}
              label={"Tiền điện (VNĐ/số)"}
            />
          </Block>

          <Block marginTop={30} marginHorizontal={20}>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 20,
                height: 41,
                borderColor: theme.colors.greenBold,
              }}
              label={"Tiền nước (VNĐ/số)"}
            />
          </Block>

          <Block marginTop={30} marginHorizontal={20}>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 20,
                height: 41,
                borderColor: theme.colors.greenBold,
              }}
              label={"Số nước cũ"}
            />
          </Block>

          <Block marginTop={30} marginHorizontal={20}>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 20,
                height: 41,
                borderColor: theme.colors.greenBold,
              }}
              label={"Số điện cũ"}
            />
          </Block>

          <GradientButton title={"Thêm phòng"} style={styles.button} />
        </ScrollView>
      </Block>
    </LinearGradient>
  );
};

export default AddRoom;

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
