var numSq = 6
var colors =[];
var chosen;
var messageCon = document.querySelector("#message")
var spen = document.querySelector("#headspan");
spen.textContent = chosen;
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode")
var resetButt = document.querySelector("#reset")

init();

function init(){
	setUpModeButt()
	squareListeners()
	resetAll(numSq);
}

resetButt.addEventListener("click",function(){
	resetAll(numSq);
})

function setUpModeButt(){
	for(var i=0;i<modeButtons.length;i++){
			modeButtons[i].addEventListener('click',function(){
				for (var j =0; j<modeButtons.length;j++){
					modeButtons[j].classList.remove("selected")
				}
				this.classList.add("selected");
				this.textContent ==="Easy" ? numSq = 3: numSq = 6;
				resetAll(numSq)
			})

		}
}

function squareListeners(){
	for(i=0;i<squares.length;i++) {
			squares[i].addEventListener("click",function(){
				if (chosen==this.style.backgroundColor){
					messageCon.textContent = "Correct!"
					changeColors(chosen);
					resetButt.textContent = "Play Again?"
				}
				else{
					this.style.backgroundColor = "#232323";
					messageCon.textContent = "Try Again"
				}
			})
		}
}
//random rgb color
function randomColor(){
	r =  Math.floor(Math.random()*256);
	g =  Math.floor(Math.random()*256);
	b =  Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g +", " + b + ")"
}
//generates an array of random colors
function generateRandomColors(num){
	arr = []
	for(i=0;i<num;i++){
		arr.push(randomColor())
	}
	return arr;
}
//Changing to chosen color(after win)
function changeColors(color) {
	for(i=0;i<colors.length;i++){
		squares[i].style.backgroundColor = color;
	}
	document.querySelector("h1").style.backgroundColor = color;
}
//resets the whole game
function resetAll(num){
	colors= generateRandomColors(num);
	chosen = colors[Math.floor(Math.random()*num)]
	spen.textContent = chosen;
	resetButt.textContent= "New Colors";
	messageCon.textContent = "";
	document.querySelector("h1").style.backgroundColor = "steelblue";
	for(i=0;i<squares.length;i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}		
	}		
}