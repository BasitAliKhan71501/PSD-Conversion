const main = document.querySelector('.main');
const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');

let x = false;
main.addEventListener('click', () => {
    if (x == false) {
        div2.classList.add("div22");
        div1.classList.add("div11");
        div3.classList.add("div33");
        x = true;

    } else {
        div2.classList.remove("div22");
        div1.classList.remove("div11");
        div3.classList.remove("div33");
        x = false;
    }
});


const firstBtn = document.querySelector('#firstBtn');
const secondBtn = document.querySelector('#secondBtn');


secondBtn.addEventListener('click', () => {
    let x = false;
    if (x == false) {
        secondBtn.classList.add("activeBtn");
        secondBtn.classList.remove("inActive");
        firstBtn.classList.add("inActive");
        firstBtn.classList.remove("activeBtn");

        x = true;

    } else {
        secondBtn.classList.remove("activeBtn");
        secondBtn.classList.add("inActive");
        firstBtn.classList.remove("inActive");
        firstBtn.classList.add("activeBtn");
        x = false;
    }
})
firstBtn.addEventListener('click', () => {
    let x = false;
    if (x == false) {
        firstBtn.classList.add("activeBtn");
        firstBtn.classList.remove("inActive");
        secondBtn.classList.remove("activeBtn");
        secondBtn.classList.add("inActive");
        x = true;

    } else {
        firstBtn.classList.remove("activeBtn");
        firstBtn.classList.add("inActive");
        secondBtn.classList.add("activeBtn");
        secondBtn.classList.remove("inActive");
        x = false;
    }
})