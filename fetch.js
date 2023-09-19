// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data.messages));

let blogs = document.querySelector(".blogs");
const getData = async () => {
  let html = "";
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  //   console.log(data);
  data.forEach((blog) => {
    html += `
        <div class='blog'>
            <h4>${blog.title}</h4>
            <p>${blog.body}</p>
        </div>
    `;
  });
  //   console.log(html);
  blogs.innerHTML = html;
};

getData();

// document.getElementById("btn").addEventListener("click", () => getData());
