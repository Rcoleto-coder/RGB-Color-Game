var numSquares = 6;
var colors = []; //starts as an empty array
var pickedColor; //starts undefined
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	// mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent ==="Easy" ? numSquares = 3: numSquares = 6; // outra forma de escrever o If

			//if(this.textContent === "Easy"){
			//	numSquares = 3;
			//}else {
			//	numSquares = 6;
			//}
			reset();
		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) { 
		// add click listeners to squares
		squares[i].addEventListener("click", function(){ 
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			}else
				{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
				}
		});
	}
}

function reset(){
	//Erases the "Correct" message
	messageDisplay.textContent = "";
	//Change the button text "Play Again" to "New Colors"
	resetButton.textContent = "New Colors";
	//Generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of squares.
	for(var i = 0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block"; //exibe novamente os 3 últimos quadrados
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none"; //apaga os 3 últimos quadrados

		}			
			
	
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	}


}

/*easyBtn.addEventListener("click", function(){

	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i < squares.length; i++){
		if(colors[i]){ //check if there is color at i position.
			squares[i].style.background = colors[i]
		}else{
			squares[i].style.display = "none"; //hide the bottom 3 squares
			 }
	}
});

hardBtn.addEventListener("click", function(){
	
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i < squares.length; i++){
			squares[i].style.background = colors[i]
			squares[i].style.display = "block"; //unhide the bottom 3 squares
		
	}
});*/


resetButton.addEventListener("click", function(){
	reset();

});

function changeColors(color){

	//loop through all squares
	for (var i=0; i < squares.length; i++){
	//change each color to match given color	
	squares[i].style.background = color;

	}

}

	function pickColor(){ 
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

	function randomColor(){
		//pick a "red" 0 - 255
		var R = Math.floor(Math.random() * 256);
		//pick a "green" 0 - 255
		var G = Math.floor(Math.random() * 256);
		//pick a "blue" 0 - 255
		var B = Math.floor(Math.random() * 256);
		return "rgb(" + R + ", " + G + ", " + B + ")";
	}
