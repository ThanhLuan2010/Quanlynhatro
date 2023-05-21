import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "@screens/Bottom/HomeScreen";
import LoadingScreen from "@screens/LoadingScreen";
import LoginScreen from "@screens/LoginScreen";
import React from "react";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import AlertModal from "../modal/AlertModal";
import { userSelect } from "../store/slices/user";
import { navigationRef } from "./RootNavigation";
import { APP_PREFIX, PATH_SCREENS } from "./routes";
import AddRoom from "@screens/AddRoom";
import ListRoom from "@screens/ListRoom";
import RoomDetail from "@screens/RoomDetail";
import Payment from "@screens/Payment";
import Bill from "@screens/Bill";
import BaoCao from "@screens/Baocao";

const Stack = createStackNavigator();

export default function MainContainer() {
  const linking = {
    prefixes: APP_PREFIX,
    config: PATH_SCREENS,
  };
  // const { isLoggedIn } = useSelector(userSelect);
  const { isLoggedIn } = useSelector(userSelect);
  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          {isLoggedIn ? (
            <>
              <Stack.Screen name={"HomeView"} component={HomeView} />
              <Stack.Screen name={"AddRoom"} component={AddRoom} />
              <Stack.Screen name={"ListRoom"} component={ListRoom} />
              <Stack.Screen name={"RoomDetail"} component={RoomDetail} />
              <Stack.Screen name={"Payment"} component={Payment} />
              <Stack.Screen name={"Bill"} component={Bill} />
              <Stack.Screen name={"BaoCao"} component={BaoCao} />
            </>
          ) : (
            <>
              <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
            </>
          )}
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            presentation: "transparentModal",
            headerShown: false,
          }}
        >
          <Stack.Screen name={"AlertModal"} component={AlertModal} />
          <Stack.Screen name={"LoadingScreen"} component={LoadingScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
