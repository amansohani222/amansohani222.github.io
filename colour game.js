var square = document.querySelectorAll(".square");
var clr = [];
var pickedColor;
generateRandomColors(6);
assingColoursToSquares(6);
setLogic(6);
function generateRandomColors(n){
  for(var i=0;i<n;i++)
  { 
     var r =Math.floor(Math.random()*255);
     var b =Math.floor(Math.random()*255);
     var g =Math.floor(Math.random()*255);
     clr[i] = String("rgb"+"("+r+", "+g+", "+b+")"); 
  }
  pickedColor = clr[Math.floor(Math.random()*n)];
  document.querySelector("h1").textContent = pickedColor;
}
function assingColoursToSquares(n){
  for(var i=0;i<n;i++)
  { square[i].style.background=clr[i]; }
}
function setLogic(n)
  { for(var i=0;i<n;i++)
    {  if(square[i].style.background!=pickedColor)
        square[i].addEventListener("click",function(){
          this.style.background= "#232323";
          document.querySelector("#message").textContent = "Try Again";         
        })
       else if(square[i].style.background==pickedColor)
        square[i].addEventListener("click",function(){
           for(var j=0;j<n;j++)
            { square[j].style.background=pickedColor;
            }
           document.querySelector("#a1").style.background=pickedColor;
           document.querySelector("#message").textContent = "Correct!";
           document.querySelector("#message2").textContent = "PLAY AGAIN";
        })
        
    }
  }

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
easy.addEventListener("click",function(){
  easy.classList.add("active");
  hard.classList.remove("active");
  document.querySelector("#a1").style.background="blue";
  generateRandomColors(3);
  assingColoursToSquares(3);
  for(var i=3;i<6;i++)
    { square[i].style.display="none"; }
  setLogic(3);
})
hard.addEventListener("click",function(){
  hard.classList.add("active");
  easy.classList.remove("active");
  document.querySelector("#a1").style.background="blue";
  generateRandomColors(6);
  assingColoursToSquares(6);
  setLogic(6);
})

//clr = ["rgb(255, 0, 0)","rgb(0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)"];





