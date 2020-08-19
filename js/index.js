// Задаем начальное значение состояния страницы
let stateproject = 0;
let stateteam = 0;
// Массивы элементов для слайдера
const repairProjectsArr = [
    {
        img: '../images/second.jpg',
        city: 'Rostov-on-Don LCD admiral',
        area: '81 m2',
        time: '3.5 months'
    },
    {
        img: '../images/second1.jpg',
        city: 'Sochi Thieves',
        area: '105 m2',
        time: '4 months'
    },
    {
        img: '../images/second2.jpg',
        city: 'Rostov-on-Don Patriotic',
        area: '93 m2',
        time: '3 months'
    },
];
const teamPhotoArr = [
    '../images/image54.jpg',
    '../images/image54.jpg',
    '../images/image54.jpg',
    '../images/image54.jpg'
];
// Обработчики нажатий

// Функция изменения состояния страницы со слайдером
function changeState (currrentstate, arraylength, step) {
    if ((currentstate + step) > arraylenghth) {
        currrentstate = 0;
    }
    else if ((currentstate + step) < 0) {
        currentstate = arraylength;
    }
    else {
        currentstate = currentstate + step;
    }
    return currentstate;
};

//Функция вывода на экран нового состояния
