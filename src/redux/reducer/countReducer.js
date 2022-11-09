const initialState = {
    value: 0,
    status: "",
  };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        console.log(state);
        return {
          ...state,
          value: state.value + 1,
          status: action.status,
        };
      case "DECREMENT":
        return {
          ...state,
          value: state.value - 1,
          status: action.status,
        };
      default:
        return state;
  
    }
  };
  
  
  export const increment = () => {
    return {
      type: "INCREMENT",
      status: "Berhasil ditambah"
    };
  };
  export const decrement = () => {
    return {
      type: "DECREMENT",
      status: "Berhasil dikurang"
    };
  };
  