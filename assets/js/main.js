if (location.pathname == "/tral-mash/") {
    const showMore = document.querySelector('.transport__btn');
    showMore.addEventListener('click', findElementWithClassHidden);
    
    function findElementWithClassHidden() {
        const transportCards = document.querySelectorAll('.transport__cards .hidden');
    
        if (window.innerWidth > 767) {
            Array.from(transportCards).slice(0,3).forEach(elem => {
                elem.classList.remove('hidden');
            })
            if (transportCards.length <= 3) {
                const showMore = document.getElementsByClassName('transport__btn');
                showMore[0].style = "display:none";
            } 
        } else if (window.innerWidth <= 767 && window.innerWidth > 500 ) {
            Array.from(transportCards).slice(0,2).forEach(elem => {
                elem.classList.remove('hidden');
            })
            if (transportCards.length <= 2) {
                const showMore = document.getElementsByClassName('transport__btn');
                showMore[0].style = "display:none";
            } 
        } else {
            Array.from(transportCards).slice(0,1).forEach(elem => {
                elem.classList.remove('hidden');
            })
            if (transportCards.length <= 1) {
                const showMore = document.getElementsByClassName('transport__btn');
                showMore[0].style = "display:none";
            } 
        }
    
    }


    const calcZero = document.querySelectorAll('.calc__zero');
    if (window.innerWidth > 670 ) {
        //range-calc1
        const slider1 = document.querySelector('.calc--first');
        noUiSlider.create(slider1, {
            start: 0,
            orientation: 'vertical',
            connect: 'upper',
            range: {
                'min': 0,
                'max': 10000
            }
        });
        let isWidth = true;
        const inputFormat1 = document.querySelector('.calc__input--first');
        slider1.noUiSlider.on('update', function (values, handle) {
            const line = document.querySelectorAll('.noUi-connects');
            if (inputFormat1.value >= 2500) {
                if (isWidth){
                    line[0].classList.add('big');
                    isWidth = false;
                } 
            } else {
                if (!isWidth) {
                    line[0].classList.remove('big');
                    isWidth = true;
                }
            }

            inputFormat1.value = Math.round(values[handle]);
            calcZero[0].textContent = `${(Math.round(values[handle]) / 1000).toFixed(2)} м`
        });
    
        inputFormat1.addEventListener('input', function () {   
            slider1.noUiSlider.set(this.value);
        });  
        
            
    
        
        //range-calc2
        const slider2 = document.querySelector('.calc--second');
        noUiSlider.create(slider2, {
            start: 0,
            orientation: 'vertical',
            connect: 'upper',
            range: {
                'min': 0,
                'max': 10000
            }
        });
        let isHeight = true;
        const inputFormat2 = document.querySelector('.calc__input--second');
        slider2.noUiSlider.on('update', function (values, handle) {
            const line = document.querySelectorAll('.noUi-connects');
            if (inputFormat2.value >= 3000) {
                if (isHeight){
                    line[1].classList.add('big');
                    isHeight = false;
                } 
            } else {
                if (!isHeight) {
                    line[1].classList.remove('big');
                    isHeight = true;
                }
            }

            inputFormat2.value = Math.round(values[handle]);
            calcZero[1].textContent = `${(Math.round(values[handle]) / 1000).toFixed(2)} м`
        });
    
        inputFormat2.addEventListener('input', function () {
            slider2.noUiSlider.set(this.value);
        });
    
        //range-calc3
        const slider3 = document.querySelector('.calc--third');
        noUiSlider.create(slider3, {
            start: 0,
            orientation: 'vertical',
            connect: 'upper',
            range: {
                'min': 0,
                'max': 30000
            }
        });
        const inputFormat3 = document.querySelector('.calc__input--third');
        let isLong = true;
        slider3.noUiSlider.on('update', function (values, handle) {
            const line = document.querySelectorAll('.noUi-connects');
            if (inputFormat3.value >= 12000) {
                if (isLong){
                    line[2].classList.add('big');
                    isLong = false;
                } 
            } else {
                if (!isLong) {
                    line[2].classList.remove('big');
                    isLong = true;
                }
            }

            inputFormat3.value = Math.round(values[handle]);
            calcZero[2].textContent = `${(Math.round(values[handle]) / 1000).toFixed(2)} м`
        });
    
        inputFormat3.addEventListener('input', function () {
            slider3.noUiSlider.set(this.value);
        });
    
        //range-calc4
        const slider4 = document.querySelector('.calc--fourth');
        noUiSlider.create(slider4, {
            start: 0,
            orientation: 'vertical',
            connect: 'upper',
            range: {
                'min': 0,
                'max': 150000
            }
        });
        const inputFormat4 = document.querySelector('.calc__input--fourth');
        let isBig = true;
        slider4.noUiSlider.on('update', function (values, handle) {
            const line = document.querySelectorAll('.noUi-connects');
            if (inputFormat4.value >= 22000) {
                if (isBig){
                    line[3].classList.add('big');
                    isBig = false;
                } 
            } else {
                if (!isBig) {
                    line[3].classList.remove('big');
                    isBig = true;
                }
            }

            inputFormat4.value = Math.round(values[handle]);
            calcZero[3].textContent = `${(Math.round(values[handle]) / 1000).toFixed(2)} т`
        });
    
        inputFormat4.addEventListener('input', function () {
            slider4.noUiSlider.set(this.value);
        });
    } else {
        //range-calc1
        const slider1 = document.querySelector('.calc--first');
        noUiSlider.create(slider1, {
            start: 0,
            orientation: 'vertical',
            connect: 'upper',
            range: {
                'min': 0,
                'max': 10
            }
        });
        let isWidth = true
        const inputFormat1 = document.querySelector('.calc__input--first');
        slider1.noUiSlider.on('update', function (values, handle) {
            const line = document.querySelectorAll('.noUi-connects');
            if (inputFormat1.value >= 3) {
                if (isWidth){
                    line[0].classList.add('big');
                    isWidth = false;
                } 
            } else {
                if (!isWidth) {
                    line[0].classList.remove('big');
                    isWidth = true;
                }
            }

            inputFormat1.value = Math.round(values[handle]);
            calcZero[0].textContent = `${Math.round(values[handle])} м`
        });
    
        inputFormat1.addEventListener('input', function () {
            inputFormat1.setAttribute('maxlength',2); 
            slider1.noUiSlider.set(this.value);
        });
    
        //range-calc2
        const slider2 = document.querySelector('.calc--second');
        noUiSlider.create(slider2, {
            start: 0,
            orientation: 'vertical',
            connect: 'upper',
            range: {
                'min': 0,
                'max': 10
            }
        });
        let isHeight = true;
        const inputFormat2 = document.querySelector('.calc__input--second');
        slider2.noUiSlider.on('update', function (values, handle) {
            const line = document.querySelectorAll('.noUi-connects');
            if (inputFormat2.value >= 3) {
                if (isHeight){
                    line[1].classList.add('big');
                    isHeight = false;
                } 
            } else {
                if (!isHeight) {
                    line[1].classList.remove('big');
                    isHeight = true;
                }
            }

            inputFormat2.value = Math.round(values[handle]);
            calcZero[1].textContent = `${Math.round(values[handle])} м`
        });
    
        inputFormat2.addEventListener('input', function () {
            inputFormat2.setAttribute('maxlength',2);
            slider2.noUiSlider.set(this.value);
        });
    
        //range-calc3
        const slider3 = document.querySelector('.calc--third');
        noUiSlider.create(slider3, {
            start: 0,
            orientation: 'vertical',
            connect: 'upper',
            range: {
                'min': 0,
                'max': 30
            }
        });
        let isLong = true;
        const inputFormat3 = document.querySelector('.calc__input--third');
        slider3.noUiSlider.on('update', function (values, handle) {
            const line = document.querySelectorAll('.noUi-connects');
            if (inputFormat3.value >= 12) {
                if (isLong){
                    line[2].classList.add('big');
                    isLong = false;
                } 
            } else {
                if (!isLong) {
                    line[2].classList.remove('big');
                    isLong = true;
                }
            }

            inputFormat3.value = Math.round(values[handle]);
            calcZero[2].textContent = `${Math.round(values[handle])} м`
        });
    
        inputFormat3.addEventListener('input', function () {
            inputFormat3.setAttribute('maxlength',2);
            slider3.noUiSlider.set(this.value);
        });
    
        //range-calc4
        const slider4 = document.querySelector('.calc--fourth');
        noUiSlider.create(slider4, {
            start: 0,
            orientation: 'vertical',
            connect: 'upper',
            range: {
                'min': 0,
                'max': 150
            }
        });
        let isBig = true;
        const inputFormat4 = document.querySelector('.calc__input--fourth');
        slider4.noUiSlider.on('update', function (values, handle) {
            const line = document.querySelectorAll('.noUi-connects');
            if (inputFormat4.value >= 22) {
                if (isBig){
                    line[3].classList.add('big');
                    isBig = false;
                } 
            } else {
                if (!isBig) {
                    line[3].classList.remove('big');
                    isBig = true;
                }
            }

            inputFormat4.value = Math.round(values[handle]);
            calcZero[3].textContent = `${Math.round(values[handle])} т`
        });
    
        inputFormat4.addEventListener('input', function () {
            inputFormat4.setAttribute('maxlength',2);
            slider4.noUiSlider.set(this.value);
        });
    }
    
    
    
    //change name handle in calc
    const changeWordInHandle = document.querySelectorAll('.noUi-handle');
    changeWordInHandle[0].setAttribute('data-element', 'Ширина');
    changeWordInHandle[1].setAttribute('data-element', 'Высота');
    changeWordInHandle[2].setAttribute('data-element', 'Длина');
    changeWordInHandle[3].setAttribute('data-element', 'Масса');
    
    const ariaLabelHundle = document.querySelectorAll('.noUi-handle-lower');
    ariaLabelHundle.forEach(allbtn => {
        allbtn.setAttribute('aria-label', 'hundle');
    })
    
    
    
    //calendar airdatepicker
    let dpMin, dpMax;
    
    dpMin = new AirDatepicker('#first-date', {
        isMobile: true,
        autoClose: true,
        onSelect({date}) {
            dpMax.update({
                minDate: date
            })
        }
    })
    
    dpMax = new AirDatepicker('#second-date', {
        isMobile: true,
        autoClose: true,
        onSelect({date}) {
            dpMin.update({
                maxDate: date
            })
        }
    })
    
    //Glide
    new Glide('.glide', {
        type: 'carousel',
        focusAt: 'center',
        startAt: 0,
        perView: 1
        }).mount()
    
    //galary block
    const galaryCard = document.querySelectorAll('.galary__img.hidden');
    const galaryBtn = document.querySelector('.galary__btn');
    
    galaryBtn.addEventListener('click', shomMoreCards);
    
    function shomMoreCards () {
        Array.from(galaryCard).slice(0,3).forEach(item => {
            item.classList.remove('hidden');
        })
        if (galaryCard.length <= 3) {
            const galaryBtn = document.getElementsByClassName('galary__btn');
            galaryBtn[0].style = "display:none";
        }
    }
}



