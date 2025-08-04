import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = ({ title }) => {
  return (
    <View styles={styles.container}>
      <Text styles={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({ container: {}, title: {} });
