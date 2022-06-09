console.log("JavaScript linked");

items = [
    {"name": "Archer", "id":1, "img":"./img/enfant.jpeg"},
    {"name": "Archer", "id":1, "img":"./img/enfant.jpeg"},
    {"name": "Archer", "id":1, "img":"./img/enfant.jpeg"},
    {"name": "Archer", "id":1, "img":"./img/enfant.jpeg"},
    {"name": "Archer", "id":1, "img":"./img/enfant.jpeg"},
    {"name": "Archer", "id":1, "img":"./img/enfant.jpeg"},
    {"name": "Archer", "id":1, "img":"./img/enfant.jpeg"},
    {"name": "Archer", "id":1, "img":"./img/enfant.jpeg"},
    {"name": "Archer", "id":1, "img":"./img/enfant.jpeg"},
    ];

document.addEventListener("DOMContentLoaded", () => {
    let options = {
        root: null,
        rootMargins: "0px",
        threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(document.querySelector("footer"))
    getData();
});

function handleIntersect(entries) {
    if (entries[0].isIntersecting) {
        getData();
    }
}

function getData() {
    let main = document.querySelector("main");
    for (var i = 0; items[i]; i++) {
        let fig = document.createElement("figure");
        let fc = document.createElement("figcaption");
        let img = document.createElement("img");
        img.src = items[i].img;
        img.alt = items[i].name;
        img.textContent = items[i].name;
        fig.appendChild(img);
        fig.appendChild(fc);
        main.appendChild(fig);
    }
}