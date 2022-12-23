// Make horizontal scrolling
const main = document.querySelector("main");
const html = document.querySelector("html");

main.addEventListener("wheel", (e) => {
    e.preventDefault();
    const horizontalScrollSpeed = 25;
    html.scrollLeft += e.deltaY * horizontalScrollSpeed;
})


// Observer
const titles = document.querySelectorAll(".sectionTitle");
const navLinks = document.querySelectorAll(".navLink");

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting)
            ChangeSelectedPage(entry.target.getAttribute("data-id"), false)
        if (entry.isIntersecting)
            ChangeSelectedPage(entry.target.getAttribute("data-id"), true)
    })
});

titles.forEach(title => {
    observer.observe(title)
})

function ChangeSelectedPage(titleDataId, isOnScreen) {
    switch (titleDataId) {

        case "mountain":
            if (isOnScreen)
                navLinks[0].classList.add("mountainSub");
            else if (!isOnScreen)
                navLinks[0].classList.remove("mountainSub");
            break;

        case "forest":
            if (isOnScreen)
                navLinks[1].classList.add("forestSub");
            else if (!isOnScreen)
                navLinks[1].classList.remove("forestSub");
            break;

        case "ocean":
            if (isOnScreen)
                navLinks[2].classList.add("oceanSub");
            else if (!isOnScreen)
                navLinks[2].classList.remove("oceanSub");
            break;

        case "city":
            if (isOnScreen)
                navLinks[3].classList.add("citySub");
            else if (!isOnScreen)
                navLinks[3].classList.remove("citySub");
            break;
    }
}

// See gallery

const galleryBtns = document.querySelectorAll(".galleryBtn");
galleryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.classList.add("fadeOut");
        btn.parentElement.parentElement.children[1].classList.add("fadeIn");
    })
});