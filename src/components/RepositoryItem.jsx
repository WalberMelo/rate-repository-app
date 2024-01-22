import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import { convertTotalCount } from "../utils/convertTotalCount";

const RenderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
    <View style={styles.textContainer}>
      <Text fontWeight="bold">{item.fullName}</Text>
      <Text color="textSecondary">{item.description}</Text>
      <View style={styles.languageContainer}>
        <Text style={styles.language} fontSize="body">
          {item.language}
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.stats}>
          <Text fontWeight="bold">
            {convertTotalCount(item.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>

        <View style={styles.stats}>
          <Text fontWeight="bold">{convertTotalCount(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>

        <View style={styles.stats}>
          <Text fontWeight="bold">{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>

        <View style={styles.stats}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  languageContainer: {
    borderRadius: 5,
    backgroundColor: "#0366d6",
    alignSelf: "flex-start",
    padding: 4,
    marginTop: 4,
    marginBottom: 4,
  },
  language: {
    fontSize: 12,
    color: "#fff",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 4,
  },
  stats: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RenderItem;
