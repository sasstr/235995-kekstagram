const PHOTOS = [];
const AMOUNT_OF_PHOTO = 25;
const COMMENTS = [`Всё отлично!`,
                  `В целом всё неплохо. Но не всё.`,
                  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`
                  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`
                  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`
                  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
                  ];
const LIKE = {MIN: 15,
              MAX: 200
              };
const NAMES = [`Артем`,
              `Петя`,
              `Иван`,
              `Игорь`,
              `Дима`,
              `Коля`
              ];

//  Функция возращает случайное целое число между min и max - включительно
const getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

//  Функция возращает случайной длины массив от исходного массива
const getRandomLengthArray = function (array) {
  return array.slice(0, getRandomInteger(1, array.length));
};

//  Функция возращает случайный элемент массива
const getRendomItemOfArray = function (array) {
  return array[getRandomInteger(0, array.length)];
};

//  Функция перемешивает элементы массива
const shuffleElemetsOfArray = function (array) {
  let cloneArray = array.slice();
  let j;
  let temp;
  for (let i = 0; i < cloneArray.length; i++) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cloneArray[j];
    cloneArray[j] = cloneArray[i];
    cloneArray[i] = temp;
  }
  return cloneArray;
};

const somePhoto = {
  url: `photos/${i}.jpg`, // где {i} это число от 1 до 25. Адреса картинок не должны повторяться.
  likes: random_number, // Случайное число от 15 до 200
  comments: [{
    avatar: "img/avatar-6.svg",
    message: "В целом всё неплохо. Но не всё.",
    name: "Артем"
  }, {}], // массив объектов — список комментариев, оставленных другими пользователями к этой фотографии
}

const renderRandomUser = () => {`<a href="#" class="picture">
<img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
<p class="picture__info">
  <span class="picture__comments"></span>
  <span class="picture__likes"></span>
</p>
</a>`};
