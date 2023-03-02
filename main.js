let button = document.querySelector(".btn");
let table = document.querySelector(".table");
let tableHeader = document.querySelector(".table_header");
let tableBody = document.querySelector(".table_body");

const fetchFunc = () => {
  const getData = fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => {
      let keysOfArr = Object.keys(data[0]);
      let valuesOfArr = Object.values(data);

      console.log(data);
      for (let i = 0; i < keysOfArr.length; i++) {
        tableHeader.innerHTML += `<td>${keysOfArr[i]}</td>`;
        console.log(keysOfArr[i]);
      }
      for (let i = 0; i < data.length; i++) {
        tableBody.innerHTML += `<tr>
        <td>${data[i].postId}</td>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        <td>${data[i].body}</td>
      </tr>`;
      }
    });

  return getData;
};

button.addEventListener("click", fetchFunc);
