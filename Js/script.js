'use strict';
let Score0El = document.querySelector('#score--0');
let Score1El = document.querySelector('#score--1');
let Current0El = document.querySelector('#current--0');
let Current1El = document.querySelector('#current--1');
let Player0 = document.querySelector('.player--0');
let Player1 = document.querySelector('.player--1');
let Dice =document.querySelector('.dice');
let NewBtn =document.querySelector('.btn--new');
let RolleBtn =document.querySelector('.btn--roll');
let HoldBtn =document.querySelector('.btn--hold');
const scorse =[0,0];
let Score0 =0;
let AcrivePlayer=0;
Score0El.textContent=scorse[0];
Score1El.textContent=scorse[1];
console.log(Dice.src);
//hidden dice
Dice.classList.add('hidden');
//switch user
let SwitchUser=function(){
   document.getElementById(`current--${AcrivePlayer}`).textContent = 0;
   console.log(AcrivePlayer);
   if(AcrivePlayer ===0){
      scorse[0]+=Score0;
      AcrivePlayer=1;
      Player0.classList.remove('player--active');
      Player1.classList.add('player--active');
   }else{
      scorse[1]+=Score0;
      AcrivePlayer=0;
      Player0.classList.add('player--active');
      Player1.classList.remove('player--active');
   }
   Score0 =0;
   Score0El.textContent=scorse[0];
   Score1El.textContent=scorse[1];
}
//choose number from dice
RolleBtn.addEventListener('click',function(){
 const number = Math.trunc(Math.random()*5)+1;
 const Image = ['dice-1.png','dice-2.png','dice-3.png','dice-4.png','dice-5.png'];
 Dice.classList.remove('hidden');
 Dice.src='/img/'+Image[number-1];

 if(number !==1)
 {
    Score0 = Score0+number;
    document.getElementById(`current--${AcrivePlayer}`).textContent = Score0;
 }else{
   SwitchUser();
 }

});
HoldBtn.addEventListener('click',function(){
   SwitchUser();
   if(scorse[AcrivePlayer]>100)
   {
      Dice.classList.add('hidden');
   }
});