let button = document.querySelector("button");
let box = document.querySelector(".box");
let texts = document.querySelectorAll(".text h1");

button.addEventListener("click", function () {
  let c1 = Math.floor(Math.random() * 127 + 127);
  let c2 = Math.floor(Math.random() * 127 + 127);
  let c3 = Math.floor(Math.random() * 127 + 127);

  box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

  texts[0].textContent = `R : ${c1}`;
  texts[1].textContent = `G : ${c2}`;
  texts[2].textContent = `B : ${c3}`;
});
