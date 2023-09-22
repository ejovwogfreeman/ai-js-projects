let id = window.location.href.split("=")[1];

let div = document.getElementById("post-container");

let html = "";
const getBlog = async () => {
  const res = await fetch(`https://node-js-7tpa.onrender.com/api/blogs/${id}`);
  const data = await res.json();
  console.log(data);
  html = `
    <div>
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        <a href='update.html?q=${id}'>edit post</a>
    </div>
  `;
  div.innerHTML = html;
};

getBlog();

const deletBlog = async (id) => {
  await fetch(`https://node-js-7tpa.onrender.com/api/blogs/${id}`, {
    method: "DELETE",
  });
  window.location.replace("index.html");
};

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  deletBlog(id);
});
