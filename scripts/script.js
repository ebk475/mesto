const aboutLink = document.querySelector(".profile__edit");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close");
const popupOverlay = popup.querySelector(".popup__overlay");
const popupSave = popup.querySelector(".popup__save");
const popupForm = popup.querySelector(".popup__form");
const nameInput = popupForm.querySelector(".popup__edit_name");
const aboutInput = popupForm.querySelector(".popup__edit_about");
const nameOutput = document.querySelector(".profile__name");
const aboutOutput = document.querySelector(".profile__about");

function open() {
    popup.classList.add("popup_opened");
    nameOutput.textContent = nameInput.value;
}

function close() {
    popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameOutput.textContent = nameInput.value;
    aboutOutput.textContent = aboutInput.value;
    popup.classList.remove("popup_opened");
}

aboutLink.addEventListener('click', open);
popupCloseButton.addEventListener('click', close);
popupOverlay.addEventListener('click', close);
popupForm.addEventListener('submit', formSubmitHandler);