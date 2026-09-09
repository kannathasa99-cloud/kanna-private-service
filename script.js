const picker = document.getElementById("picker");
const hex = document.getElementById("hex");
picker.addEventListener("input", () => {
  hex.textContent = picker.value.toUpperCase();
});
function copyColour(){
  navigator.clipboard.writeText(picker.value.toUpperCase());
  alert("Colour code copied!");
}
