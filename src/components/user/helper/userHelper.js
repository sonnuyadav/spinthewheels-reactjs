import { API } from "../../app/helper/appHelper";

export const userToken = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (
    localStorage.getItem("userToken") &&
    localStorage.getItem("userToken") !== undefined &&
    localStorage.getItem("userToken") !== "undefined" &&
    localStorage.getItem("userToken") !== null
  ) {
    return JSON.parse(localStorage.getItem("userToken"));
  } else {
    return null;
  }
};

export const signup = (user) => {
  return fetch(`${API}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signin = (user) => {
  return fetch(`${API}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      // cookie.set("userToken", response.headers.get("userToken"));
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const storeUser = (data, next) => {
  if (typeof window != "undefined") {
    localStorage.setItem("user", JSON.stringify(data.result));
    next();
  }
};
export const getUser = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};

export const storeToken = (data, next) => {
  if (typeof window != "undefined") {
    localStorage.setItem("userToken", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    // localStorage.removeItem("jwt");
    localStorage.removeItem("userToken");
    sessionStorage.clear();
    next();
    /* return fetch(`${API}/signout`, {
            method: "GET",
        })
            .then((response) => console.log("Signout Success"))
            .catch((err) => console.log(err));*/
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("userToken")) {
    return JSON.parse(localStorage.getItem("userToken"));
  } else {
    return false;
  }
};
