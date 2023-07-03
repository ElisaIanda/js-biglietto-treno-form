const ageInputElement = document.querySelector("[name='age']");
const kmInputElement = document.querySelector("[name='km']");
const fullnameInputElement = document.querySelector("[name='fullname']");
const btnLogin = document.querySelector(".pulsante-registra");
const btnDelate = document.querySelector(".pulsante-annulla");
const pricePerKm = 0.21;
let discount = 0;

console.dir(ageInputElement);

// Aggiunta di event listener
// btnLogin.addEventListener("click", function () {
//     ticket.classList.replace("d-none", "d-block");
//     const fullname = fullnameInputElement.value;
//     let age = ageInputElement.value;
//     const km = kmInputElement.value;

//     if (value == 2) {
//         discount = 40;
//         const ticketPrice = km * pricePerKm;
//         const discountAmount = ((ticketPrice * discount) / 100).toFixed(2);
//         const discountedTicketPrice = (ticketPrice - discountAmount).toFixed(2);


//         document.getElementById("fullname").innerHTML = `${fullname}`
//         document.getElementById("ticketpricediscount").innerHTML = `${discountedTicketPrice} €`

//         console.log(`Il biglietto costa ${ticketPrice}, lo sconto applicato è del ${discount}% (${discountAmount}),
//         ed il prezzo finale da pagare è ${discountedTicketPrice}`);

//     } else if (value == 1) {

//         discount = 20;
//         const ticketPrice = km * pricePerKm;
//         const discountAmount = ((ticketPrice * discount) / 100).toFixed(2);
//         const discountedTicketPrice = (ticketPrice - discountAmount).toFixed(2);

//         document.getElementById("fullname").innerHTML = `${fullname}`
//         document.getElementById("ticketpricediscount").innerHTML = `${discountedTicketPrice} €`

//         console.log(`Il biglietto costa ${ticketPrice}, lo sconto applicato è del ${discount}% (${discountAmount}),
//             ed il prezzo finale da pagare è ${discountedTicketPrice}`);

//     } else {
//         const ticketPrice = km * pricePerKm;
//         document.getElementById("fullname").innerHTML = `${fullname}`
//         document.getElementById("ticketpricediscount").innerHTML = `${ticketPrice} €`
//     }
// });

// Aggiunta di event listener
btnLogin.addEventListener("click", function () {
    ticket.classList.replace("d-none", "d-block");
    const fullname = fullnameInputElement.value;
    const age = ageInputElement.value;
    const km = kmInputElement.value;


    if (age >= 65) {
        discount = 40;
        const ticketPrice = km * pricePerKm;
        const discountAmount = ((ticketPrice * discount) / 100).toFixed(2);
        const discountedTicketPrice = (ticketPrice - discountAmount).toFixed(2);


        document.getElementById("fullname").innerHTML = `${fullname}`
        document.getElementById("ticketpricediscount").innerHTML = `${discountedTicketPrice} €`

        console.log(`Il biglietto costa ${ticketPrice}, lo sconto applicato è del ${discount}% (${discountAmount}),
        ed il prezzo finale da pagare è ${discountedTicketPrice}`);

    } else if (age < 18) {

        discount = 20;
        const ticketPrice = km * pricePerKm;
        const discountAmount = ((ticketPrice * discount) / 100).toFixed(2);
        const discountedTicketPrice = (ticketPrice - discountAmount).toFixed(2);

        document.getElementById("fullname").innerHTML = `${fullname}`
        document.getElementById("ticketpricediscount").innerHTML = `${discountedTicketPrice} €`

        console.log(`Il biglietto costa ${ticketPrice}, lo sconto applicato è del ${discount}% (${discountAmount}),
        ed il prezzo finale da pagare è ${discountedTicketPrice}`);

    } else {
        const ticketPrice = km * pricePerKm;
        document.getElementById("fullname").innerHTML = `${fullname}`
        document.getElementById("ticketpricediscount").innerHTML = `${ticketPrice} €`
        console.log(`Il biglietto costa ${ticketPrice}`);
    }
});


btnDelate.addEventListener("click", function () {
    ticket.classList.toggle("d-none");

});







