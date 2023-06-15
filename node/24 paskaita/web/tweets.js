/* eslint-disable no-undef */
const token = Cookies.get("token");

if (!token) {
  window.location.replace("./login.html");
}

const API_BASE = "http://localhost:8080";

const myTweets = document.getElementById("my-tweets");
const allTweetsEl = document.getElementById("all-tweets");

const getUserTweets = async () => {
  try {
    const response = await fetch(`${API_BASE}/user-tweets`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

const getAllTweets = async () => {
  try {
    const response = await fetch(`${API_BASE}/tweets`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

const renderTweets = (tweets, output) => {
  tweets.forEach((tweet) => {
    const container = document.createElement("div");
    const heading = document.createElement("h4");
    const content = document.createElement("p");

    container.classList.add("tweet");
    heading.textContent = tweet.name || "";
    content.textContent = tweet.content;
    if (tweet.name) {
      container.append(heading);
    }
    container.append(content);
    output.append(container);
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  const userTweets = await getUserTweets();
  const allTweets = await getAllTweets();

  renderTweets(userTweets, myTweets);
  renderTweets(allTweets, allTweetsEl);
  if (userTweets.error) {
    window.location.replace("./login.html");
  }
});

document.getElementById("logout").addEventListener("click", () => {
  Cookies.remove("token");
  window.location.replace("./login.html");
});
