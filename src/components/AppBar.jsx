import { View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

import theme from "../theme";
import Text from "./Text";
import { ScrollView } from "react-native";

let statusBarHeight = Constants.statusBarHeight;
statusBarHeight = 70;

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    backgroundColor: theme.colors.appBarColor,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  link: {
    marginHorizontal: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" style={styles.link}>
          <Text color="textLight" fontSize="subheading" fontWeight="bold">
            Repositories
          </Text>
        </Link>

        <Link to="/signin" style={styles.link}>
          <Text color="textLight" fontSize="subheading" fontWeight="bold">
            Sign In
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
