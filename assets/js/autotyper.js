var i = 0
var speed = 50
var txt = 'A Software Engineer with a '

const carouselText = [
    {text: "passion for code.", color: "orangered"},
    {text: "drive to succeed.", color: "orange"},
    {text: "need to improve.", color: "Aquamarine"},
]

typeDesc()

async function typeDesc() {
    await typeSentence(txt, "#desc")
    await carousel(carouselText, "#feature-text")
}

async function typeSentence(sentence, eleRef, delay = 80) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
    }

    return;
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function toggleClass(element, functionName) {
    element.classList.toggle(functionName)
}

function toggleCursor() {
    var inputCursor = document.getElementById("cursor");
    toggleClass(inputCursor, "input-cursor")
    toggleClass(inputCursor, "input-cursor-no-movement")
}

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
        await waitForMs(50);
        letters.pop();
        $(eleRef).html(letters.join(""));
    }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
    updateFontColor(eleRef, carouselList[i].color)
    await typeSentence(carouselList[i].text, eleRef);
    toggleCursor()
    await waitForMs(1500);
    toggleCursor()
    await deleteSentence(eleRef);
    toggleCursor()
    await waitForMs(150);
    toggleCursor()
    i++
    if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
}