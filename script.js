var close = document.getElementById("close");

var signupForm = document.getElementById("Box");

var SignupBtn = document.querySelector(".btn");
var toggleButton;
var bigWrapper;

function declare() {
  toggleButton = document.querySelector(".toggle-btn");
  bigWrapper = document.querySelector(".big-wrapper");
}
declare();
/*Sign Up Page */
function signUP() {
  SignupBtn.addEventListener("click", () => {
    signupForm.style.display = "block";
  });
}

close.addEventListener("click", () => {
  signupForm.style.display = "none";
});

const main = document.querySelector("main");
let dark = false;
/*Dark Mode with Animation */

/*A Function to toggle animation and delete the orignal page */
function toggelAnimation() {
  dark = !dark;
  //clone wrapper
  let clone = bigWrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);
  //delete old clone after end of animation
  clone.addEventListener("animationend", () => {
    bigWrapper.remove();
    clone.classList.remove("copy");
    declare();
    events();
  });
}

function events() {
  toggleButton.addEventListener("click", toggelAnimation);
}
events();
signUP();
