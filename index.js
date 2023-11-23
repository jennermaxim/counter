let num = document.querySelector(".main .counter .num");
let btn = document.querySelector(".main .counter .btn");
let i = num.innerHTML;

btn.onclick = () => {
  i--;
  num.innerHTML = i;
  num.style.color = "#fff";
  num.style.backgroundColor = "green";
};
