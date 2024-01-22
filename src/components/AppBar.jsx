import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";

let statusbar = Constants.statusBarHeight;
statusbar = 70;

const styles = StyleSheet.create({
  container: {
    paddingTop: statusbar,
    backgroundColor: theme.colors.appBarColor,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text color="textLight" fontSize="subheading" fontWeight="bold">
        Repositories
      </Text>
    </View>
  );
};

export default AppBar;
