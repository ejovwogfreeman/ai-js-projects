let id = window.location.href.split("=")[1];

let div = document.getElementById("post-container");

let form = document.getElementById("form");
let title = document.getElementById("title");
let body = document.getElementById("body");

let html = "";
const getBlog = async () => {
  const res = await fetch(`https://node-js-7tpa.onrender.com/api/blogs/${id}`);
  const data = await res.json();
  console.log(data);
  title.value = data.title;
  body.value = data.body;
};

getBlog();

const updateBlog = async (blog) => {
  await fetch(`https://node-js-7tpa.onrender.com/api/blogs/${id}`, {
    method: "PUT",
    body: JSON.stringify(blog),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  updateBlog({ title: title.value, body: body.value });
  setTimeout(() => {
    window.location.replace("index.html");
  }, 3000);
});
