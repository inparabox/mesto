/*Задаем переменные всем элементам взаимодействия*/

let popupEditProfile = document.querySelector('.popup__edit'); //  попап редактирования профиля
let openPopupButton = document.querySelector('.open-popup'); // Кнопка редкатирования профиля 
let closePopupButton = document.querySelector('.popup__btn-close'); // Крестик закрытия попапа для Edit profile
let closePopupButtonAddForm = document.querySelector('.popup__btn-close-for-addCard'); // Крестик закрытия попапа для AddCard


/* Находим формы в полях данных из формы*/

let EditFormElement = document.querySelector(".popup__container-editProfile"); // Форма Редактирвоания профиля
let EditFormSaveButton = document.querySelector(".popup__btn-save-edit-form");  // Кнопка сохранения в редактиврования профиля


let q1 = document.querySelector(".profile__name");
let q2 = document.querySelector(".profile__mission");

let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__job");


/* открываем поп-ап V1 */

openPopupButton.addEventListener('click', openPopUp);

function openPopUp() {
    popupEditProfile.classList.add('popup_opened');
    nameInput.value =  q1.textContent;
    jobInput.value = q2.textContent;    
    console.log('Это кнопка редактирования профиля');
  };
 

/* открываем поп-ап V2

openPopupButton.addEventListener('click',function(){
  popupEditProfile.classList.add('popup_opened');
  nameInput.value =  q1.textContent;
  jobInput.value = q2.textContent;    
});

*/


/* Закрывакем поп-ап V1*/


closePopupButton.addEventListener('click',closePopUp);

function closePopUp() {
  popupEditProfile.classList.remove('popup_opened');
  console.log('Это крестик закрытия формы редактирования профиля')

};



/* Закрываем и сохраняем данные пользователя поп-ап V2

closePopupButton.addEventListener('click',function(){
  popupEditProfile.classList.remove('popup_opened');

})

*/

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»



EditFormSaveButton.addEventListener('click', SaveUserDataInProfile); // новое 2

function SaveUserDataInProfile (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  /*popupEditProfile.classList.remove('popup_opened');*/
  closePopUp();
  q1.textContent = nameInput.value;
  q2.textContent = jobInput.value; 
  console.log('Это кнопка сохранения и отправики новых данных в форму')
}

/*

EditFormElement.addEventListener('submit', SaveUserDataInProfile); 

// Выберите элементы, куда должны быть вставлены значения полей
function SaveUserDataInProfile (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  //popupEditProfile.classList.remove('popup_opened');
  closePopUp();
  q1.textContent = nameInput.value;
  q2.textContent = jobInput.value; 
  console.log('Это кнопка сохраненрия и отправики новых данных в форму')
}
*/






const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Вид на заснеженные и зеленые склоны горы Архыз'
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



// template элементы


const elements = document.querySelector('.elements'); // обращение к полю куда будет вставлен template элемент

/*
//Вставляем по одной картинке

newBox.querySelector('.element__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
newBox.querySelector('.element__text').textContent = 'Архыз';
elements.append(newBox);
*/


/*
// Используем массив и forEach для вставки всех элементов из массива
// в этом коде сразу несколько действий , в чатике все делаеют не так, говорят ревьюверы просят это разделить, хотя примеры в тренажере давали именно такие

initialCards.forEach(function (element){
  const newBox = boxTemplate.querySelector('.element').cloneNode(true); // клонируем содержимое тега 
  newBox.querySelector('.element__image').src = element.link;
  newBox.querySelector('.element__image').alt = element.alt;
  newBox.querySelector('.element__text').textContent = element.name;
  elements.append(newBox);

})
*/

//теперь нужно разбить функцию на 3: 1) клон карточки 2) добавление карточки на страницу 3) forEach
const boxTemplate = document.querySelector('#template-box').content; // Обращение к template элементу

// Создаем шаблон карточки 
function cloneCard({ name, link }) {
  const newBox = boxTemplate.querySelector('.element').cloneNode(true); // Обращение к элементам тега   
  newBox.querySelector('.element__image').src = link;
  newBox.querySelector('.element__text').textContent = name;
  // подписка на события
  return newBox;
}

// вставляем 6 карточек

initialCards.forEach((name, link) => {
  //создаем карточку
  const element = cloneCard(name, link) 
  //встраиваем ее в dom
  elements.prepend(element)
})







// Добавляем PopUp для кнопки + открываем

let popupAddCard = document.querySelector('.popup__addCard'); // Поп-ап добавления нового элемента
let addCard = document.querySelector('.profile__button-add'); // Кнопка добавления нового элемента

addCard.addEventListener('click', openPopUpAdd);

function openPopUpAdd() {
  popupAddCard.classList.add('popup_opened');  
  console.log('Это кнопка плюс');
  };

  /* Закрывакем поп-ап addCard */

  closePopupButtonAddForm.addEventListener('click',closeAddForm);

  function closeAddForm() {
    console.log('Это крестик закрытия в форме добавления нового фото');
    popupAddCard.classList.remove('popup_opened');
  
  };

 

