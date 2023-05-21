import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Block, GradientButton, Header, Text, TextInput } from "@components";
import { theme } from "@theme";
import { height, width } from "@utils/responsive";
import { navigate } from "@navigation/RootNavigation";

const Payment = () => {
  return (
    <LinearGradient
      style={[styles.backgroundColor, { justifyContent: "flex-end" }]}
      colors={theme.colors.backgroundColor}
    >
      <Header canGoBack title="Thanh toán" />
      <Block
        paddingTop={30}
        flex
        borderTopRightRadius={45}
        borderTopLeftRadius={45}
        backgroundColor={"white"}
        paddingHorizontal={20}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput
            label={"Tiền phòng"}
            placeholder="Tiền phòng"
            value={"1.200.000"}
            style={styles.input}
            containerInputStyle={{ marginBottom: 30 }}
            labelStyle={{ fontSize: 18 }}
          />

          <TextInput
            label={"Số điện mới"}
            placeholder="Nhập số điện mới"
            value={"1.200.000"}
            style={styles.input}
            containerInputStyle={{ marginBottom: 30 }}
            labelStyle={{ fontSize: 18 }}
          />

          <TextInput
            label={"Số nước mới"}
            placeholder="Nhập số nước mới"
            value={"1.200.000"}
            style={styles.input}
            containerInputStyle={{ marginBottom: 30 }}
            labelStyle={{ fontSize: 18 }}
          />

          <TextInput
            label={"Phụ thu (nếu có)"}
            placeholder="Nhập phụ thu"
            value={"1.200.000"}
            style={styles.input}
            containerInputStyle={{ marginBottom: 30 }}
            labelStyle={{ fontSize: 18 }}
          />

          <TextInput
            label={"Ghi chú"}
            placeholder="Nhập ghi chú"
            value={"1.200.000"}
            style={styles.inputMulti}
            containerInputStyle={{ marginBottom: 30 }}
            labelStyle={{ fontSize: 18 }}
            multiline
          />

          <GradientButton
            onPress={()=>navigate("Bill")}
            title="Xuất hoá đơn"
            style={styles.button}
          />
        </ScrollView>
      </Block>
    </LinearGradient>
  );
};

export default Payment;

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
