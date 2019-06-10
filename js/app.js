 "use strict";
 //These variables are used in this program
 var clickedVar = [];
 var s = document.querySelectorAll(".fa", "fa-star");
 var deck = document.querySelector(".deck");
 console.log(deck);
 var rates = [...s];
 var movcnt = 0;
 var matchcnt = 0;
 var stop;
 var s = 1;
 var m = 0;
 var k = 0;
 var interval;
 var cards = [].slice.call(document.querySelectorAll(".card")); /*a list that holds all of your cards*/
 shuffle(cards).forEach(() => {
   [].filter.call(cards, a => {
     deck.appendChild(a);
   });
 });
 for (var i = 0; i < cards.length; i++) {
   cards[i].addEventListener("click", displaycards);
 }

 function displaycards() //This function is used to dispaly the card when a card is clicked
 {
   clickedVar.push(this);
   if (k == 0) {
     startTimer();
     k += 1;
   }
   this.classList.add("open", "show", "disabled");
   Comparecards();
 }

 function Comparecards() //this function compares the cards whether the card is matched or not
 {
   if (clickedVar.length == 2) {
     moves();
     if (clickedVar[0].children[0].className == clickedVar[1].children[0].className) {
       clickedVar[0].classList.add("match");
       clickedVar[0].classList.remove("open", "show");
       clickedVar[1].classList.add("match");
       clickedVar[1].classList.remove("open", "show");
       clickedVar = [];
       matchCount();
     } else {
       setTimeout(function() {
         clickedVar[0].classList.remove("open", "show", "disabled");
         clickedVar[1].classList.remove("open", "show", "disabled");
         clickedVar = [];
       }, 300)
     }
   }
 }

 function moves() { //this function counts the number of moves made
   movcnt += 1;
   document.querySelector(".moves").innerHTML = movcnt;
   starRating();
 }

 function shuffle(array) { //this function shuffles all the cards when restart and playAgain functions are called
   var currentIndex = array.length,
     temporaryValue, randomIndex;
   while (currentIndex !== 0) {
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
     temporaryValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporaryValue;
   }

   return array;
 }

 function restart() { //this function restarts the game i.e;comes into initial state
   window.location.reload();
 }

 function startTimer() { //this function starts the timer when first click is made
   var min = document.querySelector(".min");
   var sec = document.querySelector(".sec");
   stop = setInterval(function() {
     min.innerHTML = m;
     sec.innerHTML = s;
     s++;
     if (s == 60) {
       m++;
       s = 0;
     }
   }, 1000);
 }

 function stopTimer() //this function stops the timer when matchcount becomes 8
 {
   clearInterval(stop);
 }

 function matchCount() //this function counts the no.of matching cards in the game
 {
   matchcnt += 1;
   if (matchcnt == 8) {
     stopTimer();
     modalmsg();
   }
 }

 function starRating() //this function reduces the starRating based on the no of moves made
 {
   var s = document.querySelector(".stars");
   rates.push(s.children[0], s.children[1], s.children[2]);
   if (movcnt > 8 && movcnt < 17) {
     rates[2].classList.remove("fa-star");
     rates[2].classList.add("fa-star-o");
   } else if (movcnt > 16 && movcnt < 25) {
     rates[1].classList.remove("fa-star");
     rates[1].classList.add("fa-star-o");
   } else if (movcnt > 24 && movcnt < 33) {
     rates[0].classList.remove("fa-star");
     rates[0].classList.add("fa-star-o");
   }

 }

 function modalmsg() { // this function displays the modalbox immediately after the matchcount becomes 8 which means game is over with messages(Congratulations,starRating,playAgain)
   var mod = document.querySelector(".modal");
   var sta = document.querySelector(".st");
   sta.children[0].className = rates[0].className;
   sta.children[1].className = rates[1].className;
   sta.children[2].className = rates[2].className;
   var tym = document.querySelector(".t");
   tym.innerHTML = "You have completed the game in " + m + "min " + (s - 1) + "sec";
   var close = document.getElementsByClassName("close")[0];
   mod.style.display = "block";
   close.onclick = function() {
     mod.style.display = "none";
   }
   window.onclick = function(event) {
     if (event.target == mod) {
       mod.style.display = "none";
     }
   }
 }

 function playAgain() //this function displays a button playAgain and asks whether to playAgain
 {
   window.location.reload();
 }
