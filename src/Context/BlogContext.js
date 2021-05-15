import CreateDataContext from "./CreateDataContext";
import jsonServer from "../api/JsonServer";

const blogReducer = (state, acction) => {
  // console.log(acction);
  switch (acction.type) {
    case "get_posts":
      return acction.payload;
    case "delete_post":
      return state.filter((post) => post.id !== acction.payload);
    case "edit_post":
      return state.map((post) => {
        return post.id === acction.payload.id ? acction.payload : post;
      });

    default:
      return state;
  }
};

const getPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("blogposts");
    dispatch({ type: "get_posts", payload: response.data });
  };
};

const addPost = (dispatch) => {
  return async (title, description, callback) => {
    await jsonServer.post("blogposts", { title, description }); //when i same param and var we can avoid if no have to be: name:text

    //here return success
    if (callback) {
      callback();
    }
    //we can add into a try cash to not return index
  };
};

const deletePost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`blogposts/${id}`);
    dispatch({ type: "delete_post", payload: id });
  };
};

const editPost = (dispatch) => {
  return async (id, title, description, callback) => {
    await jsonServer.put(`blogposts/${id}`, { title, description });

    dispatch({ type: "edit_post", payload: { id, title, description } });
    //here return success
    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { getPosts, addPost, deletePost, editPost },
  []
);
