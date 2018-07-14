'use strict';

class Slider {
  constructor({
    parentNode,
    content
  }) {
    this.parentNode = document.querySelector(parentNode);
    this.parentNodeString = parentNode;
    this.content = content;
    this.sliderWrap = document.createElement('div');
    this.counter = 0;
    this.sliderText = document.createElement('p');
    this.touchStartPageX = null;
    this.changedVal = null;

    this.createSlider();
  }

  createSlider() {
    console.log(this.parentNode);
    this.createMarkupForSlider();
    this.sliderControllListener();
    this.setContent();
  }

  createMarkupForSlider() {
    this.sliderWrap.classList.add('slider-wrap');

    const sliderBtnLeft = document.createElement('button');
    sliderBtnLeft.classList.add('slider-btn-left', 'js-btn-left');

    const sliderBtnRight = document.createElement('button');
    sliderBtnRight.classList.add('slider-btn-right', 'js-btn-right');

    this.parentNode.append(sliderBtnLeft, this.sliderWrap, sliderBtnRight);
  }

  sliderControllListener() {

    const getRightBtn = document.querySelector(`${this.parentNodeString} .js-btn-right`);
    const getLeftBtn = document.querySelector(`${this.parentNodeString} .js-btn-left`);
    console.log(getRightBtn);
    getLeftBtn.addEventListener('click', event => this.handlerLeftArr(event));
    getRightBtn.addEventListener('click', event => this.handlerRightArr(event));

    this.parentNode.addEventListener('touchstart', event => this.handlerTouchStart(event));
    this.parentNode.addEventListener('touchmove', event => this.handlerTouchMove(event));
    this.parentNode.addEventListener('touchend', event => this.handlerTouchEnd(event));
  }

  handlerTouchStart(evt) {
    evt.preventDefault();
    this.touchStartPageX = evt.changedTouches[0].pageX;
  }

  handlerTouchEnd(evt) {
    evt.preventDefault();
    if (this.changedVal > 0 ) { this.leftBtnPush(); }
    if (this.changedVal < 0 ) { this.rightBtnPush(); }
  }

  handlerTouchMove(evt) {
    evt.preventDefault();
    this.changedVal = this.touchStartPageX - evt.changedTouches[0].pageX;
  }

  handlerLeftArr(evt) {
    evt.preventDefault();
    this.leftBtnPush();
  }

  handlerRightArr(evt) {
    evt.preventDefault();
    this.rightBtnPush();
  }

  leftBtnPush() {
    const contentLength = this.content.length - 1;
    this.counter = this.counter - 1;

    if (this.counter < 0) { this.counter = contentLength };

    if (this.counter <= contentLength ) {
        this.sliderText.textContent = this.content[this.counter];
    }
  }

  rightBtnPush() {
    const contentLength = this.content.length - 1;

    if ( this.counter === contentLength ) { this.counter = -1 }

    if (this.counter <= contentLength ) {
        this.counter = this.counter + 1;
        this.sliderText.textContent = this.content[this.counter];
    }
  }

  setContent() {
    this.sliderText.classList.add('slider-text', 'js-slider-text');
    this.sliderText.textContent = this.content[this.counter];
    this.sliderWrap.insertAdjacentElement('beforeend', this.sliderText);
  }
}


const firstSliderData = {
  parentNode: ".js-slider-first",
  content: [
    'Создал 3 прибыльных сайта. Разработал сервис для вебмастеров TextMania.ru.',
    'Вник в тему как создания посещаемого сайта, так и вопроса получения денег с него.',
    'Успешно прошел курсы Марафон Пузат Начало 2017, Марафон Пузат Спарта 2017, сделав прибыльные сайты.',
    'Проходил другие курсы, на основании этого выработал свою систему создания успешных сайтов.'
  ]
};

const secondSliderData = {
    parentNode: ".js-slider-second",
    content: [
      'Необходимы минимальные навыки владения компьютером — как работать в браузере, в офисных приложениях. Также нужно быть готовым учиться и регулярно уделять время развитию сайта. Конечный результат напрямую зависит от вас, и приложенных вами усилий.',
      'Нужны некоторые финансовые затраты — покупка лицензии для приложения KeyCollector (примерно 900 грн, одноразовая трата), покупка 5 прокси для сбора семантического ядра (250 грн. за месяц, нужны лишь на один месяц). Затраты на покупку домена — 100 грн, покупается один раз. Затраты на хостинг — примерно 50 грн. в месяц, чем больше сайтов у вас на хостинге — тем дешевле получается.',
      'Остальное все вы можете делать сами — писать статьи и размещать их. Но если у вас есть желание ускорить процесс, нанять людей для этого, и превратить информационные сайты в полноценный бизнес — мы расскажем, как сделать это.'
    ]
  };

const firstSlider = new Slider(firstSliderData);
const secondSlider = new Slider(secondSliderData);

const jsWidth = document.querySelector('.js-width');
(function () {
  jsWidth.textContent = innerWidth;
})()
console.log(window.screenX, window.screenY);
console.log(window);
console.log(document);
console.log(screenX);
