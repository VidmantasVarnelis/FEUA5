/* eslint-disable no-undef */
if (document.cookie === "" || !document.cookie.includes("token")) {
  window.location.replace("./login.html");
}
