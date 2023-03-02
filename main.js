let button = document.querySelector(".btn");
let button2 = document.querySelector(".btn2");
let table = document.querySelector(".table");
let tableHeader = document.querySelector(".table_header");
let tableBody = document.querySelector(".table_body");
let tableContainer = document.querySelector(".table_container");
let i = 1;

const fetchFunc = () => {
  const getData = fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((res) => res.slice(0, 10))
    .then((data) => {
      let keysOfArr = Object.keys(data[0]);
      let valuesOfArr = Object.values(data);

      for (let i = 0; i < keysOfArr.length; i++) {
        tableHeader.innerHTML += `<td>${keysOfArr[i]}</td>`;
      }
      for (let i = 0; i < data.length; i++) {
        tableBody.innerHTML += `<tr>
        <td class="column1">${data[i].postId}</td>
        <td class="column2">${data[i].id}</td>
        <td class="column3">${data[i].name}</td>
        <td class="column4">${data[i].email}</td>
        <td class="column5">${data[i].body}</td>
      </tr>`;
      }
    });

  button.style.display = "none";

  return getData;
};

button2.addEventListener("click", () => {
  tableContainer.style.display = "none";
  button.style.display = "block";
});

window.addEventListener("DOMContentLoaded", fetchFunc);

console.log(i);

if (i == 0) {
  i++;
  console.log(i);
} else if (i != 0) {
  button.addEventListener("click", () => {
    tableContainer.style.display = "block";
    console.log("show2");
  });
}
