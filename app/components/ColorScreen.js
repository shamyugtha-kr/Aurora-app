import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Styles from "../components/Styles";
import Colors from "../components/Colors";
import MyHeader from "../components/MyHeader";
import Animated, { FadeIn, useAnimatedRef } from "react-native-reanimated";

export default function ColorScreen({ route, navigation }) {
  const viewRef = useAnimatedRef(null);
  const [bgColor, setBgColor] = useState();

  useEffect(() => {
    switch (route.name) {
      case "Home":
        setBgColor("#FFF1EB");
        break;
      case "Health":
        setBgColor("#FFF1EB");
        break;
      case "Community":
        setBgColor("#FFF1EB");
        break;
      case "Account":
        setBgColor("#FFF1EB");
        break;
      case "Activity":
        setBgColor("#FFF1EB");
        break;
      default:
        setBgColor(Colors.white);
    }
  }, []);

  return (
    <Animated.View
      ref={viewRef}
      entering={FadeIn.duration(800)}
      style={[Styles.container, { backgroundColor: bgColor }]}
    >
      <MyHeader
        menu
        onPressMenu={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log("right")}
      />
      <View style={[Styles.container, { backgroundColor: bgColor }]}></View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
