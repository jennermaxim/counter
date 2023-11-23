let main = document.querySelector(".main");
main.innerHTML = `
  <div class="counter">
    <div class="txt">START</div>
    <div class="timer">
      <div class="num">120</div>
      <div class="min">7200</div>
    </div>
    <button class="btn">Start</button>
    <audio src="rest.mp3" class="restaudio"></audio>
    <audio src="start.mp3" class="startaudio"></audio>
  </div>
`;

let txt = document.querySelector(".main .counter .txt");
let num = document.querySelector(".main .counter .num");
let min = document.querySelector(".main .counter .min");
let btn = document.querySelector(".main .counter .btn");
let restAudio = document.querySelector(".main .counter .restaudio");
let startAudio = document.querySelector(".main .counter .startaudio");
let i = num.innerHTML;
let a = min.innerHTML;

btn.onclick = () => {
  startAudio.play();
  txt.innerHTML = "WORKING";
  txt.style.color = "#fff";
  txt.style.backgroundColor = "green";
  num.style.color = "#fff";
  num.style.backgroundColor = "green";
  setMin();
  setCounter();
};

let setMin = () => {
  let mins = setInterval(() => {
    a--;
    min.innerHTML = a;
    if (a === 0) {
      clearInterval(mins);
    }
  }, 1000);
};

let setCounter = () => {
  let counters = setInterval(() => {
    i--;
    num.innerHTML = i;

    switch (i) {
      case 95:
        let rest = setInterval(() => {
          restAudio.play();
          setTimeout(() => {
            clearInterval(rest);
          }, 5000);
        }, 1000);

        txt.innerHTML = "REST";
        txt.style.color = "#000";
        num.style.color = "#000";
        txt.style.backgroundColor = "yellow";
        num.style.backgroundColor = "yellow";
        break;

      case 90:
        let start = setInterval(() => {
          startAudio.play();
          setTimeout(() => {
            clearInterval(start);
          }, 7000);
        }, 1000);

        txt.innerHTML = "WORKING";
        txt.style.color = "#fff";
        num.style.color = "#fff";
        txt.style.backgroundColor = "green";
        num.style.backgroundColor = "green";
        break;

      case 65:
        let rest2 = setInterval(() => {
          restAudio.play();
          setTimeout(() => {
            clearInterval(rest2);
          }, 5000);
        }, 1000);

        txt.innerHTML = "REST";
        txt.style.color = "#000";
        num.style.color = "#000";
        txt.style.backgroundColor = "yellow";
        num.style.backgroundColor = "yellow";
        break;

      case 60:
        let start2 = setInterval(() => {
          startAudio.play();
          setTimeout(() => {
            clearInterval(start2);
          }, 7000);
        }, 1000);

        txt.innerHTML = "WORKING";
        txt.style.color = "#fff";
        num.style.color = "#fff";
        txt.style.backgroundColor = "green";
        num.style.backgroundColor = "green";
        break;

      case 35:
        let rest3 = setInterval(() => {
          restAudio.play();
          setTimeout(() => {
            clearInterval(rest3);
          }, 5000);
        }, 1000);

        txt.innerHTML = "REST";
        txt.style.color = "#000";
        num.style.color = "#000";
        txt.style.backgroundColor = "yellow";
        num.style.backgroundColor = "yellow";
        break;

      case 30:
        let start3 = setInterval(() => {
          startAudio.play();
          setTimeout(() => {
            clearInterval(start3);
          }, 7000);
        }, 1000);

        txt.innerHTML = "WORKING";
        txt.style.color = "#fff";
        num.style.color = "#fff";
        txt.style.backgroundColor = "green";
        num.style.backgroundColor = "green";
        break;

      case 0:
        txt.innerHTML = "DONE";
        txt.style.backgroundColor = "red";
        num.style.backgroundColor = "red";
        min.style.backgroundColor = "#000";
        clearInterval(counters);
    }
  }, 60000);
};
