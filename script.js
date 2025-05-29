let selectedImage = "";

function onRadio({ target }) {
  console.log(target.value);

  document.getElementById("submit-btn").style.background = "#86BC25";
  document.getElementById("submit-btn").style.color = "black";
}
