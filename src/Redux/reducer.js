const initialState = {
    email: "",
    name: "",
    password: "",
    isAuth: false,
  };
  
  export const authProses = (state = initialState, action) => {
    if (action.type === "login") {
      return {
        ...state,
        email: action.email,
        name: action.name,
        password: action.password,  
        isAuth: action.isAuth,
      };
    };
    return state;
  };