//accordion
const accItem = document.getElementsByClassName('accordionItem');
const accHD = document.getElementsByClassName('accordionItemHeading');

if (accItem.length > 0) {
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        const itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }
}


//func add or remove webp img if browser support
function checkSupport(fn) {
    var html = document.documentElement,
        WebP = new Image();
  
    WebP.onload = WebP.onerror = function() {
        isSupported = (WebP.height === 2);
  
        if (isSupported) {
            if (html.className.indexOf('no-webp') >= 0)
                html.className = html.className.replace(/\bno-webp\b/, 'webp');
            else html.className += ' webp';
        }
        fn(isSupported);
    };
}

const btnCallback = document.querySelectorAll('.js-show-callback');
btnCallback.forEach(allBtn => {
    allBtn.addEventListener('click', showModal);
})

function showModal () {

    let opt = '';
    const arr = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    const time = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'];
    let date = new Date();

    for (i = 1; i <= 5; i++) {
        date.setDate(date.getDate() + 1);
        const tomorrow = date.getDate();
        const month = date.getMonth();
        opt += '<option value="'+ tomorrow + ' ' + arr[month]+'">' + tomorrow + ' ' + arr[month] + '</option>';
    }

    let t = '';
    time.forEach(function(item, i) {
        t += '<option value="' + item + '">' + item + '</option>';
    });

    Fancybox.close();
    Fancybox.show([{ 
        src: `
        <div class="order-callback">
            <h2 class="order-callback__title">Заказать звонок</h2>
            <p class="order-callback__subtitle">Оставьте заявку и наш менеджер свяжется с Вами</p>
            <form action="#">
                <input class="order-callback__input callback__input" type="text" name="name" placeholder="Ваше имя" autocomplete="off">
                <input class="order-callback__input callback__input" type="text" name="phone" placeholder="Контакты для обратной связи *" autocomplete="off">
                <div class="order-callback__hidden-block">
                    <div class="order-callback__wrapper">
                        <select class="order-callback__select js-select" name="day" id="day">
                            <option default value="day">День</option>
                            <option value="today">Сегодня</option>
                            ${opt}
                        </select>
                        <select class="order-callback__select" name="time" id="time">
                            <option default value="time">Время</option>
                            ${t}
                        </select>
                    </div>
                    <p class="order-callback__text">Перезвоним в указанное время</p>
                </div>
                <div class="order-callback__show-block">Хотите выбрать время звонка?</div>
                <p class="order-callback__rule">
                    Отправляя данные, Вы соглашаетесь с 
                    <a href="#">Правилами обработки персональных данных</a>
                </p>
                <button class="order-callback__btn callback__btn" type="submit" value="Оставить заявку">Оставить заявку</button>
            </form>
        </div>
        `,
        type: "html" 
        }]);


        const modalBtn = document.querySelector('.order-callback__show-block');
        const hiddenBlock = document.querySelector('.order-callback__hidden-block');
        modalBtn.addEventListener('click', showHiddenBlock)

        function showHiddenBlock() {
            hiddenBlock.classList.add('show')
            modalBtn.classList.add('hidden')
        }
}

