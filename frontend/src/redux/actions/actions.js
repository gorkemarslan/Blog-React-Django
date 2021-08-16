import axios from "axios";

export const login = (email, password) => {
  return function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    axios
      .post("http://127.0.0.1:8000/auth/jwt/create/", body, config)
      .then((response) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "LOGIN_FAIL",
        });
      });
  };
};

export const logout = () => {
  return function (dispatch) {
    dispatch({
      type: "LOGOUT",
    });
  };
};

export const verifyTokens = () => {
  return function (dispatch) {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      const body = JSON.stringify({ token: localStorage.getItem("access") });

      axios
        .post("http://127.0.0.1:8000/auth/jwt/verify/", body, config)
        .then((response) => {
          console.log(response);
          console.log(response.data);
          console.log(response.data.code);
          if (response.data.code !== "token_not_valid") {
            dispatch({
              type: "AUTHENTICATION_SUCCESS",
            });
            getUserAccountWithToken();
          } else {
            dispatch({
              type: "AUTHENTICATION_FAIL",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch({
            type: "AUTHENTICATION_FAIL",
          });
        });
    } else {
      dispatch({
        type: "AUTHENTICATION_FAIL",
      });
    }
  };
};

export const getUserAccountWithToken = () => {
  return function (dispatch) {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
          Accept: "application/json",
        },
      };

      axios
        .post("http://127.0.0.1:8000/auth/jwt/verify/", config)
        .then((response) => {
          dispatch({
            type: "GET_USER_ACCOUNT_SUCCESS",
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
          dispatch({
            type: "GET_USER_ACCOUNT_FAIL",
          });
        });
    } else {
      dispatch({
        type: "GET_USER_ACCOUNT_FAIL",
      });
    }
  };
};
