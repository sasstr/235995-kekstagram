'use strict';

var AMOUNT_OF_PHOTO = 25;
// необходимо взять одно или два случайных предложений из представленных ниже:
var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
var COMMENTS_AMOUNT = {
  MIN: 1,
  MAX: 3
};
var AVATAR_AMOUNT = {
  MIN: 1,
  MAX: 6
};
var LIKES_AMOUNT = {MIN: 15,
  MAX: 200
};
var NAMES = [
  'Артем',
  'Петя',
  'Иван',
  'Игорь',
  'Дима',
  'Коля'
];
var pictureElement = document.querySelector('.pictures');

/**
 * Функция возращает случайное целое число между min и max - включительно
 * @param {number} min минимальное число
 * @param {number} max максимальное число
 * @return {number} случайное значение в заданном диапозоне
 */
var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

//  Функция возращает случайный элемент массива
/**
 *
 * @param {array} array
 * @return {*}
 */
var getRendomItemOfArray = function (array) {
  return array[getRandomInteger(0, array.length)];
};

//  Функция перемешивает элементы массива
/**
 *
 * @param {*} array
 * @return {*}
 */
var shuffleElemetsOfArray = function (array) {
  var cloneArray = array.slice();
  var j;
  var temp;
  for (var i = 0; i < cloneArray.length; i++) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cloneArray[j];
    cloneArray[j] = cloneArray[i];
    cloneArray[i] = temp;
  }
  return cloneArray;
};

// Функция создает комментарий к фото
/**
 * @return {object} объект с комментарием фото
 */
var createComment = function () {
  return {
    avatar: 'img/avatar-' + getRandomInteger(AVATAR_AMOUNT.MIN, AVATAR_AMOUNT.MAX) + '.svg',
    massage: shuffleElemetsOfArray(COMMENTS)
                    .slice(0, getRandomInteger(COMMENTS_AMOUNT.MIN, COMMENTS_AMOUNT.MAX))
                    .join(' '), // получаем строку из двух случайных коментов
    name: getRendomItemOfArray(NAMES)
  };
};

//  Функция создает один элемент массива с данными, которые будут описывать фотографии
/**
 * @param {number} i индекс
 * @return {object} Объект описывающий фото
 */
var createUserPhoto = function (i) {
  return {
    url: 'photos/' + (i + 1) + '.jpg', // Добавить счетчик что бы не повторялись фото от 1 до 25
    likes: getRandomInteger(LIKES_AMOUNT.MIN, LIKES_AMOUNT.MAX),
    comments: new Array(getRandomInteger(COMMENTS_AMOUNT.MIN, COMMENTS_AMOUNT.MAX))
                .fill('')
                .map(createComment)
  };
};

/**
 *  Функция создает массив объектов фоток
 * @param {number} колличество объектов для описания фото
 * @return {array} массив объектов фоток
 */
/* return new Array(AMOUNT_OF_PHOTO)
                .fill('')
                .map(createUserPhoto);  Не придумал как передать счетчик в заранее приготовленную функцию
                    можно было конечно сюда всю функцию запихнуть, но это конечно такое...
                */
var createArrayOfPhotos = function (amountOfPhotos) {
  var arrayOfPhotos = [];
  for (var i = 0; i < amountOfPhotos; i++) {
    arrayOfPhotos.push(createUserPhoto(i));
  }
  return arrayOfPhotos;
};

var arrayOfPhotos = createArrayOfPhotos(AMOUNT_OF_PHOTO);

var createPicture = function (picture) {
  var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  var pictureDomElement = pictureTemplate.cloneNode(true);
  pictureDomElement.querySelector('.picture__img').src = picture.url;
  pictureDomElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureDomElement.querySelector('.picture__likes').textContent = picture.likes;

  return pictureDomElement;
};

// Функция отрисует все фотки
var renderPictures = function () {
  var pictures = document.createDocumentFragment();
  for (var i = 0; i < AMOUNT_OF_PHOTO; i++) {
    pictures.appendChild(createPicture(arrayOfPhotos[i]));
  }
  return pictures;
};

pictureElement.appendChild(renderPictures());

var createBigPicture = function () {
  var firstPhoto = arrayOfPhotos[0];
  var bigPicture = document.querySelector('.big-picture');
  var bigPictureImg = bigPicture.querySelector('.big-picture__img');
  var likesCount = bigPicture.querySelector('.likes-count');
  var commentsCount = bigPicture.querySelector('.comments-count');
  var socialComments = bigPicture.querySelector('.social__comments');

};
