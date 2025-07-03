const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const countSpans = document.querySelectorAll(".count");
let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

numVisits++;
window.localStorage.setItem("numVisits", numVisits);

countSpans.forEach(span => {
    span.textContent = numVisits;
});
