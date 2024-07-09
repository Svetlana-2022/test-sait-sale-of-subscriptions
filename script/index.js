const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.card__button');
const groupElement = document.querySelector('.cards__groups');
const elementTemplate = document.querySelector('.element-template').content;
const initialCards = [
  { 
    url: "./images/kniga-na-belom-fone-166.png",
    title: "Заголовок Подписки 1",
    description: "Описание Подписки 12."
  },
  { 
    url: "./images/kniga-na-belom-fone-166.png",
    title: "Заголовок Подписки 2",
    description: "Описание Подписки 2."
  },
  { 
    url: "./images/kniga-na-belom-fone-166.png",
    title: "Заголовок Подписки 3",
    description: "Описание Подписки 3."
  },
  { 
    url: "./images/kniga-na-belom-fone-166.png",
    title: "Заголовок Подписки 4",
    description: "Описание Подписки 4."
  },
];
 
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});
buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = "подписан";
  });
});


function createCard(card) {
  const element = elementTemplate.querySelector('.card').cloneNode(true);
  const elImage = element.querySelector('.card__image');
  elImage.src = card.url;
  const elTitle = element.querySelector('.card__title');
  elTitle.textContent = card.title
  const elDescription = element.querySelector('.card__description');
  elDescription.textContent = card.description;
  const elButton = element.querySelector('.card__button');
  elButton.addEventListener('click', () => {
    elButton.textContent = "подписался";
});
  return element;
}

function inserstCard(element) {
groupElement.append(createCard(element));  
}

initialCards.forEach(function(card){
inserstCard(card);
});





