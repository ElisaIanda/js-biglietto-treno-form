// const firstName = prompt("Inserisci il tuo nome");
// const lastName = prompt("Inserisci il tuo cognome");
// const userAge = prompt("Quanti anni hai?");
// const tripKm = prompt("Quanti chilometri devi fare?");

const usernameInputElement = document.querySelector("[name='age']");
const passwordInputElement = document.querySelector("[name='km']");
const btnLogin = document.querySelector(".pulsante-accedi");
// const pricePerKm = 0.21;
// const ticketPrice = tripKm * pricePerKm;
// let discount = 0;

// Aggiunta di event listener
btnLogin.addEventListener("click", function () {

    const age = ageInputElement.value;
    const km = kmInputElement.value;

    if (km !== "40") {
        alert("km sbagliati");
    } else {
        // quando la password è giusta, modifichiamo l'h1 scrivendo Benvenuto "Nome utnete"

        // modifico contenuto
        mainTitleElement.innerHTML = "Benvenuto " + age + "!";
    }
});

// if (userAge > 65) {
//     discount = 40;
//     const discountAmount = ((ticketPrice * discount) / 100).toFixed(2);
//     const discountedTicketPrice = (ticketPrice - discountAmount).toFixed(2);

//     document.getElementById("risposta").innerHTML = `Il biglietto costa ${ticketPrice} euro, lo sconto applicato è del ${discount}% (${discountAmount}euro), 
//     ed il prezzo finale da pagare è ${discountedTicketPrice} euro.`

//     //     console.log(`Il biglietto costa ${ticketPrice}, lo sconto applicato è del ${discount}% (${discountAmount}), 
//     // ed il prezzo finale da pagare è ${discountedTicketPrice}`);

// } else if (userAge < 18) {

//     discount = 20;
//     const discountAmount = ((ticketPrice * discount) / 100).toFixed(2);
//     const discountedTicketPrice = (ticketPrice - discountAmount).toFixed(2);

//     document.getElementById("risposta").innerHTML = `Il biglietto costa ${ticketPrice} euro, lo sconto applicato è del ${discount}% (${discountAmount}euro), 
//         ed il prezzo finale da pagare è ${discountedTicketPrice} euro.`

//     //     console.log(`Il biglietto costa ${ticketPrice}, lo sconto applicato è del ${discount}% (${discountAmount}), 
//     // ed il prezzo finale da pagare è ${discountedTicketPrice}`);

// } else {

//     document.getElementById("risposta").innerHTML = `Il biglietto costa ${ticketPrice} euro, nessuno sconto è disponibile.`
// }