const priceCallbackBtn = document.querySelectorAll('.price__block-callback');
priceCallbackBtn.forEach(btnCallback => {
    btnCallback.addEventListener('click', showCallbackModal);
})

function showCallbackModal (evt) {
    evt.preventDefault();

    Fancybox.close();
    Fancybox.show([{ 
        src: `
        <div class="order-callback">
            <h2 class="order-callback__title">Обратный звонок</h2>
            <p class="order-callback__subtitle">Перезвоним в течении нескольких минут.</p>
            <form action="#">
                <input class="order-callback__input callback__input" type="text" name="name" placeholder="Как к вам обращаться?" autocomplete="off">
                <input class="order-callback__input callback__input" type="text" name="phone" placeholder="Ваши контакты *" autocomplete="off">
                <p class="quality__rule">
                    Отправляя данные, Вы соглашаетесь с 
                    <a href="#">Правилами обработки персональных данных</a>
                </p>
                <button class="order-callback__btn callback__btn" type="submit" value="Отправить">Отправить</button>
            </form>
        </div>
        `,
        type: "html" 
        }]);
}

const qualityControl = document.querySelectorAll('.js-quality-control');
qualityControl.forEach(allBtnQuality => {
    allBtnQuality.addEventListener('click', showModalQualityControl);
})

