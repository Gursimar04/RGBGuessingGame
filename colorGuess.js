var squares= document.querySelectorAll(".option")
var textDisplay=document.getElementById("rgbCol")
var message= document.querySelector("#result")
var h= document.querySelector("h1")
var replay=document.querySelector("#reset") 
var modeButton=document.querySelectorAll(".selectionMode")

var numSq=6
var colorList= []
var picked

init();

function init(){
	setUpSquares()
	setUpModes()	
	redo()
}

function setUpSquares(){
	for(var i=0; i< squares.length;i++)
	{
		squares[i].addEventListener("click",function(){
			var clickedCol= this.style.backgroundColor;
			if(clickedCol===picked)
			{
				message.textContent="Correct!";
				answerFound(clickedCol)
				h.style.backgroundColor=clickedCol
				replay.textContent="Play Again"
			}

			else
			{
				this.style.backgroundColor= "#232323";
				message.textContent="Try again";
			}
		})
	}
}

function setUpModes(){
	for(var i=0; i< modeButton.length; i++){
		
			modeButton[i].addEventListener("click",function(){
			modeButton[0].classList.remove("levelSelect");
			modeButton[1].classList.remove("levelSelect");
			this.classList.add("levelSelect");
			numSq=(this.textContent === "Easy")? 3 : 6
			redo()
		})

	}

}

function redo()
{
	h.style.backgroundColor="steelblue"
	message.textContent=""
	colorList=generateColors(numSq)
	picked=randomSelector();
	textDisplay.textContent = picked;

	replay.textContent="New Colors"

	for(var i=0;i<squares.length;i++)
	{
		if(colorList[i]){
			squares[i].style.display="block"
			squares[i].style.backgroundColor=colorList[i]
		}
		else{
			squares[i].style.display="none"
		}
	}
}

replay.addEventListener("click",redo)


function answerFound(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color
	}
}

function randomSelector()
{
	let random=Math.floor(Math.random()* colorList.length)
	return colorList[random]
}

function generateColors(len){
	var arr=[]
	for(var i=0;i<len;i++){
		arr.push(randomColors())
	}
	return arr;
}

function randomColors() {
	let randomRed=Math.floor(Math.random()* 256)
	let randomGreen=Math.floor(Math.random()* 256)
	let randomBlue=Math.floor(Math.random()* 256)

	let target= "rgb("+ randomRed + ", " + randomGreen + ", " + randomBlue + ")"
	return target
}