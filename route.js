import "react-native-gesture-handler";
import React from "react";

import { Button, Image, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from "./auth/Screens/LoginScreen";
import RegistrationScreen from "./auth/Screens/RegistrationScreen";

import PostsScreen from "./mainScreens/PostsScreen";
import CreateScreen from "./mainScreens/CreateScreen";
import ProfileScreen from "./mainScreens/ProfileScreen";
import HomeScreen from "./mainScreens/Home";
import CommentsScreen from "./mainScreens/CommentsScreen";
import MapScreen from "./mainScreens/MapScreen";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      initialRouteName="Home"
      name="Home"
      component={HomeScreen}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarItemStyle: {
          borderRadius: "20px",
        },
        tabBarActiveBackgroundColor: {
          backgroundColor: "orange",
          padding: "10px",
        },
        tapBarActiveTintColor: "#FFFFFF",
        title: "Home",
      }}
    >
      <MainTab.Screen
        options={() => ({
          title: "Публикации",
          headerRight: () => (
            <Image
              source={require("./assets/images/log-out.png")}
              style={{ marginRight: 15 }}
            />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
        })}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={() => ({
          title: "Создать публикацию",
          headerLeft: () => (
            <Image
              source={require("./assets/images/arrow-left.png")}
              style={{ marginLeft: 16, width: 24, height: 24 }}
            />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Fontisto name="plus-a" size={size} color={color} />
          ),
        })}
        name="Create"
        component={CreateScreen}
      />
      <MainTab.Screen
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <SimpleLineIcons name="user" size={size} color={color} />
          ),
        })}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
