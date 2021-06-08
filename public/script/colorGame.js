var squares=document.querySelectorAll(".square");
var numOfSq=6;
var pickedColor="";
var t=generatePickedColor(numOfSq);
var displayMessage=document.querySelector("#msg");
var button=document.querySelector("button");
var easy=document.querySelector("#easybtn");
var hard=document.querySelector("#hardbtn");
var clickedColor="";
var colors=generateRandomColors(numOfSq);
var h1=document.querySelector("h1");
var inf=document.querySelector("#info");

 for(var i=0;i<squares.length;i++){

		squares[i].style.backgroundColor=colors[i];
		pickedColor=squares[t].style.backgroundColor;
		document.querySelector("#head").textContent=pickedColor;
		
	    check();
	
	}

	
function check(){
    for(var i=0;i<squares.length;i++){
    squares[i].addEventListener("click",function () {
    	clickedColor=this.style.backgroundColor;
	if(clickedColor===pickedColor){
            displayMessage.textContent="Correct!";
            h1.style.backgroundColor=pickedColor;
		    trueitis();
            button.textContent="Play Again";
	    }
	    else{
		    this.style.backgroundColor="#232323";
            displayMessage.textContent="Try Again!";
	    }
	})
}
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(rgb());
	}
	return arr;
}
function rgb(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return("rgb("+r+", "+g+", "+b+")");
}
function generatePickedColor(num){
	return (Math.floor(Math.random()*num));
}

function trueitis(){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=pickedColor;
	}
}
button.addEventListener("click",function(){
	reset();
})
function reset(){
     for(var i=0;i<squares.length;i++){

        var colors=generateRandomColors(numOfSq);
		squares[i].style.backgroundColor=colors[i];
		t=generatePickedColor(numOfSq);
		pickedColor=squares[t].style.backgroundColor;
		document.querySelector("#head").textContent=pickedColor;
		}
		displayMessage.textContent="";
		button.textContent="New Game";
		h1.style.backgroundColor="steelblue";
		check();
}
easy.addEventListener("click",function(){
	this.classList.add("selected");
	hard.classList.remove("selected");
	numOfSq=3;
	reset();
	for(var i=3;i<6;i++){
		squares[i].style.display="none";
	}
})
hard.addEventListener("click",function(){
	this.classList.add("selected");
	easy.classList.remove("selected");
	numOfSq=6;
	reset();
	for(var i=0;i<6;i++){
		squares[i].style.display="block";
	}
})

inf.addEventListener("click",function(){
	alert("RED + BLUE = MAGENTA\nRED + GREEN = YELLOW\nBLUE + GREEN = CYAN\nThe intensity of each color is from 0 to 255\nChoose the color which fits most accurate\nGood Luck!!!");
})	