// Добавляем возможность добавить новую карточку пользователю

let AddCardFormElement = document.querySelector(".popup__container-addCard"); // форма добавления новой карточки
let AddFormSaveButton = document.querySelector(".popup__btn-save-add-form");  // Кнопка сохранения в форме новой карточки



//


let UserElement = document.querySelector('.element') ;





AddFormSaveButton.addEventListener('click', AddUserCard); 

/*
// попытка 6


let UserInputName = document.querySelector(".popup__place-name");
let UserInputPhoto = document.querySelector(".popup__place-image");
let UserCardName = document.querySelector(".element__text");
let UserCardPhoto = document.querySelector(".element__image");



// вставляем карточку в DOM
function AddUserCard(evt) {
  console.log('Check one two'); //  работает
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  
  const cardInfo = {
    name: UserInputName.value,
    link: UserInputPhoto.value,
  }

  const newCard = cloneCard(cardInfo);

  elements.prepend(newCard);
  closeAddForm(); // закрываем форму
  console.log(newCard);
  
}
*/

// попытка 6_1


let UserInputName = document.querySelector(".popup__place-name");
let UserInputPhoto = document.querySelector(".popup__place-image");
let UserCardName = document.querySelector(".element__text");
let UserCardPhoto = document.querySelector(".element__image");



// вставляем карточку в DOM
function AddUserCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы

  const cardInfo = {
    name: UserInputName.value,
    link: UserInputPhoto.value,
  }

  const userCard = cloneCard(cardInfo);
  elements.prepend(userCard);
  closeAddForm(); // закрываем форму
}



/* попытка 7-0
let UserInputName = document.querySelector(".popup__place-name");
let UserInputPhoto = document.querySelector(".popup__place-image");
let UserCardName = document.querySelector(".element__text");
let UserCardPhoto = document.querySelector(".element__image");


function CreatUserCard() {
  const userCard = cloneCard(UserCardName, UserCardPhoto);
  UserCardName.textContent = UserInputName.value;
  UserCardPhoto.src = UserInputPhoto.value;
  return userCard;
  
}

// вставляем карточку в DOM
function AddUserCard(evt) {
  console.log('Check one two'); //  работает
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  CreatUserCard();
  elements.prepend(userCard);
  closeAddForm(); // закрываем форму

}

*/





/* попытка 8
// создаем элемент - новая добавлющаяся карточка с кнопки


let UserInputName = document.querySelector(".popup__place-name");
let UserInputPhoto = document.querySelector(".popup__place-image");


// вставляем карточку в DOM
function AddUserCard(evt) {
  console.log('Check one two'); //  работает
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  const cardInfo = {
    name: UserInputName.value,
    link: UserInputPhoto.value,
  }
  
  // Шаблон карточки пользователя
  const newUserCard = cloneCard(cardInfo);
  elements.prepend(newUserCard);
  closeAddForm(); // закрываем форму

}

*/







/*
 //это работает
function AddUserCard (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  closeAddForm(); // закрываем форму
  const boxTemplate = document.querySelector('#template-box').content; // Обращение к template элементу
  const UserBox = boxTemplate.querySelector('.element').cloneNode(true); // клонируем содержимое тега 
  elements.prepend(UserBox); //добавляем блок

  //создаем элементы input'ов пользователя
  let UserInputName = document.querySelector(".popup__place-name");
  let UserInputPhoto = document.querySelector(".popup__place-image");
  let UserCardName = document.querySelector(".element__text");
  let UserCardPhoto = document.querySelector(".element__image");

  UserCardName.textContent = UserInputName.value;
  UserCardPhoto.src = UserInputPhoto.value;
}
*/

/*

function RenderUserCard(UserCardName, UserCardPhoto) {
  const userCard = cloneCard(UserCardName, UserCardPhoto);
  elements.prepend(userCard);
  //addCardListeners(userCard);

  UserCardName.value = UserInputName.value;
  UserCardPhoto.value = UserInputPhoto.value;
  return userCard;
  
}
*/






/*

function renderUserCard (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  closeAddForm(); // закрываем форму
  const UserBox = boxTemplate.querySelector('.element').cloneNode(true); // клонируем содержимое тега 
  elements.prepend(UserBox); //добавляем блок

  //создаем элементы input'ов пользователя


  UserCardName.textContent = UserInputName.value;
  UserCardPhoto.src = UserInputPhoto.value;



  
}


*/









//Перекрашщиваем like


/*
//  нужно найти как удалять карточку со страницы после добавления новой карточки

//like for box

let like = document.querySelector('.element__button-like');
like.addEventListener('click',likeInColor);

function likeInColor(){
  console.log('Ща покрасим');
  like.classList.add('active');
}

like.removeEventListener('click', likeNoColor);

function likeNoColor(){
  console.log('Ща  уберем цвет');
  like.classList.remove('active');
}
/*
// удаляем карточку с страницы

let delButton = document.querySelector('.element__delete-button');

function deleteCard() {
  console.log('Хо хо хо')
}

delButton.addEventListener('click', deleteCard);

*/