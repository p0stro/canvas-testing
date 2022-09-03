const canvas = document.querySelector("#drawingCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const asteriskPink = document.createElement("img");
const asteriskBabyBlue = document.createElement("img");
asteriskPink.src = "media/asteriskPink.png";
asteriskBabyBlue.src = "media/asteriskBabyBlue.png";

let paintbrush = asteriskPink;

const context = canvas.getContext("2d");

function handleMouseMove(event) {
  const left = event.clientX;
  const top = event.clientY;

  context.drawImage(paintbrush, left, top);
}

function handleClick() {
  if (paintbrush === asteriskPink) {
    paintbrush = asteriskBabyBlue;
  } else {
    paintbrush = asteriskPink;
  }
}

canvas.addEventListener("click", handleClick);
canvas.addEventListener("mousemove", handleMouseMove);
