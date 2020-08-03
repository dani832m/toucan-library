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

    // Click on Flying Noisy Toucan
    const flyingToucanClicked = () => {
      const toucanClickedSound = document.createElement("audio");
      toucanClickedSound.setAttribute("src", "toucan-library/sounds/toucan-clicked-sound.wav");

      toucanDiv.remove();
      toucanSound.pause();
      toucanClickedSound.play();
    };

    document.querySelector(".flying-toucan-div").addEventListener("click", flyingToucanClicked);

    setTimeout(() => {
      toucanDiv.remove();
    }, 6000);
  } else return;
};

window.addEventListener("keydown", flyLittleToucan);

// ASCII Toucan Text in Console
const asciiArt =
  '\n  ,d\n  88\nMM88MMM ,adPPYba,  88       88  ,adPPYba, ,adPPYYba, 8b,dPPYba,\n  88   a8"     "8a 88       88 a8"     "" ""     `Y8 88P\'   `"8a\n  88   8b       d8 88       88 8b         ,adPPPPP88 88       88\n  88,  "8a,   ,a8" "8a,   ,a88 "8a,   ,aa 88,    ,88 88       88\n  "Y888 `"YbbdP"\'   `"YbbdP\'Y8  `"Ybbd8"\' `"8bbdP"Y8 88       88\n';

const asciiToucan = (e) => {
  if (e.keyCode == 32 && e.ctrlKey == true) {
    console.info(
      "%c" + asciiArt,
      "color: rgb(154, 148, 26); font-size: 0.7rem; text-shadow: 0.1rem 0.1rem 0.1rem rgb(154, 148, 26)"
    );

    setTimeout(() => {
      console.clear();
    }, 5000);
  } else return;
};

window.addEventListener("keydown", asciiToucan);
