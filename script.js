function flipColor(){
    let colorBox = document.getElementById("colorbox");
let r= Math.floor(Math.random()*256);
let g= Math.floor(Math.random()*256);
let b= Math.floor(Math.random()*256);
colorBox.style.backgroundColor="rgb("+r+","+g+","+b+")";
}


//rgb(red,green,blue)
//red,green,blue - 0 to 255
//random(5) - 0 to 4 , 0.4, 3.5