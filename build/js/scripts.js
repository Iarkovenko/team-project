'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
  function Slider(_ref) {
    var parentNode = _ref.parentNode,
        content = _ref.content;

    _classCallCheck(this, Slider);

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

  _createClass(Slider, [{
    key: 'createSlider',
    value: function createSlider() {
      console.log(this.parentNode);
      this.createMarkupForSlider();
      this.sliderControllListener();
      this.setContent();
    }
  }, {
    key: 'createMarkupForSlider',
    value: function createMarkupForSlider() {
      this.sliderWrap.classList.add('slider-wrap');

      var sliderBtnLeft = document.createElement('button');
      sliderBtnLeft.classList.add('slider-btn-left', 'js-btn-left');

      var sliderBtnRight = document.createElement('button');
      sliderBtnRight.classList.add('slider-btn-right', 'js-btn-right');

      this.parentNode.append(sliderBtnLeft, this.sliderWrap, sliderBtnRight);
    }
  }, {
    key: 'sliderControllListener',
    value: function sliderControllListener() {
      var _this = this;

      var getRightBtn = document.querySelector(this.parentNodeString + ' .js-btn-right');
      var getLeftBtn = document.querySelector(this.parentNodeString + ' .js-btn-left');
      console.log(getRightBtn);
      getLeftBtn.addEventListener('click', function (event) {
        return _this.handlerLeftArr(event);
      });
      getRightBtn.addEventListener('click', function (event) {
        return _this.handlerRightArr(event);
      });

      this.parentNode.addEventListener('touchstart', function (event) {
        return _this.handlerTouchStart(event);
      });
      this.parentNode.addEventListener('touchmove', function (event) {
        return _this.handlerTouchMove(event);
      });
      this.parentNode.addEventListener('touchend', function (event) {
        return _this.handlerTouchEnd(event);
      });
    }
  }, {
    key: 'handlerTouchStart',
    value: function handlerTouchStart(evt) {
      evt.preventDefault();
      this.touchStartPageX = evt.changedTouches[0].pageX;
    }
  }, {
    key: 'handlerTouchEnd',
    value: function handlerTouchEnd(evt) {
      evt.preventDefault();
      if (this.changedVal > 0) {
        this.leftBtnPush();
      }
      if (this.changedVal < 0) {
        this.rightBtnPush();
      }
    }
  }, {
    key: 'handlerTouchMove',
    value: function handlerTouchMove(evt) {
      evt.preventDefault();
      this.changedVal = this.touchStartPageX - evt.changedTouches[0].pageX;
    }
  }, {
    key: 'handlerLeftArr',
    value: function handlerLeftArr(evt) {
      evt.preventDefault();
      this.leftBtnPush();
    }
  }, {
    key: 'handlerRightArr',
    value: function handlerRightArr(evt) {
      evt.preventDefault();
      this.rightBtnPush();
    }
  }, {
    key: 'leftBtnPush',
    value: function leftBtnPush() {
      var contentLength = this.content.length - 1;
      this.counter = this.counter - 1;

      if (this.counter < 0) {
        this.counter = contentLength;
      };

      if (this.counter <= contentLength) {
        this.sliderText.textContent = this.content[this.counter];
      }
    }
  }, {
    key: 'rightBtnPush',
    value: function rightBtnPush() {
      var contentLength = this.content.length - 1;

      if (this.counter === contentLength) {
        this.counter = -1;
      }

      if (this.counter <= contentLength) {
        this.counter = this.counter + 1;
        this.sliderText.textContent = this.content[this.counter];
      }
    }
  }, {
    key: 'setContent',
    value: function setContent() {
      this.sliderText.classList.add('slider-text', 'js-slider-text');
      this.sliderText.textContent = this.content[this.counter];
      this.sliderWrap.insertAdjacentElement('beforeend', this.sliderText);
    }
  }]);

  return Slider;
}();

var firstSliderData = {
  parentNode: ".js-slider-first",
  content: ['Создал 3 прибыльных сайта. Разработал сервис для вебмастеров TextMania.ru.', 'Вник в тему как создания посещаемого сайта, так и вопроса получения денег с него.', 'Успешно прошел курсы Марафон Пузат Начало 2017, Марафон Пузат Спарта 2017, сделав прибыльные сайты.', 'Проходил другие курсы, на основании этого выработал свою систему создания успешных сайтов.']
};

var secondSliderData = {
  parentNode: ".js-slider-second",
  content: ['Необходимы минимальные навыки владения компьютером — как работать в браузере, в офисных приложениях. Также нужно быть готовым учиться и регулярно уделять время развитию сайта. Конечный результат напрямую зависит от вас, и приложенных вами усилий.', 'Нужны некоторые финансовые затраты — покупка лицензии для приложения KeyCollector (примерно 900 грн, одноразовая трата), покупка 5 прокси для сбора семантического ядра (250 грн. за месяц, нужны лишь на один месяц). Затраты на покупку домена — 100 грн, покупается один раз. Затраты на хостинг — примерно 50 грн. в месяц, чем больше сайтов у вас на хостинге — тем дешевле получается.', 'Остальное все вы можете делать сами — писать статьи и размещать их. Но если у вас есть желание ускорить процесс, нанять людей для этого, и превратить информационные сайты в полноценный бизнес — мы расскажем, как сделать это.']
};

var firstSlider = new Slider(firstSliderData);
var secondSlider = new Slider(secondSliderData);

var jsWidth = document.querySelector('.js-width');
(function () {
  jsWidth.textContent = innerWidth;
})();
console.log(window.screenX, window.screenY);
console.log(window);
console.log(document);
console.log(screenX);