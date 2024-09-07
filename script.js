// Function to show alert on form submission

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event){
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting.");
        } else {
            alert("Thank you for messaging!");
            document.getElementById("contactForm").reset();
        }
    });
});

// Function to change BG color after clicking project titles

document.addEventListener("DOMContentLoaded", function() {
    function changeBackgroundColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = 255;
        return `rgb(${r}, ${g}, ${b})`;
    }

    const projectTitles = document.querySelectorAll(".project-title");

    projectTitles.forEach(function(title) {
        title.addEventListener("click", function() {
            const randomBlueShade = changeBackgroundColor();
            document.getElementById("portfolio").style.backgroundColor = randomBlueShade;
        });
    });
});
