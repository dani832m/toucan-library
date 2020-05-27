/********** UI ELEMENTS **********/

// Toggle Navbar
const toggleNavbar = () => {
  if (document.querySelector(".navbar-list").style.display === "none") {
    document.querySelector(".navbar-list").style.display = "flex";
  } else {
    document.querySelector(".navbar-list").style.display = "none";
  }
};

document.querySelector(".navbar-toggle").addEventListener("click", toggleNavbar);

/********** EASTER EGGS **********/

// Flying Noisy Toucan
const flyLittleToucan = (e) => {
  if (e.keyCode == 84 && e.altKey == true && e.ctrlKey == true) {
    const toucanDiv = document.createElement("div");
    toucanDiv.classList.add("flying-toucan-div");
    document.body.prepend(toucanDiv);

    const toucanImg = document.createElement("img");
    toucanImg.classList.add("flying-toucan-img");
    toucanImg.setAttribute("src", "toucan-library/img/toucan-img.gif");
    toucanImg.setAttribute("alt", "Flying Toucan!");
    document.querySelector(".flying-toucan-div").prepend(toucanImg);

    const toucanSound = document.createElement("audio");
    toucanSound.setAttribute("src", "toucan-library/sounds/toucan-sound.wav");
    toucanSound.play();

    setTimeout(() => {
      toucanDiv.remove();
    }, 6000);
  } else return;
};

window.addEventListener("keydown", flyLittleToucan);
