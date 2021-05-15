import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../Context/BlogContext";
import FormComponent from "../Components/FormComponent";

const CreateScreen = ({ navigation }) => {
  const { addPost } = useContext(Context);
  return (
    <FormComponent
      onSubmit={(title, description) => {
        addPost(title, description, () => {
          navigation.navigate("Index"); //the bes way, here we are waiting from the server
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
