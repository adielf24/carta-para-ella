
const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");


sobre.addEventListener("click", function() {

    sobre.classList.add("abierto");

    setTimeout(function() {

        carta.style.display = "block";
        sobre.style.display = "none";

        crearCorazones();

    }, 800);

});


function crearCorazones() {

    for (let i = 0; i < 30; i++) {

        const corazon = document.createElement("div");

        corazon.classList.add("corazon-flotante");

        corazon.innerHTML = "❤️";

        corazon.style.left = Math.random() * 100 + "vw";

        corazon.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(corazon);

        setTimeout(function() {
            corazon.remove();
        }, 6000);

    }
}
