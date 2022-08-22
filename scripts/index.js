const popup = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup__edit");
const popupBtnClose = document.querySelector(".popup__btn-close");
const profileName = document.querySelector(".profile__name");
const profileMission = document.querySelector(".profile__mission");
const profileButtonEdit = document
  .querySelector(".profile__button-edit")
  .addEventListener("click", EditProfile);
const popupBtnSave = document.querySelector(".popup__btn-save");
const popupName = document.querySelector(".popup__name");
const popupJob = document.querySelector(".popup__job");
const templateBox = document.querySelector("#template-box").content;
const element = templateBox.querySelector(".element");
const elements = document.querySelector(".elements");
const btnAddNewElement = document
  .querySelector(".profile__button-add")
  .addEventListener("click", openPopUpAddNew);
const popupAddCard = document.querySelector(".popup__addCard");
const popupPlaceName = document.querySelector(".popup__place-name");
const popupPlaceLink = document.querySelector(".popup__place-link");
const popupPhoto = document.querySelector(".popup__photo");
const popupImage = popupPhoto.querySelector(".popup__image");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function EditProfile() {
  popupEdit.classList.add("popup_opened");
  popupBtnClose.addEventListener("click", closePopup);
  popupName.value = profileName.textContent;
  popupJob.value = profileMission.textContent;
  popupBtnSave.addEventListener("click", saveProfileData);
  console.log("Редактирование профиля");
}

function closePopup(evt) {
  const popup = evt.target.closest(".popup");
  popup.classList.remove("popup_opened");
  console.log("Закрыть попап");
}

function saveProfileData(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileMission.textContent = popupJob.value;
  console.log("Сохранить новые даные");
  closePopup(evt);
}

function cloneCard(item) {
  const newBox = templateBox.querySelector(".element").cloneNode(true);
  const link = newBox.querySelector(".element__image");
  const name = newBox.querySelector(".element__text");
  name.textContent = item.name;
  link.src = item.link;
  link.alt = item.name;

  newBox
    .querySelector(".element__button-like")
    .addEventListener("click", likeNolike);
  function likeNolike() {
    console.log("Сердечко");
    newBox
      .querySelector(".element__button-like")
      .classList.toggle("element__button-like-active");
  }

  newBox
    .querySelector(".element__delete-button")
    .addEventListener("click", deleteCard);
  newBox
    .querySelector(".element__image")
    .addEventListener("click", zoom);

  return newBox;
}

initialCards.forEach((item) => {
  const sixElements = cloneCard(item);
  elements.prepend(sixElements);
});

function openPopUpAddNew() {
  popupAddCard.classList.add("popup_opened");
  popupAddCard
    .querySelector(".popup__btn-close")
    .addEventListener("click", closePopup);
  popupAddCard
    .querySelector(".popup__btn-save")
    .addEventListener("click", addNewElement);
  console.log("Попап добавления нового элемента открыт");
}

function addNewElement(evt) {
  evt.preventDefault();
  let item = {
    name: popupPlaceName.value,
    link: popupPlaceLink.value,
    alt: popupPlaceName.value,
  };
  const userCard = cloneCard(item);
  elements.prepend(userCard);
  closePopup(evt);
  popupAddCard
    .querySelector(".popup__btn-save")
    .addEventListener("click", clearForm);
  console.log(
    "Кнопка Сохранить: закрываем поп-ап ADD NEW + добавляем новый элемент"
  );
}

function clearForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  console.log("Очистка формы");
  document.querySelector(".popup__form-add-card").reset();
}

function deleteCard(evt) {
  console.log("корзина");
  const cardToGo = evt.target.closest(".element");
  cardToGo.remove();
}

function zoom(evt) {
  popupPhoto.classList.add("popup_opened");
  popupPhoto
    .querySelector(".popup__btn-close")
    .addEventListener("click", closePopup);
  popupImage.src = evt.target.closest(".element__image").src;
  console.log("Тыкнул на фото");
}
