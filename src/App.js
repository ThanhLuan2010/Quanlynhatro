/* eslint-disable react-hooks/exhaustive-deps */
// import {useDeviceTokenMutation} from '@api/user';
import { Block, Loader, NetWork } from "@components";
import messaging from "@react-native-firebase/messaging";
import LoadingScreen from "@screens/LoadingScreen";
import { setisNewMessage } from "@store/slices/chat";
import { codePushSelect } from "@store/slices/codePush";
import { commonSelect } from "@store/slices/common";
import { setisNewNoti } from "@store/slices/notification";
import { height, width } from "@utils/responsive";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { MenuProvider } from "react-native-popup-menu";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "react-native-splash-screen";
import { Provider, useSelector } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import CodePushUpdate from "./modal/CodePushUpdate";
import RootStack from "./navigation/RootStack";
import { store } from "./store";
import { RXStore, dispatch } from "./store/configStore";

const App = () => {
  const { isLoading } = useSelector(commonSelect);
  const [isLoadingView, setisLoadingView] = useState(true);
  const { isUpdate, progres } = useSelector(codePushSelect);
  StatusBar.setBarStyle("dark-content");
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    setTimeout(() => {
      setisLoadingView(false);
    }, 2000);
  }, []);

  return (
    <>
      <RootStack />
      {isLoading && <Loader />}
      <RXStore />
      {isLoadingView && (
        <Block absolute width={width} height={height}>
          <LoadingScreen />
        </Block>
      )}
      <FlashMessage
        style={{ paddingTop: 40, borderRadius: 8 }}
        position="top"
      />
    </>
  );
};

const AppWrapper = () => {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <MenuProvider>
            <App />
            <NetWork />
          </MenuProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default AppWrapper;
