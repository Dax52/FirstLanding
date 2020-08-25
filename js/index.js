// Задаем начальное значение состояния страницы
let stateproject = 0;
let stateteam = 0;
// "Элементы DOM для слайдеров"
const projectlink = document.getElementsByClassName("projectdetails-nav__link");
const dots = document.getElementsByClassName("dot");
const arrow = document.getElementsByClassName("vector");
const arrowmobile = document.getElementsByClassName("slider__button");

const projectimg = document.getElementById("projects__img");
const projectcity = document.getElementById("projects__city");
const prijectarea = document.getElementById("projects__area");
const projecttime = document.getElementById("projects__time");
const projectimgmobile = document.getElementById("projects__img-mobile");
const teamphotomobile = document.getElementById("team__photo-mobile");
// console.log(projectlink);
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
for (let element of arrow) {
    element.addEventListener("click", () => {
        if (element.id === "projects__right") {
            stateproject = changeState(stateproject, repairProjectsArr.length, 1);
            repairProjectsreplace (stateproject);
        }   
        else if (element.id === "projects__left") {
            stateproject = changeState(stateproject, repairProjectsArr.length, -1);
            repairProjectsreplace (stateproject);
        }
    });
}
for (let i=0; i < projectlink.length; i++ ) {
    projectlink[i].addEventListener("click", () => {
        if (i != stateproject) {
            stateproject = i;
            repairProjectsreplace (stateproject);
        }
    });
}
for (let i=0; i<dots.length; i++) {
    dots[i].addEventListener("click", () => {
        if (i != stateproject) {
            stateproject = i;
            repairProjectsreplace (stateproject);
        }
    });
}
// Обработчики нажатий мобильная
for (let element of arrowmobile) {
    element.addEventListener("click", () => {
        if (element.parentElement.id === "mobile-slider__right") {
            stateproject = changeState(stateproject, repairProjectsArr.length, 1);
            repairProjectsreplace (stateproject);    
        }
        else if (element.parentElement.id === "mobile-slider__left") {
            stateproject = changeState(stateproject, repairProjectsArr.length, -1);
            repairProjectsreplace (stateproject);    
        }
        else if (element.parentElement.id === "mobile-slider2__right") {
            stateteam = changeState(stateteam, teamPhotoArr.length, 1);
            teamPhotoMobilereplace (stateteam);
        }
        else if (element.parentElement.id === "mobile-slider2__left") {
            stateteam = changeState(stateteam, teamPhotoArr.length, -1);
            teamPhotoMobilereplace (stateteam);
        }
    });
}
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
    projectimg.style.backgroundImage = `url(${repairProjectsArr[id].img})`;
    projectcity.innerHTML = repairProjectsArr[id].city;
    prijectarea.innerHTML = repairProjectsArr[id].area;
    projecttime.innerHTML = repairProjectsArr[id].time;
    // Меняем точки
    for (i=0; i < dots.length; i++) {
        dots[i].src = "./images/dot2.svg";
    }
    dots[id].src = "./images/dot.svg";
    //Меняем активную ссылку
    for (i=0; i < projectlink.length; i++) {
        projectlink[i].className = "projectdetails-nav__link";
    }
    projectlink[id].className = "projectdetails-nav__link projectdetails-nav__link-active";
    // Меняем картинку в мобильной версии
    projectimgmobile.style.backgroundImage = `url(${repairProjectsArr[id].img})`;
}
function teamPhotoMobilereplace (id) {
    teamphotomobile.style.backgroundImage = `url(${teamPhotoArr[id]})`;
} 