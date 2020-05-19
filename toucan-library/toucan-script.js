const flyLittleToucan = (e) => {
  if (e.keyCode == 84) {
    const toucanDiv = document.createElement("div");
    toucanDiv.classList.add("toucan-div");
    document.body.prepend(toucanDiv);

    const toucanImg = document.createElement("img");
    toucanImg.classList.add("toucan-img");
    toucanImg.setAttribute("src", "toucan-library/toucan-img.gif");
    toucanImg.setAttribute("alt", "Flying Toucan!");
    document.querySelector(".toucan-div").prepend(toucanImg);

    const toucanSound = document.createElement("audio");
    toucanSound.setAttribute("src", "toucan-library/toucan-sound.wav");
    toucanSound.play();

    setTimeout(() => {
      toucanDiv.remove();
    }, 6000);
  } else return;
};

window.addEventListener("keydown", flyLittleToucan);