function showModalQualityControl (evt) {
    evt.preventDefault();

    Fancybox.close();
    Fancybox.show([{ 
        src: `
        <div class="quality-control">
            <h2>Обращение в отдел контроля качества</h2>
            <form action="#">
                <label>
                    <input class="quality__input" type="text" placeholder="ФИО или название организации">
                </label>
                <label>
                    <input class="quality__input" type="text" placeholder="Контакты для обратной связи *">
                </label>
                <select class="quality__select" name="quality-type" id="type">
                    <option value="Не выбрано">Тип обращения</option>
                    <option value="Проблема">Проблема</option>
                    <option value="Благодарность">Благодарность</option>
                    <option value="Пожелание">Пожелание</option>
                    <option value="Отзыв">Отзыв</option>
                </select>
                <textarea class="quality__textarea" cols="30" rows="5" placeholder="Подробное описание ситуации"></textarea>
                <p class="quality__rule">
                    Отправляя данные, Вы соглашаетесь с 
                    <a href="#">Правилами обработки персональных данных</a>
                </p>
                <button class="callback__btn" value="Отправить" type="submit">Отправить</button>
            </form>
        </div>
        `,
        type: "html"
    }]);
}

const askQuestion = document.querySelectorAll('.js-ask-question');
askQuestion.forEach(askBtn => {
    askBtn.addEventListener('click', showModalAskQuestion);
})

