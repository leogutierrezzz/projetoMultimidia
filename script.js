let time = 3000,
  currentImageIndex = 0,
  images = document.querySelectorAll("#slider img"),
  max = images.length;

  console.log(images);

function nextImage(){

    images[currentImageIndex].classList.remove("selected");

    currentImageIndex++;

    if(currentImageIndex >= max){
        currentImageIndex = 0;
    }

    images[currentImageIndex].classList.add("selected");
}

function start(){
   setInterval(() => {
    nextImage()
   }, time)
}

window.addEventListener("load", start);

window.sr = ScrollReveal({ reseat: true});

sr.reveal('#produtos', { duration: 10000});
sr.reveal('#descricao', { duration: 10000});
sr.reveal('#videos', { duration: 10000});
sr.reveal('#bloco-espresso', {rotate:{ x:0, y:80, z:0}, duration: 1000});
sr.reveal('#bloco-cappuccino', {rotate:{ x:0, y:80, z:0}, duration: 5000});
sr.reveal('#bloco-latte', {rotate:{ x:0, y:80, z:0}, duration: 10000});
sr.reveal('#bloco-macchiato', {rotate:{ x:0, y:80, z:0}, duration: 15000});
sr.reveal('#bloco-mocha', {rotate:{ x:0, y:80, z:0}, duration: 20000});
sr.reveal('#bloco-brasileirinho', {rotate:{ x:0, y:80, z:0}, duration: 25000});