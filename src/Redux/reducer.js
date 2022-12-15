const initialState = {
    email: "",
    password: "",
    isAuth: false,
  };
  
  export const authProses = (state = initialState, action) => {
    if (action.type === "login") {
      return {
        ...state,
        email: action.email,
        password: action.password,  
        isAuth: action.isAuth,
      };
    };
    return state;
  };