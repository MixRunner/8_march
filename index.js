const popup = document.querySelector(".popup");
const openButton = document.querySelector(".open-button");
const closeButton = document.querySelector(".close-button");


openButton.addEventListener("click", handlePopupOpen);
closeButton.addEventListener("click", handlePopupClose);

closeButton.addEventListener("keydown", onEscapePress);


function handlePopupOpen(){
  popup.classList.add("popup-open");
  openButton.disabled = true;
}

function handlePopupClose(){
  popup.classList.remove("popup-open");
  openButton.disabled = false;
}

function onEscapePress(event){
  console.log(event.code);
}