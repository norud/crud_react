import CreateDataContext from "./CreateDataContext";

const blogReducer = (state, acction) => {
  // console.log(acction);
  switch (acction.type) {
    case "add_post":
      return [
        ...state,
        {
          id: Date.now(),
          title: acction.payload.title,
          description: acction.payload.description,
        },
      ];
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

const addPost = (dispatch) => {
  return (title, description, callback) => {
    dispatch({ type: "add_post", payload: { title, description } });
    //here return success
    if (callback) {
      callback();
    }
    //we can add into a try cash to not return index
  };
};

const deletePost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_post", payload: id });
  };
};

const editPost = (dispatch) => {
  return (id, title, description, callback) => {
    dispatch({ type: "edit_post", payload: { id, title, description } });
    //here return success
    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addPost, deletePost, editPost },
  [{ id: Date.now(), title: "ENV Post", description: "Just env test" }] //this is default only for env, we most leave empty on prod
);
