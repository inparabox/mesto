

let buttonEdit = document.querySelector(".profile__button-edit"); 


/*Задаем переменные всем элементам взаимодействия*/

let popupBg = document.querySelector('.popup'); //  попап 
let openPopupButton = document.querySelector('.open-popup'); // Кнопка редкатирования профиля 
let closePopupButton = document.querySelector('.popup__btn-close'); // Крестик закрытия попапа


/* открываем поп-ап*/

openPopupButton.addEventListener('click', openPopUp);

function openPopUp() {
    popupBg.classList.add('popup_opened');
  };


/* Закрывакем поп-ап */

closePopupButton.addEventListener('click', closePopUp);

function closePopUp() {
  popupBg.classList.remove('popup_opened');
};

/* Находим формы в полях данных из верстки

let container1 = document.querySelector(".profile__name");
console.log(container1.textContent);

let container2 = document.querySelector(".profile__mission");
console.log(container2.textContent);

*/


/* Находим формы в полях данных из формы*/

let formElement = document.querySelector(".popup__h1");
let nameInput = document.querySelector(".nameInput");
let jobInput = document.querySelector(".jobInput");
console.log(nameInput.value);





/* Присваиваем форме поля данные */

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.


  nameInput.value; // Получите значение полей jobInput и nameInput из свойства value
  jobInput.value; // Получите значение полей jobInput и nameInput из свойства value
  nameInput.textContent = nameInput.value;  // Выберите элементы, куда должны быть вставлены значения полей
  jobInput.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 



