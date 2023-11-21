const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-list");
const controls = document.querySelectorAll(".control");
const items = document.querySelectorAll(".log");

let currentItem = 0;
const maxItems = items.length;

controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");
        

        if (isLeft) {
            currentItem -= 1;
          } else {
            currentItem += 1;
          }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }
        console.log("control", isLeft, currentItem);

        items.forEach(log => log.classList.remove('current-item'));

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });
    })
})

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active")

});

document.querySelector("#carousel").addEventListener("wheel", Event => {
    if(Event.deltaY > 0) {
        Event.target.scrollBy(400, 0)
    } else {
        Event.target.scrollBy(-400, 0)
    }
})