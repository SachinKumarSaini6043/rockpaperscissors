let userScore=0;
let compScore=0;

let games=document.querySelectorAll(".game ");
let move=document.querySelector("#move");
let perauserScore=document.querySelector("#userscore");
let peracompuScore=document.querySelector("#compscore");


let gencompchoice=()=>{

   let opsation=["rock","paper","scissors"];
   let rendminx =Math.floor(Math.random()*3);
   return opsation[rendminx];

   }

let drowgame =()=>{

    move.innerText="game was draw";
    move.style.backgroundColor="black" ;
    
   }

let showwinner=(userwin ,userchoice , compuchoice)=>{
    if(userwin){
        userScore++;
        perauserScore.innerText=userScore;
       move.innerText=`you win! your ${userchoice} Beats ${compuchoice}`;
       move.style.backgroundColor="green" ;
      
      }
        else{
        compScore++;
        peracompuScore.innerText=compScore;
        move.innerText=`you lose ${compuchoice} Beats your ${userchoice}`;
        move.style.backgroundColor="red" ;

         }
         }    


let gamePlay=(userchoice )=>{
   console.log("user choice  ",userchoice );
   let compchoice=gencompchoice();
 console.log("compuchoice ",compchoice);

 if(userchoice===compchoice){
    drowgame()
    }

 else{
    let userwin = true;
    if(userchoice==="rock"){
        userwin=compchoice === "paper"? false:true;

       }
    
       else if(userchoice==="paper"){
        userwin=compchoice === "scissors"?false:true;
       }
   
       else {
        userwin=compchoice=== "rock" ? false:true;    
       }
     
         
        showwinner(userwin , userchoice,compchoice);
      }
      }


   games.forEach((game)=>{
   game.addEventListener("click",()=>{
   let userchoice =game.getAttribute("id");
 
     gamePlay(userchoice );
     
    })
  })