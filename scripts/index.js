const popupEdit = document.querySelector(".popup_edit");
const profileName = document.querySelector(".profile__name");
const profileMission = document.querySelector(".profile__mission");

const profileButtonEdit = document.querySelector(".profile__button-edit");

const popupBtnCloseEditProfile = document.querySelector(".popup__btn-close-edit-form");
const popupBtnCloseAddForm = document.querySelector(".popup__btn-close-add-form");
const popupBtnCloseZoomPhoto = document.querySelector(".popup__btn-zoom-photo")


const popupBtnSaveProfileData = document.querySelector(".popup__btn-save-edit-form");
const popupBtnSaveAddForm = document.querySelector(".popup__btn-save-add-form");


const popupName = document.querySelector(".popup__name");
const popupJob = document.querySelector(".popup__job");

const templateBox = document.querySelector("#template-box").content;
const element = templateBox.querySelector(".element");
const elements = document.querySelector(".elements");

const btnAddNewElement = document.querySelector(".profile__button-add");
const popupAddCard = document.querySelector(".popup_addCard");
const popupInputElements = document.querySelector(".popup__form-add-card");


const popupPlaceName = document.querySelector(".popup__place-name");
const popupPlaceLink = document.querySelector(".popup__place-link");

const popupPhoto = document.querySelector(".popup_photo");
const popupImage = popupPhoto.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__figcaption");

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




function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

popupBtnCloseEditProfile.addEventListener("click", closePopup);
popupBtnCloseAddForm.addEventListener("click", closePopup);
popupBtnCloseZoomPhoto.addEventListener("click", closePopup);

function closePopup(evt) {
  const popup = evt.target.closest(".popup");
  popup.classList.remove("popup_opened");
}

profileButtonEdit.addEventListener("click", function () {
  openPopup(popupEdit);
  popupName.value = profileName.textContent;
  popupJob.value = profileMission.textContent;
});

popupBtnSaveProfileData.addEventListener("click", saveProfileData);

function saveProfileData(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileMission.textContent = popupJob.value;
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
  newBox
    .querySelector(".element__delete-button")
    .addEventListener("click", deleteCard);
  newBox.querySelector(".element__image").addEventListener("click", zoomImageCard);
  return newBox;
}

function likeNolike(evt) {
  const newBox = evt.target.closest(".element");
  newBox
    .querySelector(".element__button-like")
    .classList.toggle("element__button-like-active");
}

initialCards.forEach((item) => {
  const sixElements = cloneCard(item);
  elements.prepend(sixElements);
});


btnAddNewElement.addEventListener("click", function () {
  openPopup(popupAddCard);
    popupAddCard
      .querySelector(".popup__btn-save")
      .addEventListener("click", addNewElement);
    clearForm();
});



popupBtnSaveAddForm.addEventListener("submit", addNewElement);


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
}


function clearForm() {
  popupInputElements.reset();
}

function deleteCard(evt) {
  const cardToGo = evt.target.closest(".element");
  cardToGo.remove();
}

function zoomImageCard(evt) {
  popupPhoto.classList.add("popup_opened");
  popupImage.src = evt.target.closest(".element__image").src;
  popupCaption.textContent = evt.target.closest(".element__image").alt;
}
