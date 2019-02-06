var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var resetButton=document.querySelector("#reset");
var numInput=document.querySelector("input");
var setMax=document.querySelector("p");
var p1Score=0;
var p2Score=0;
var gameOver=false;
var winScore=5;
var minScore=1;

// if(winScore < minScore){
// 	gameOver=true;
// 	resetIt();
// }
// else
// 	gameOver=false;

//For player 1
p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score===winScore){
			p1Display.classList.add("winner");
			gameOver=true;
		}
		p1Display.textContent=p1Score;
	}

});

//For Player 2
p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score===winScore){
			p2Display.classList.add("winner");
			gameOver=true;
		}
		p2Display.textContent= p2Score;
	}
});

//Reset button
resetButton.addEventListener("click",function(){
	resetIt();	
})

//Reset Function
function resetIt(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	gameOver=false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

//for input of winning score
numInput.addEventListener("change",function(){
	 setMax.textContent="Playing to: "+numInput.value;
	 winScore=Number(numInput.value);
	 if(p1Score < winScore && p2Score < winScore && gameOver ==false){
	 	// just update the winScore(Already updated),and let the match continue;
	 }
	 else{
	 resetIt();
	}
});

