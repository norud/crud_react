import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context } from "../Context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";
//for multe context we have to use like this: import {Context as OtherContext} from '../Context/OtherContext';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);

  const post = state.find((post) => post.id === id);

  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.description} </Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <FontAwesome name="pencil-square-o" style={styles.iconEdit} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  iconEdit: {
    fontSize: 30,
    //backgroundColor: "#d5d5d5",
    marginRight: 15,
  },
});

export default ShowScreen;
