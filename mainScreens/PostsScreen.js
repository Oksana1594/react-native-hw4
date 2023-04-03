import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PostsScreen = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.img}
          source={require("../assets/images/girl.png")}
        />
        <View>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
  },
  wrapper: {
    top: 10,
    zIndex: 5,
    flexDirection: "row",
    flexWrap: "wrap",

    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 32,
  },
  name: {
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  img: {
    width: 60,
    height: 60,
    marginRight: 6,
  },
  email: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});

export default PostsScreen;
