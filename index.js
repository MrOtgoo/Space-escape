const error = document.getElementById("error-massage");
const namet = document.getElementById("nametext");
const abuttton = document.getElementById("btn1");

abuttton.addEventListener("click", () => {
  if (namet.value.length == 0) {
    error.textContent = "Please enter your name";
  } else {
    localStorage.setItem("playerName", namet.value);
    error.textContent = "";
    abuttton.setAttribute("href", "./game/index.html");
    abuttton.click();
  }
});
