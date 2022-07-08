/*Задаем переменные всем элементам взаимодействия*/

let popupEditProfile = document.querySelector('.popup__edit'); //  попап редактирования профиля
let openPopupButton = document.querySelector('.open-popup'); // Кнопка редкатирования профиля 
let closePopupButton = document.querySelector('.popup__btn-close'); // Крестик закрытия попапа для Edit profile
let closePopupButtonAddForm = document.querySelector('.popup__btn-close-for-addCard'); // Крестик закрытия попапа для AddCard


/* Находим формы в полях данных из формы*/

let formElement = document.querySelector(".popup__container");
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
formElement.addEventListener('submit', formSubmitHandler); 


