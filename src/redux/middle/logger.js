export const logger = (state) => {
  console.log("state", state);
  return (next) => {
    return (action) => {
      console.log("memanggil action", action);
      if (action.type === "change") {
        return next(action);
      } else {
        return;
      }
    };
  };
};

export const test = (state) => {
  console.log("state", state);
  return (next) => {
    return (action) => {
      if (action.color !== "purple") {
        action.color = "purple"
      }
      return next(action);
    };
  };
};
