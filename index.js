const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popContainerEl = document.querySelector(".pop-container");
const closeIconEl = document.querySelector(".close-icon");


btnEl.addEventListener("click", () =>{
    containerEl.classList.add("active");
    popContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () =>{
    containerEl.classList.remove("active");
    popContainerEl.classList.add("active");
});


