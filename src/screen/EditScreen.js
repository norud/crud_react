import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../Context/BlogContext";
import FormComponent from "../Components/FormComponent";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editPost } = useContext(Context);

  const post = state.find((post) => post.id === id);

  return (
    <FormComponent
      initialValue={{ title: post.title, description: post.description }}
      onSubmit={(title, description) => {
        editPost(id, title, description, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({
  parent: {
    padding: 10,
  },
  form: {
    height: 30,
    fontSize: 18,
    backgroundColor: "#d5d5d5",
  },
  label: {
    fontSize: 20,
    color: "gray",
    marginTop: 5,
  },
});
export default EditScreen;
