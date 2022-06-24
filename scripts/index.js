/*Задаем переменные всем элементам взаимодействия*/

let popupEditProfile = document.querySelector('.popup__edit'); //  попап редактирования профиля
let openPopupButton = document.querySelector('.open-popup'); // Кнопка редкатирования профиля 
let closePopupButton = document.querySelector('.popup__btn-close'); // Крестик закрытия попапа для Edit profile
let closePopupButtonAddForm = document.querySelector('.popup__btn-close-for-addCard'); // Крестик закрытия попапа для AddCard


/* Находим формы в полях данных из формы*/

let EditFormElement = document.querySelector(".popup__container-editProfile");
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
    console.log('привет');
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

};



/* Закрывакем поп-ап V2

closePopupButton.addEventListener('click',function(){
  popupEditProfile.classList.remove('popup_opened');

})

*/



// Выберите элементы, куда должны быть вставлены значения полей
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  /*popupEditProfile.classList.remove('popup_opened');*/
  closePopUp();
  q1.textContent = nameInput.value;
  q2.textContent = jobInput.value; 
}



// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
EditFormElement.addEventListener('submit', formSubmitHandler); 



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

// Создаем шаблон карточки 
const cloneCard = function(name, link) {
  const boxTemplate = document.querySelector('#template-box').content; // Обращение к template элементу
  const newBox = boxTemplate.querySelector('.element').cloneNode(true); // Обращение к элементам тега   
  newBox.querySelector('.element__image').src = link;
  newBox.querySelector('.element__text').textContent = name;
  return newBox;
}

// вставляем 6 карточек

initialCards.forEach(({name, link}) => {
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
  console.log('helo my friend');
  };

  /* Закрывакем поп-ап addCard  */

  closePopupButtonAddForm.addEventListener('click',closeAddForm);

  function closeAddForm() {
    console.log('ты тыкнул на крестик');
    popupAddCard.classList.remove('popup_opened');
  
  };



// Добавляем возможность добавить новую карточку

let AddCardFormElement = document.querySelector(".popup__container-addCard");
AddCardFormElement.addEventListener('submit', formSubmitHandler2); 






function formSubmitHandler2 (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  closeAddForm(); // закрываем форму
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