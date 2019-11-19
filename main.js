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