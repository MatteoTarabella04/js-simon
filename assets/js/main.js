/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// seleziono l'elemento con classe 'container' nel DOM
const numbersEl = document.querySelector('.numbers')

generateNumbers();

const numsTimeout = setTimeout(hideNums, 30000)



/* FUNCTIONS */
// genera 5 numeri casuali
function generateNumbers() {

   //creo un array che contiene i numeri randomici
   const randomNumbers = [];

   //eseguo un ciclo for per riempire l'array e creare 5 elementi che contengono i numeri generati
   for (let i = 0; i < 5; i++) {

      let randomNum = getRandomInteger(100, 1);

      while (randomNumbers.includes(randomNum)){
         randomNum = getRandomInteger(100, 1);
      }
      randomNumbers.push(randomNum);
      
      const strongEl = `<strong>${randomNumbers[i]}</strong>`;
      numbersEl.insertAdjacentHTML('beforeend', strongEl);

   }
   console.log(randomNumbers);
}

// funzione che nasconde i numeri
function hideNums() {
   numbersEl.classList.add('d_none')
}


function getRandomInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}