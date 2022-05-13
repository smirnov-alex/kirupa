for (let i = 0; i < 10; i++) {
    sayHello();
}

function sayHello() {
    document.writeln("Hello!");
}

let floors = 27;
for (let i = 1; i <= floors; i++) {
    if (i == 13) {
        continue;
    }
    document.writeln("At floor: " + i + "<br>");
}

function stopWatch() {
    let startTime = Date.now();
    function getDelay() {
        let elapsedTime = Date.now() - startTime;
        alert(elapsedTime);
    }
    return getDelay;
}
let timer = stopWatch();
// Сделать что-нибудь за некоторое время.
for (let i = 0; i < 1000000; i++) {
    let foo = Math.random() * 10000;
}
// Вызвать возвращаемую функцию.
timer();

