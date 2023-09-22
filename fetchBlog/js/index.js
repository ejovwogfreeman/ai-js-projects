let div = document.getElementById("container");
let loading = document.getElementById("loading");

let html = "";
const getBlogs = async () => {
  const res = await fetch("https://node-js-7tpa.onrender.com/api/blogs");
  const data = await res.json();

  data.forEach((blog) => {
    html += `
        <div>
            <h3>${blog.title}</h3>
            <p>${blog.body.slice(0, 150)}..<a href='details.html?q=${
      blog._id
    }'>read more</a></p>
        </div>
    `;
  });
  div.innerHTML = html;
};

getBlogs();
