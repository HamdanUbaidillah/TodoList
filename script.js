const button = document.querySelector(".button");
const container = document.querySelector(".container");
const display = document.querySelector(".display");

button.addEventListener("click", function () {
  const p = document.createElement("p");
  const guide = document.querySelector(".guide");
  p.innerText = display.value;
  container.insertBefore(p, guide);
  display.value = "";
  p.classList.add("todolist");
  if (p.innerText === "") {
    alert("isi list nya!");
    p.classList.remove("todolist");
  }
  p.addEventListener("click", function () {
    p.style.textDecoration = "line-through";
  });
  p.addEventListener("dblclick", function () {
    p.remove(container);
  });
});
