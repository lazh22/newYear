// Список музыки
let music1 = new Howl({
    src: ["audio/1.mp3"],
    loop: true,
    volume: 0.5
});
let music2 = new Howl({
    src: ["audio/2.mp3"],
    loop: true,
    volume: 0.5
});
let music3 = new Howl({
    src: ["audio/3.mp3"],
    loop: true,
    volume: 0.5
});
// Проигрыш музыки при нажатии на игрушку (Компутер)
$("#tree>img").click(function (e) {
    $("#tree>img").removeClass("shaking")
    let name = e.target.id;

    if (name == "toy1") {
        $(e.target).addClass("shaking");
        music2.stop();
        music3.stop();

        music1.play();
    } else if (name == "toy2") {
        $(e.target).addClass("shaking");
        music1.stop();
        music3.stop();

        music2.play();
    } else if (name == "toy3") {
        $(e.target).addClass("shaking");
        music2.stop();
        music1.stop();

        music3.play();
    }
});
// Остановка музыки при нажатии на звезду (Компутер)
$("#tree>#treeStar").click(function (e) {
    $("#tree>img").removeClass("shaking")
    music1.stop();
    music2.stop();
    music3.stop();
});
// Проигрыш музыки при нажатии на игрушку (Смартфон)
$("#treeMobile>img").click(function (e) {
    $("#treeMobile>img").removeClass("shaking")
    let name = e.target.id;

    if (name == "toy1") {
        $(e.target).addClass("shaking");
        music2.stop();
        music3.stop();

        music1.play();
    } else if (name == "toy2") {
        $(e.target).addClass("shaking");
        music1.stop();
        music3.stop();

        music2.play();
    } else if (name == "toy3") {
        $(e.target).addClass("shaking");
        music2.stop();
        music1.stop();

        music3.play();
    }
});
// Остановка музыки при нажатии на звезду (Смартфон)
$("#treeMobile>#treeStar").click(function (e) {
    $("#treeMobile>img").removeClass("shaking")
    music1.stop();
    music2.stop();
    music3.stop();
});

let timer = setInterval(function () {
    let newYear = new Date("1 January 2021 00:00:00");
    let now = new Date();
    let diff = newYear - now;
    let days = Math.floor(diff / (24 * 60 * 60 * 1000));
    let hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((diff % (60 * 1000)) / 1000);

    $(".seconds").text(seconds + " ");
    $(".minutes").text(minutes + ": ");
    $(".hours").text(hours + ": ");
    $(".days").text(days + ": ");
}, 1000)
$(".hat").click(function (e) {
    $(e.currentTarget).addClass("hatBounce");
    setTimeout(function () {
        $(e.currentTarget).removeClass("hatBounce");
    }, 1500)
});
setInterval(function () {
    $(".hand-r").addClass("hand-rSwing");
    setTimeout(function () {
        $(".hand-r").removeClass("hand-rSwing");
    }, 1500)
}, 3500)