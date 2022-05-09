const fancyText = document.querySelector(".fancyText");
const hoverChar = document.querySelector(".hoverChar");
const showOf = document.querySelector(".showOf");
const showOff = document.querySelector(".showOff");
const ch = "abcdefghijklmnopqrstuvwxyz0123456789@.";
fancyText.addEventListener("keydown", function (e) {
  showOf.innerHTML = ch.indexOf(e.key.toLowerCase()) >= 0 ? e.key : "";
  showOf.classList.remove("showOff");
  void showOf.offsetWidth;
  showOf.classList.add("showOff");
});
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
