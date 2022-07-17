//сделать кнопку закрытия на все элементы с одним CSS  - сейчас заведегны разные чтобы отслеживать действия


const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector(".popup__edit"); //  попап редактирования профиля
const popupAddNewPlace = document.querySelector('.popup__addCard'); //  попап добавления нового места

const editProfileButton = document.querySelector(".open-popup"); // Кнопка редкатирования профиля
const closePopupButton = document.querySelector(".popup__btn-close"); // Крестик закрытия попапа для Edit profile



//let closePopupButtonAddForm = document.querySelector(".popup__btn-close-for-addCard"); // Крестик закрытия попапа для AddCard

/* Находим формы в полях данных из формы*/

let EditFormElement = document.querySelector(".popup__container-editProfile"); // Форма Редактирвоания профиля
let EditFormSaveButton = document.querySelector(".popup__btn-save-edit-form"); // Кнопка сохранения в редактиврования профиля
let q1 = document.querySelector(".profile__name");
let q2 = document.querySelector(".profile__mission");
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__job");


const templateBox = document.querySelector('#template-box').content;
const element = templateBox.querySelector('.element');
const elements = document.querySelector('.elements');

const addElementButton = document.querySelector('.profile__button-add');



const buttonClosePopUpAddNew = document.querySelector('.popup__btn-close-for-addCard');



const inputName = document.querySelector('.popup__place-name');
const inputLink = document.querySelector('.popup__place-link');



const buttonSaveNewElement = document.querySelector('.popup__btn-save-add-form');
const popupPhoto = document.querySelector('.popup__photo');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__figcaption');


const container = document.querySelector('.popup__container');






editProfileButton.addEventListener("click", openPopUp);

function openPopUp() {
  popup.classList.add("popup_opened");
  popup.querySelector('.popup__btn-close').addEventListener('click', closePopup);
  nameInput.value = q1.textContent;
  jobInput.value = q2.textContent;
  console.log("Это кнопка редактирования профиля");
}

//closePopupButton.addEventListener("click", closePopup); // обработчик убран в функцию открытия, чтобы не утекала память










/*
function closePopup() {
  popup.classList.remove("popup_opened");
  console.log("закрыли форму редактирования профиля");
}
*/


const closePopup = (evt) => {
  const popup = evt.target.closest('.popup');
  popup.classList.remove('popup_opened');
  popup.querySelector('.popup__btn-close').removeEventListener('click', closePopup);
}













EditFormSaveButton.addEventListener("click", SaveUserDataInProfile); // новое 2

function SaveUserDataInProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  closePopup();
  q1.textContent = nameInput.value;
  q2.textContent = jobInput.value;
  console.log("Это кнопка сохранения и отправики новых данных в форму");
}


// 6 карточек из коробки

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// Создаем шаблон карточки


/*
function cloneCard({ name, link }) {
  const newBox = templateBox.querySelector(".element").cloneNode(true); // Обращение к элементам тега
  newBox.querySelector(".element__image").src = link;
  newBox.querySelector(".element__image").alt = name;
  newBox.querySelector(".element__text").textContent = name;
  
  
  // подписка на события
  newBox.querySelector('.element__button-like').addEventListener('click', function (evt) {
    console.log('Тыкнул на сердечко');
    evt.target.classList.toggle('element__button-like-active');

    // спросить как передевать данные в JS если добавить класс в СSS в виде .active и можно ли использовать toggle
  })


  newBox.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    console.log('Тыкнул на корзину');
    const buttonDel = document.querySelector('.element__delete-button');
    const elementToDelete = buttonDel.closest('.element');
    elementToDelete.remove();
  })



  newBox.querySelector('.element__image').addEventListener('click', zoom)

  return newBox;
}


*/

//TECT



function cloneCard(item) {
  const newBox = templateBox.querySelector(".element").cloneNode(true); // Обращение к элементам тега
  const link = newBox.querySelector(".element__image");
  //const alt = newBox.querySelector(".element__image");
  const name = newBox.querySelector(".element__text");
  name.textContent = item.name;
  link.src = item.link;
  link.alt = item.name;
  
  
  // подписка на события
  newBox.querySelector('.element__button-like').addEventListener('click', like);
  newBox.querySelector('.element__delete-button').addEventListener('click', basket);

  link.addEventListener('click', function() {
    popupImage.src = link.src;
    popupCaption.textContent = item.name;
    popupPhoto.classList.add("popup_opened");
  })

  return newBox;
}

function createUserCard() {
  
  let item = {
    name: inputName.value,
    link: inputLink.value,
    alt: inputName.value,
  }
  const userCard = cloneCard(item);
  elements.prepend(userCard);
}


// вставляем 6 карточек

initialCards.forEach((item) => {
  const sixElements = cloneCard(item); //создаем переменную для элементов
  elements.prepend(sixElements); //встраиваем в dom
});

//Открываем PopUp ADD NEW PLACE

addElementButton.addEventListener('click', (evt) => {
  console.log('Хочешь добавить новое фото');
  openPopUpAddNewPlace();
})


// функция открытия поп-апа ADD NEW PLACE
function openPopUpAddNewPlace() {
  popupAddNewPlace.classList.add("popup_opened");
  popupAddNewPlace.querySelector('.popup__btn-close').addEventListener('click', closePopup);

}

/*
// Обработчик и функция закртыия поп-ап ADD NEW PLACE - обработчик засунул в функцию открытия + функция одна

buttonClosePopUpAddNew.addEventListener('click', (evt) => {
  console.log('Закртываем поп-ап ADD NEW');
  //closePopUpAddNewPlace(); //работает
  closePopup();
})

// функция закрытия поп-апа ADD NEW PLACE
function closePopUpAddNewPlace() {
  popupAddNewPlace.classList.remove("popup_opened");
}

*/





//Кнопка сохранить и отправка нового элемента в DOM

buttonSaveNewElement.addEventListener('click', addUserPlace);

function addUserPlace(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  console.log('Кнопка Сохранить и закрываем поп-ап ADD NEW');
  createUserCard();
  //closePopUpAddNewPlace();  
  closePopup();
}

//очистка формы

buttonSaveNewElement.addEventListener('click', clearForm);

function clearForm (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  console.log('Очистка формы');
  document.querySelector('.popup__form-add-card').reset();
}

//закрашиваем like при событии клик

function like (evt) {
  evt.target.classList.toggle('element__button-like-active');
}

//basket - удаление родителя при клике на коризну элемента

function basket(evt) {
  console.log('Тыкнул на корзину');
  const elementToDelete = this.parentElement;
  elementToDelete.remove();
}