import { images } from "@assets";
import Block from "@components/Block";
import { navigate } from "@navigation/RootNavigation";
import { chatkSelect } from "@store/slices/chat";
import { notiSelect } from "@store/slices/notification";
import { getSize } from "@utils/responsive";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const TopNav = () => {
  const { isNewMessage } = useSelector(chatkSelect);
  const { isNewNoti } = useSelector(notiSelect);
  return (
    <Block
      paddingHorizontal={20}
      paddingVertical={20}
      alignCenter
      space={"between"}
      row
      marginTop={10}
    >
      <TouchableOpacity onPress={() => navigate("ChatScreen")}>
        <Image source={images.ic_chat} style={styles.icQuize} />
        {isNewMessage && (
          <Block
            backgroundColor={"red"}
            width={getSize.s(10)}
            height={getSize.s(10)}
            radius={getSize.s(10)}
            absolute
            bottom={0}
            right={0}
          />
        )}
      </TouchableOpacity>
      <Block alignCenter space={"between"} row>
        <TouchableOpacity
          onPress={() => navigate("NotificationScreen")}
          style={{ marginRight: 40 }}
        >
          <Image source={images.ic_bell} style={styles.icQuize} />
          {isNewNoti && (
            <Block
              backgroundColor={"red"}
              width={getSize.s(10)}
              height={getSize.s(10)}
              radius={getSize.s(10)}
              absolute
              bottom={5}
              right={-3}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("AccountScreen")}>
          <Image source={images.ic_account} style={styles.icUser} />
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  icQuize: {
    width: 26,
    height: 31,
    resizeMode: "contain",
  },
  icUser: {
    width: getSize.m(38),
    height: getSize.m(38),
  },
});
