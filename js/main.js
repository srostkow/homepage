console.log('siema');
const name = 'Maciek';
const age = 31;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

console.log('Witaj przybyszu');

const about = document.querySelector('.about__paragraph--js');

console.log(about.innerHTML);

about.innerHTML = "Pozdro js";

function calculate(x) {
    x = x + 3;
    console.log(x);
    return x*7
}

calculate(1);
console.log(calculate(2));

const button = document.querySelector('.header__button--js');

button.addEventListener('click', (e) => {
    const header = document.querySelector('.header__title--js');
    header.innerHTML = 'klick klick';
});

const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});