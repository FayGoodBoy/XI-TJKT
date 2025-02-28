document.addEventListener("DOMContentLoaded", function () {
    const blockContainer = document.querySelector(".blocks");
    const shapes = ["square", "circle", "triangle", "pentagon", "hexagon"];

    for (let i = 0; i < 30; i++) {
        let block = document.createElement("div");
        let randomShape = shapes[Math.floor(Math.random() * shapes.length)];

        block.classList.add("block", randomShape);
        block.style.left = `${Math.random() * 100}vw`;
        block.style.animationDuration = `${Math.random() * 5 + 5}s`;

        blockContainer.appendChild(block);
    }
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    const jamContainer = document.getElementById("jam-container");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        jamContainer.style.display = "block"; 
    } else {
        menu.style.display = "block";
        jamContainer.style.display = "none"; 
    }
}

function updateJam() {
    const now = new Date();
    const jam = now.getHours().toString().padStart(2, "0");
    const menit = now.getMinutes().toString().padStart(2, "0");
    const detik = now.getSeconds().toString().padStart(2, "0");
    document.getElementById("jam").textContent = `${jam}:${menit}:${detik}`;
}

setInterval(updateJam, 1000);
updateJam();