function showModalAskQuestion (evt) {
    evt.preventDefault();

    Fancybox.close();
    Fancybox.show([{ 
        src: `
        <section class="quality-control">
            <h2>Остались вопросы?</h2>
            <form action="#">
                <label>
                    <input class="quality__input" type="text" placeholder="Ваше имя">
                </label>
                <label>
                    <input class="quality__input" type="text" placeholder="Контакты для обратной связи *">
                </label>
                <textarea class="quality__textarea" cols="30" rows="5" placeholder="Введите ваш вопрос"></textarea>
                <p class="quality__rule">
                    Отправляя данные, Вы соглашаетесь с 
                    <a href="#">Правилами обработки персональных данных</a>
                </p>
                <button class="callback__btn" value="Отправить" type="submit">Отправить</button>
            </form>
        </section>
        `,
        type: "html"
    }]);
}

const suitableServicesCallbackBtn = document.querySelectorAll('.js-suitable-services-callback');

suitableServicesCallbackBtn.forEach(suitableBtn => {
    suitableBtn.addEventListener('click', showModalSuitable);
})

function showModalSuitable (evt) {
    let opt = '';
    const arr = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    const time = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'];
    let date = new Date();

    for (i = 1; i <= 5; i++) {
        date.setDate(date.getDate() + 1);
        const tomorrow = date.getDate();
        const month = date.getMonth();
        opt += '<option value="'+ tomorrow + ' ' + arr[month]+'">' + tomorrow + ' ' + arr[month] + '</option>';
    }

    let t = '';
    time.forEach(function(item, i) {
        t += '<option value="' + item + '">' + item + '</option>';
    });
    
    Fancybox.close();
    Fancybox.show([{ 
        src: `
        <div class="order-callback">
            <h2 class="order-callback__title">Заказать ${this.closest('.suitable-services__content').firstChild.nextSibling.innerText}</h2>
            <p class="order-callback__subtitle">Оставьте заявку и наш менеджер свяжется с Вами</p>
            <form action="#">
                <input class="order-callback__input callback__input" type="text" name="name" placeholder="Ваше имя" autocomplete="off">
                <input class="order-callback__input callback__input" type="text" name="phone" placeholder="Контакты для обратной связи *" autocomplete="off">
                <div class="order-callback__hidden-block">
                    <div class="order-callback__wrapper">
                        <select class="order-callback__select js-select" name="day" id="day">
                            <option default value="day">День</option>
                            <option value="today">Сегодня</option>
                            ${opt}
                        </select>
                        <select class="order-callback__select" name="time" id="time">
                            <option default value="time">Время</option>
                            ${t}
                        </select>
                    </div>
                    <p class="order-callback__text">Перезвоним в указанное время</p>
                </div>
                <div class="order-callback__show-block">Хотите выбрать время звонка?</div>
                <p class="order-callback__rule">
                    Отправляя данные, Вы соглашаетесь с 
                    <a href="#">Правилами обработки персональных данных</a>
                </p>
                <button class="order-callback__btn callback__btn" type="submit" value="Оставить заявку">Оставить заявку</button>
            </form>
        </div>
        `,
        type: "html" 
        }]);

        const modalBtn = document.querySelector('.order-callback__show-block');
        const hiddenBlock = document.querySelector('.order-callback__hidden-block');
        modalBtn.addEventListener('click', showHiddenBlock)

        function showHiddenBlock() {
            hiddenBlock.classList.add('show')
            modalBtn.classList.add('hidden')
        }
}