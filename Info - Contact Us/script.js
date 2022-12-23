// Submit button animation
const subBtn = document.querySelector(".submitBtn");
const text = document.querySelector(".btnText");
subBtn.addEventListener("click", () => {
    subBtn.classList.add("animate");
    text.classList.add("hide");
    subBtn.removeEventListener("click", () => {});
})