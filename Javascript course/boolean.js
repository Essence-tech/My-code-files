// if (true){
//     console.log("This is Amazing");
// } else {
//      console.log("This is Awesome");
// }

// let manAge = 30;

// if (manAge >= 48) {
//     console.log("You can drive");
// } else if(manAge >= 29) {
//     console.log("Almost there!");
// } else {
//     console.log("You cannot drive")
// }

// truthy and falsy values (they act like true and false).
// e.g of falsy values : false, '', null, undefined, NaN, 0.

// Shortcut for If else statements: 
// Ternary Operator: ?: e.g ----   if (randomNumber >= 0 && randomNumber < 1 / 3){computerMove = 'rock';}
// ----- randomNumber >= 0 && randomNumber < 1 / 3 ? computerMove = 'rock' :computerMove = 'paper' 


   const rock = document.getElementById('rock');
   const paper = document.getElementById('paper');
   const scissors = document.getElementById('scissors');
   let computerMove = '';


   const pickComputerMove = () => {
         const randomNumber = Math.random();

         if (randomNumber >= 0 && randomNumber < 1 / 3){
         computerMove = 'rock';
         } else if (randomNumber >= 1 /3 && randomNumber < 2 / 3){
            computerMove = 'paper';
         } else if (randomNumber >= 2 / 3 && randomNumber < 1){
            computerMove = 'scissors';
         }
         console.log (computerMove);

         return 5;;
   }
   rock.addEventListener('click', function() {
      
      let result = '';

      if (computerMove === 'rock'){
         console.log (result = 'Tie.');
      } else if (computerMove === 'paper'){
         console.log (result = 'You Lose!');
      } else if (computerMove === 'scissors'){
         console.log (result = 'You Win!');
      }

      alert(`You picked rock. Computer picked ${computerMove}. ${result}.`);
   });


   paper.addEventListener('click', function() {
 
      let result = '';

      if (computerMove === 'rock'){
         console.log (result = 'You Win!');
      } else if (computerMove === 'paper'){
         console.log (result = 'Tie.');
      } else if (computerMove === 'scissors'){
         console.log (result = 'You Lose!');
      }

      alert(`You picked paper. Computer picked ${computerMove}. ${result}.`);
   });

   scissors.addEventListener('click', function() {

      let result = '';

      if (computerMove === 'rock'){
         console.log (result = 'You Lose!');
      } else if (computerMove === 'paper'){
         console.log (result = 'You Win!');
      } else if (computerMove === 'scissors'){
         console.log (result = 'Tie');
      }

      alert(`You picked scissors. Computer picked ${computerMove}. ${result}.`);
   });

