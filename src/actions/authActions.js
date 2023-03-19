// login actions
export const login = (email, password) => {
    return (dispatch) => {
      // check if user exists in local storage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((u) => u.email === email && u.password === password);
  
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      } else {
        dispatch({ type: "LOGIN_ERROR", payload: "Invalid email or password" });
      }
    };
  };
  
  export const register = (email, username, password) => {
    return (dispatch) => {
      // check if email already exists in local storage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some((u) => u.email === email);

      if (userExists) {
        dispatch({ type: "REGISTER_ERROR", payload: "Email already registered" });
      } else {
          const newUser = {
              email,
              username,
              password,
              userId: new Date().getTime()
          };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        dispatch({ type: "REGISTER_SUCCESS", payload: newUser });
      }
    };
  };
  
  export const logout = () => {
    localStorage.removeItem("currentUser");
    return { type: "LOGOUT" };
  };  