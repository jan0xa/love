const parentElement = document.getElementById("parentElement");
const showMassage = document.getElementById("showMassage");
const changeColor = document.body.style;
const noBtn = document.getElementById("no");
propose = () => {
  parentElement.style.display = "none";
  showMessage.style.display = "block";
  changeColor.background =
    "linear-gradient(116.82deg, #ff94e7 0%, #27cbff 100%)";
};

// Animate Text with Anim JS
var textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
noBtn.addEventListener("mouseover", () => {
  const randomX = Math.random() * 300 + 50;
  const randomY = Math.random() * 300 + 50;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
