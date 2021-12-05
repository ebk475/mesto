const aboutLink = document.querySelector(".profile__edit");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close");
const popupSave = popup.querySelector(".popup__save");
const popupForm = popup.querySelector(".popup__form");
const nameInput = popupForm.querySelector(".popup__edit_name");
const aboutInput = popupForm.querySelector(".popup__edit_about");
const nameOutput = document.querySelector(".profile__name");
const aboutOutput = document.querySelector(".profile__about");
const addLink = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_add");
const popupFormAdd = popupAdd.querySelector(".popup__form_add")
const popupAddClose = popupAdd.querySelector(".popup__close_add");
const createButton = popupAdd.querySelector(".popup__create");
const nameAdd = popupAdd.querySelector(".popup__bar_name");
const linkAdd = popupAdd.querySelector(".popup__bar_link");
const сontainerEl = document.querySelector(".elements");
const templateEl = document.querySelector(".template");
const popupImg = document.querySelector(".popup_img");
const popupPhoto = document.querySelector(".popup__photo");
const popupPhotoName = document.querySelector(".popup__photo-name");
const elements = [{
        name: 'Индонезия',
        src: '/images/Индонезия.jpg'
    },
    {
        name: 'Мальдивские острова',
        src: '/images/Мальдивские_острова.jpg'
    },
    {
        name: 'Морская черепаха',
        src: '/images/Морская_черепаха.jpg'
    },
    {
        name: 'Торонто',
        src: '/images/Торонто.jpg'
    },
    {
        name: 'Мальдивы',
        src: '/images/Мальдивы.jpg'
    },
    {
        name: 'Кораллы',
        src: '/images/Кораллы.jpg'
    }
];

function render() {
    const html = elements
        .map((item) => {
            return getItem(item);
        });
    сontainerEl.append(...html);
}

function openAdd() {
    popupAdd.classList.add("popup_opened_add");
}

function closeAdd() {
    popupAdd.classList.remove("popup_opened_add");
}

function handlerAdd(evt) {
    evt.preventDefault();
    const inputName = nameAdd.value;
    const inputLink = linkAdd.value;
    const cardName = getItem({ name: inputName, src: inputLink });
    сontainerEl.prepend(cardName);
    nameAdd.value = '';
    linkAdd.value = '';
    popupAdd.classList.remove("popup_opened_add");
}

function open() {
    popup.classList.add("popup_opened");
    nameInput.value = nameOutput.textContent;
    aboutInput.value = aboutOutput.textContent;
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

function openImg() {
    popupImg.classList.add("open_img")
}

function getItem(item) {
    const newItem = templateEl.content.cloneNode(true);
    const headerEl = newItem.querySelector('.element__name');
    const photoEl = newItem.querySelector('.element__photo');
    photoEl.src = item.src;
    headerEl.textContent = item.name;

    const deleteButton = newItem.querySelector(".element__delete");
    deleteButton.addEventListener("click", deleteCard);

    const likeButton = newItem.querySelector(".element__like");
    likeButton.addEventListener("click", () => likeButton.classList.toggle("element__like_active"));

    photoEl.addEventListener("click", () => {
        openImg(popupImg);
        popupPhoto.src = photoEl.src;
        popupPhoto.alt = headerEl.textContent;
        popupPhotoName.textContent = headerEl.textContent;
    });

    return newItem;
}

function deleteCard(event) {
    const targetEl = event.target;
    const deleteEl = targetEl.closest(".element");
    deleteEl.remove();
}

addLink.addEventListener('click', openAdd);
popupAddClose.addEventListener('click', closeAdd);
popupFormAdd.addEventListener('submit', handlerAdd);
aboutLink.addEventListener('click', open);
popupCloseButton.addEventListener('click', close);
popupForm.addEventListener('submit', formSubmitHandler);
render()