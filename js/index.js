// Задаем начальное значение состояния страницы
let stateproject = 0;
let stateteam = 0;
// Массивы элементов для слайдера
const repairProjectsArr = [
    {
        img: './images/second.jpg',
        city: 'Rostov-on-Don LCD admiral',
        area: '81 m2',
        time: '3.5 months'
    },
    {
        img: './images/second1.jpg',
        city: 'Sochi Thieves',
        area: '105 m2',
        time: '4 months'
    },
    {
        img: './images/second2.jpg',
        city: 'Rostov-on-Don Patriotic',
        area: '93 m2',
        time: '3 months'
    },
];
const teamPhotoArr = [
    './images/image54.jpg',
    './images/image55.jpg',
    './images/image56.jpg',
    './images/image57.jpg'
];
// Обработчики нажатий десктоп
document.getElementById("projects__right").addEventListener("click", () => {
    stateproject = changeState(stateproject, repairProjectsArr.length, 1);
    repairProjectsreplace (stateproject);
});
document.getElementById("projects__left").addEventListener("click", () => {
    stateproject = changeState(stateproject, repairProjectsArr.length, -1);
    repairProjectsreplace (stateproject);
});
document.getElementById("project1").addEventListener("click", () => {
    stateproject = 0;
    repairProjectsreplace (stateproject);
});
document.getElementById("project2").addEventListener("click", () => {
    stateproject = 1;
    repairProjectsreplace (stateproject);
});
document.getElementById("project3").addEventListener("click", () => {
    stateproject = 2;
    repairProjectsreplace (stateproject);
});
document.getElementById("project1dot").addEventListener("click", () => {
    stateproject = 0;
    repairProjectsreplace (stateproject);
});
document.getElementById("project2dot").addEventListener("click", () => {
    stateproject = 1;
    repairProjectsreplace (stateproject);
});
document.getElementById("project3dot").addEventListener("click", () => {
    stateproject = 2;
    repairProjectsreplace (stateproject);
});
// Обработчики нажатий мобильная
document.getElementById("mobile-slider__right").addEventListener("click", () => {
    stateproject = changeState(stateproject, repairProjectsArr.length, 1);
    repairProjectsreplace (stateproject);
});
document.getElementById("mobile-slider__left").addEventListener("click", () => {
    stateproject = changeState(stateproject, repairProjectsArr.length, -1);
    repairProjectsreplace (stateproject);
});
document.getElementById("mobile-slider2__right").addEventListener("click", () => {
    stateteam = changeState(stateteam, teamPhotoArr.length, 1);
    teamPhotoMobilereplace (stateteam);
});
document.getElementById("mobile-slider2__left").addEventListener("click", () => {
    stateteam = changeState(stateproject, teamPhotoArr.length, -1);
    teamPhotoMobilereplace (stateteam);
});

// Функция изменения состояния страницы со слайдером
function changeState (currentstate, arraylength, step) {
    let newstate;
    if ((currentstate + step) > (arraylength-1)) {
        newstate = 0;
    }
    else if ((currentstate + step) < 0) {
        newstate = arraylength -1;
    }
    else {
        newstate = currentstate + step;
    }
    return newstate;
}
//Функция вывода на экран нового состояния
function repairProjectsreplace (id) {
    // Меняем содержимое в десктопной версии
    document.getElementById("projects__img").style.backgroundImage = `url(${repairProjectsArr[id].img})`;
    document.getElementById("projects__city").innerHTML = repairProjectsArr[id].city;
    document.getElementById("projects__area").innerHTML = repairProjectsArr[id].area;
    document.getElementById("projects__time").innerHTML = repairProjectsArr[id].time;
    // Меняем точки
    let dots = document.getElementsByClassName("dot");
    for (i=0; i < dots.length; i++) {
        dots[i].src = "./images/dot2.svg";
    }
    dots[id].src = "./images/dot.svg";
    // Меняем картинку в мобильной версии
    document.getElementById("projects__img-mobile").style.backgroundImage = `url(${repairProjectsArr[id].img})`;
}
function teamPhotoMobilereplace (id) {
    document.getElementById("team__photo-mobile").style.backgroundImage = `url(${teamPhotoArr[id]})`;
} 