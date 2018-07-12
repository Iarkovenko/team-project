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
    console.log('counter left: ', this.counter);
    
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
      'lorem23asfdasfasfasfa fas fasf asf asfas f ',
      'Вник в asfsagfasgasgfasgasgasения денег с него.',
      'Успешно прошел курсы Марафон Пузат Начало asgsagasgasgasта 2017, сделав прибыльные сайты.',
      'Про s s ag asgaas sgasga fas sgasgsagasgasg asf отал свою систему создания успешных сайтов.'
    ]
  };

const thirdSliderData = {
    parentNode: ".js-slider-third",
    content: [
      'Создал 3 прибыльных сайта. Разработал сервис для вебмастеров TextMania.ru.',
      'Вник в тему как создания посещаемого сайта, так и вопроса получения денег с него.',
      'Успешно прошел курсы Марафон Пузат Начало 2017, Марафон Пузат Спарта 2017, сделав прибыльные сайты.',
      'Проходил другие курсы, на основании этого выработал свою систему создания успешных сайтов.'
    ]
  };

const firstSlider = new Slider(firstSliderData);
const secondSlider = new Slider(secondSliderData);
const thirdSlider = new Slider(thirdSliderData);
