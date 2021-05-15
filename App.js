import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screen/IndexScreen";
import { Provider } from "./src/Context/BlogContext";
import ShowScreen from "./src/screen/ShowScreen";
import CreateScreen from "./src/screen/CreateScreen";
import EditScreen from "./src/screen/EditScreen";

//two way to pass info, by props or context
const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "My Bblog Post",
    },
  }
);

const App = createAppContainer(AppNavigator);

export default () => {
  //is like BlogProvider is the main file, so App is like children
  return (
    <Provider>
      <App />
    </Provider>
  );
};
