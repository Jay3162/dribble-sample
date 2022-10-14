let num = document.querySelector(".sidebar-num");
const nextBtn = document.querySelector(".right-btn");
const prevBtn = document.querySelector(".left-btn");
let a = 1;

nextBtn.addEventListener("click", () => {
    if (a <= 4) {
        a++;
        num.textContent = a;
    }
});

prevBtn.addEventListener("click", () => {
    if (a > 1) {
        a--;
        num.textContent = a;
    }
});