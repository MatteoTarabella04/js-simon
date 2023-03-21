/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// seleziono l'elemento con classe 'numbers' nel DOM
const numbersEl = document.querySelector('.numbers')

// seleziono il form nel DOM
const formElement = document.querySelector('form')

const numbers = generateNumbers();

const numsTimeout = setTimeout(hideNums, 10000)
const formTimeout = setTimeout(showForm,10050)

checkUserInput(formElement, numbers)



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

// funzione che visuualizza il form
function showForm(){
   formElement.classList.remove('d_none')
}







// funzione che controlla gli input
function checkUserInput(form, randomNums) {
   form.addEventListener('submit', (e) => {
         e.preventDefault();

         const rightNums = [];

         for (let i = 0; i < 5; i++) {

            if (randomNums.icludes(e.target[i])) {
               rightNums.push(e.target[i]);
            }
         }
      })
}















function getRandomInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}