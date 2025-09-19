const text = "clean code"
let i = 0;
let speed = 200;
let kiir = true;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("szoveg").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i == text.length){
    kiir = false;
  }
  if (kiir == false){
    document.getElementById("szoveg").innerHTML += text.substring(i, end);
    i--;
    setTimeout(typeWriter, speed);
  }
  if (i == 0){
    kiir= true;
  }
}

typeWriter();