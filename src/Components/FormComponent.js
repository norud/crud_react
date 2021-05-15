import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const FormComponent = ({ onSubmit, initialValue }) => {
  const [title, setTitle] = useState(initialValue.title);
  const [description, setDescription] = useState(initialValue.description);

  return (
    <View style={styles.parent}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.form}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Descriptions</Text>
      <TextInput
        style={styles.form}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button onPress={() => onSubmit(title, description)} title="Save Post" />
    </View>
  );
};

FormComponent.defaultProps = {
  initialValue: {
    title: "",
    description: "",
  },
};

export default FormComponent;

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
