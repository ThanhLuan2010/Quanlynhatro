import { ScrollView, StyleSheet, TextInput } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Block, GradientButton, Header, Text } from "@components";
import { theme } from "@theme";
import { height, width } from "@utils/responsive";
import { navigate } from "@navigation/RootNavigation";

const RoomDetail = () => {
  return (
    <LinearGradient
      style={[styles.backgroundColor, { justifyContent: "flex-end" }]}
      colors={theme.colors.backgroundColor}
    >
      <Header canGoBack title="Chi tiết phòng" />
      <Block
        paddingTop={30}
        flex
        borderTopRightRadius={45}
        borderTopLeftRadius={45}
        backgroundColor={"white"}
      >
        <ScrollView>
          <Block
            marginHorizontal={20}
            alignCenter
            borderBottomWidth={1}
            row
            space={"between"}
          >
            <Text flex fontFamily={theme.fonts.fontFamily.SourceSans3Bold}>
              Tên phòng
            </Text>
            <TextInput
              style={styles.input}
              value={"Phòng 1"}
              placeholder="Tên phòng"
            />
          </Block>

          <Block
            marginHorizontal={20}
            alignCenter
            borderBottomWidth={1}
            row
            space={"between"}
          >
            <Text fontFamily={theme.fonts.fontFamily.SourceSans3Bold}>
              Tiền phòng
            </Text>
            <TextInput
              style={styles.input}
              value={"1.200.000 vnđ"}
              placeholder="Tiền phòng"
            />
          </Block>

          <Block
            marginHorizontal={20}
            alignCenter
            borderBottomWidth={1}
            row
            space={"between"}
          >
            <Text fontFamily={theme.fonts.fontFamily.SourceSans3Bold}>
              Tiền cọc
            </Text>
            <TextInput
              style={styles.input}
              value={"1.200.000 vnđ"}
              placeholder="Tiền cọc"
            />
          </Block>

          <Block
            marginHorizontal={20}
            alignCenter
            borderBottomWidth={1}
            row
            space={"between"}
          >
            <Text fontFamily={theme.fonts.fontFamily.SourceSans3Bold}>
              Tiền điện
            </Text>
            <TextInput
              style={styles.input}
              value={"1.200.000 vnđ"}
              placeholder="Tiền điện"
            />
          </Block>

          <Block
            marginHorizontal={20}
            alignCenter
            borderBottomWidth={1}
            row
            space={"between"}
          >
            <Text fontFamily={theme.fonts.fontFamily.SourceSans3Bold}>
              Tiền nước
            </Text>
            <TextInput
              style={styles.input}
              value={"1.200.000 vnđ"}
              placeholder="Tiền nước"
            />
          </Block>

          <Block
            marginHorizontal={20}
            alignCenter
            borderBottomWidth={1}
            row
            space={"between"}
          >
            <Text fontFamily={theme.fonts.fontFamily.SourceSans3Bold}>
              Số nước cũ
            </Text>
            <TextInput
              style={styles.input}
              value={"1.200.000 vnđ"}
              placeholder="Số nước cũ"
            />
          </Block>

          <Block
            marginHorizontal={20}
            alignCenter
            borderBottomWidth={1}
            row
            space={"between"}
          >
            <Text fontFamily={theme.fonts.fontFamily.SourceSans3Bold}>
              Số điện cũ
            </Text>
            <TextInput
              style={styles.input}
              value={"1.200.000 vnđ"}
              placeholder="Số điện cũ"
            />
          </Block>

          <Block
            marginHorizontal={20}
            alignCenter
            borderBottomWidth={1}
            row
            space={"between"}
          >
            <Text fontFamily={theme.fonts.fontFamily.SourceSans3Bold}>
              Số nước mới
            </Text>
            <TextInput
              style={styles.input}
              value={"1.200.000 vnđ"}
              placeholder="Số nước mới"
            />
          </Block>

          <Block
            marginHorizontal={20}
            alignCenter
            borderBottomWidth={1}
            row
            space={"between"}
          >
            <Text fontFamily={theme.fonts.fontFamily.SourceSans3Bold}>
              Số điện mới
            </Text>
            <TextInput
              style={styles.input}
              value={"1.200.000 vnđ"}
              placeholder="Số điện mới"
            />
          </Block>

          <Block marginHorizontal={20} marginTop={30}>
            <Text fontFamily={theme.fonts.fontFamily.SourceSans3Bold} size={20}>
              Danh sách người thuê
            </Text>
          </Block>

          <Block>
            <GradientButton
              title="Thanh toán tháng này"
              style={styles.button}
              onPress={()=>navigate('Payment')}
            />

            <GradientButton
              title="Trả phòng"
              style={styles.button}
            />
          </Block>
        </ScrollView>
      </Block>
    </LinearGradient>
  );
};

export default RoomDetail;

const styles = StyleSheet.create({
  backgroundColor: {
    flex: 1,
  },
  button: {
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop:10,
    alignItems: "center",
  },
  itemRoom: {
    width: (width - 40) / 2,
    borderWidth: 1,
  },
  input: {
    color: theme.colors.darkRed,
    fontFamily: theme.fonts.fontFamily.SourceSans3Bold,
  },
});
