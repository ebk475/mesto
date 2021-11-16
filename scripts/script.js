const aboutLink = document.querySelector(".profile__edit");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close");
const popupOverlay = popup.querySelector(".popup__overlay");
const popupSave = popup.querySelector(".popup__save");
const popupForm = popup.querySelector(".popup__form");
const nameInput = popupForm.querySelector(".popup__name");
const aboutInput = popupForm.querySelector(".popup__about");

function open() {
    popup.classList.add("popup__opened");
}

function close() {
    popup.classList.remove("popup__opened");
}

if (aboutLink) {
    aboutLink.addEventListener('click', open);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    const Name = document.querySelector(".profile__name");
    const About = document.querySelector(".profile__about");
    Name.textContent = nameInput.value
    About.textContent = aboutInput.value
    popup.classList.remove("popup__opened");
}
popupCloseButton.addEventListener('click', close);
popupOverlay.addEventListener('click', close);
popupSave.addEventListener('click', formSubmitHandler);