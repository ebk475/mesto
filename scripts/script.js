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

aboutLink.addEventListener('click', open);
popupCloseButton.addEventListener('click', close);
popupOverlay.addEventListener('click', close);
popupSave.addEventListener('click', formSubmitHandler);


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

const сontainerEl = document.querySelector('.elements');
const templateEl = document.querySelector('.template');

function render() {
    const html = elements
        .map((item) => {
            return getItem(item);
        });

    сontainerEl.append(...html);
}

function getItem(item) {
    const newItem = templateEl.content.cloneNode(true);
    const headerEl = newItem.querySelector('.element__name');
    const photoEl = newItem.querySelector('.element__photo');

    photoEl.src = item.src;
    headerEl.textContent = item.name;

    return newItem;
}

render()