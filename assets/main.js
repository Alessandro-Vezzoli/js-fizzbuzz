//Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
//per i multipli di 3 stampi “Fizz” al posto del numero
//per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//STAMPARE I NUMERI DA 1 A 100
const elementList = document.querySelector("ul");

for (let i = 100; i >= 1; i--) {
  //in console

  let list = i;
  let colorClass = "";

  if (i % 3 === 0 && i % 5 === 0) {
    // PER I NUMERI CHE SONO SIA MULTIPLI DI 3 CHE PULTIPLI DI 5 STAMPARE fizzbuzz
    list = "FizzBuzz";
    colorClass = "bg-danger";
  } else if (i % 3 === 0) {
    // PER I MULTIPLI DI 3 SCRIVERE fizz
    list = "Fizz";
    colorClass = "bg-success";
  } else if (i % 5 === 0) {
    // PER I MULTIPLI DI 5 STAMPARE buzz
    list = "Buzz";
    colorClass = "bg-warning";
  }
  console.log(list);
  elementList.insertAdjacentHTML(
    "afterbegin",
    ` <li class="list-group-item list-group-horizontal m-1 col-2 ${colorClass}"> ${list}</li> `
  );
}
