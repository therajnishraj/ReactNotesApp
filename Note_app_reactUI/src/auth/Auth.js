
export const doLogin = (data) => {
  sessionStorage.setItem("token", JSON.stringify(data));
};
export const doLogout = () => {
  sessionStorage.removeItem("token");
};

export const isLogin = () => {
  let token = sessionStorage.getItem("token");
  return token == null ? false : true;
};
