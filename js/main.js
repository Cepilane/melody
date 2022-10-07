$(document).ready(function () {
    let currentFloor = 2; // Начало этажей с двойки
    let counterUp = $(".counter-up"); // Взаимодействуем со стрелкой вверх
    let counterDown = $(".counter-down"); // кнопка уменьшения этажа
    let floorPath = $(".home-image path");
    let modal = $(".modal");
    let modalCloseButton = $(".modal-close-button");
    floorPath.on("mouseover", function () { // Говорим, что при ведении мышкой вверх и вниз по картинке здания, будет подсветчиваться этаж
        floorPath.removeClass('current-floor'); // убираем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // будет автоматически подсчитываться этаж из index.html путей
        $(".counter").text(currentFloor); // и будет выводить текст в счётчик справа
    });

    counterUp.on("click", function() { // Здесь при клике на этаж будет выполнятся условие:
        if (currentFloor < 18) { // если этаж больше 18
            currentFloor++; // прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы было 02, а не 2
            $(".counter").text(usCurrentFloor); 
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--; // уменьшаем текущий этаж на 1
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    function toggleModal() {
        modal.toggleClass("is-open");
    }
    floorPath.on("click", toggleModal); // открыть окно при выборе этажа
    modalCloseButton.on("click",toggleModal); // закрыть окно при клике на кнопку закрыть
}); // Эта функция проверяет готовность нашего сайта к манипуляциям