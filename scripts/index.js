//сделать кнопку закрытия на все элементы с одним CSS  - сейчас заведегны разные чтобы отслеживать действия




/*Задаем переменные всем элементам взаимодействия*/

let popupEditProfile = document.querySelector(".popup__edit"); //  попап редактирования профиля
let openPopupButton = document.querySelector(".open-popup"); // Кнопка редкатирования профиля
let closePopupButton = document.querySelector(".popup__btn-close"); // Крестик закрытия попапа для Edit profile
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


const popupAddNewPlace = document.querySelector('.popup__addCard'); //  попап добавления нового места
const buttonAddNew = document.querySelector('.profile__button-add');
const buttonClosePopUpAddNew = document.querySelector('.popup__btn-close-for-addCard');



const inputName = document.querySelector('.popup__place-name');
const inputLink = document.querySelector('.popup__place-link');



const buttonSaveNewElement = document.querySelector('.popup__btn-save-add-form');
const popupPhoto = document.querySelector('.popup__photo');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__figcaption');


const container = document.querySelector('.popup__container');


//вешаем обработчик и открываем поп-ап

const popup = document.querySelector('.popup');




openPopupButton.addEventListener("click", openPopUp);

function openPopUp() {
  //popupEditProfile.classList.add("popup_opened");//работает
  popup.classList.add("popup_opened");


  nameInput.value = q1.textContent;
  jobInput.value = q2.textContent;
  console.log("Это кнопка редактирования профиля");
}



/*
// Это не работает

const openPopUp = (item, e) => {
  let popup = document.querySelector('.popup__edit');
  if(item.link) {
    popup = document.querySelector('.popup__photo');
    popup.querySelector('.element__image').src = item.link;
  }
  popup.querySelector('.popup__title').textContent = item.name;
  popup.classList.add('popup_opened');
  popup.querySelector('.popup__btn-close').addEventListener('click', closePopUp);
  //popup.addEventListener('click', closePopupByOverlay);
}


*/













// вешаем обработчик и Закрываем и сохраняем данные пользователя поп-ап




closePopupButton.addEventListener("click", closePopUp);
function closePopUp() {

  popupEditProfile.classList.remove("popup_opened");//работает
  //popupPhoto.classList.remove("popup_opened");// это убрать потом

  console.log("Это крестик закрытия формы редактирования профиля");
}



/*
Это не работает

const closePopUp = (e) => {
  const popup = e.target.closest('.popup');
  popup.classList.remove('popup_opened');
  popup.querySelector('.popup__btn-close').removeEventListener('click', closePopUp);
  //popup.removeEventListener('click', closePopupByOverlay);
}

*/






/*  V2 в эом случае функции невозможно переиспользовать

// Открываем поп-ап V2

openPopupButton.addEventListener('click',function(){
  popupEditProfile.classList.add('popup_opened');
  nameInput.value =  q1.textContent;
  jobInput.value = q2.textContent;    
});


// Закрываем и сохраняем данные пользователя поп-ап V2

closePopupButton.addEventListener('click',function(){
  popupEditProfile.classList.remove('popup_opened');

})

*/


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

EditFormSaveButton.addEventListener("click", SaveUserDataInProfile); // новое 2

function SaveUserDataInProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  //popupEditProfile.classList.remove('popup_opened');//работает
  closePopUp();
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
  
  
  // подписка на события
  newBox.querySelector('.element__button-like').addEventListener('click', function (evt) {
    console.log('Тыкнул на сердечко');
  })


  newBox.querySelector('.element__delete-button').addEventListener('click', function (evt) {
    console.log('Тыкнул на корзину');
    const buttonDel = document.querySelector('.element__delete-button');
    const elementToDelete = buttonDel.closest('.element');
    elementToDelete.remove();
  })


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
  //создаем карточку
  const sixElements = cloneCard(item);
  //встраиваем ее в dom
  elements.prepend(sixElements);
});






//Открываем PopUp ADD NEW PLACE


buttonAddNew.addEventListener('click', (evt) => {
  console.log('Хочешь добавить новое фото');
  openPopUpAddNewPlace();//работает


})

// функция открытия поп-апа ADD NEW PLACE
function openPopUpAddNewPlace() {
  popupAddNewPlace.classList.add("popup_opened");
}


//Закрываем поп-ап ADD NEW PLACE
buttonClosePopUpAddNew.addEventListener('click', (evt) => {
  console.log('Закртываем поп-ап ADD NEW');
  closePopUpAddNewPlace(); //работает

})



// функция закрытия поп-апа ADD NEW PLACE
function closePopUpAddNewPlace() {
  popupAddNewPlace.classList.remove("popup_opened");

}



//Кнопка сохранить и отправка нового элемента в DOM

buttonSaveNewElement.addEventListener('click', addUserPlace);

function addUserPlace(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  console.log('Кнопка Сохранить и закрываем поп-ап ADD NEW');
  createUserCard();
  closePopUpAddNewPlace();  
}

//очистка формы

buttonSaveNewElement.addEventListener('click', clearForm);

function clearForm (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  console.log('Очистка формы');
  document.querySelector('.popup__form-add-card').reset();
}

//закрашиваем like

