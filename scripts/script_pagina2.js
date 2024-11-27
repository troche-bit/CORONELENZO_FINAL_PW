document.getElementById("submitName").addEventListener("click", function () {
    const userName = document.getElementById("userNameInput").value;
    const personalizedMessage = document.getElementById("personalizedMessage");

    if (userName.trim() !== "") {
        personalizedMessage.textContent = `¡Hola, ${userName}! Nos alegra que estés aquí.`;
        personalizedMessage.style.color = "green";
    } else {
        personalizedMessage.textContent = "Por favor, ingresa un nombre válido.";
        personalizedMessage.style.color = "red";
    }
});
