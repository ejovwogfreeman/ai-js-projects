let form = document.getElementById("form");
let title = document.getElementById("title");
let body = document.getElementById("body");

const postBlog = async (blog) => {
  await fetch("https://node-js-7tpa.onrender.com/api/blogs", {
    method: "POST",
    body: JSON.stringify(blog),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  postBlog({ title: title.value, body: body.value });
  setTimeout(() => {
    window.location.replace("index.html");
  }, 3000);
});
