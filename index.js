const body=document.querySelector("body");
body.style.display = "flex";
body.style.justifyContent = "center";



//Input Button
const button = document.createElement("button");
button.textContent = "Create";
body.appendChild(button);
button.addEventListener("click",()=>{
    grid.innerHTML="";
    let input = 101;  
    while(input>100){
        input = Number(prompt("Enter the number of squares(<100) : "));
    };
    createGrid(input);
});

//Main Container
const grid = document.createElement("div");
grid.style.height="700px";
grid.style.width="700px";
grid.style.display="flex";
grid.style.flexWrap="wrap";
grid.style.backgroundColor="black";

body.appendChild(grid);


const gridColors = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];

//creates nxn grid as per the user
function createGrid(input){

    let gridItems = new Array(input*input);

    for(let i=0;i<(input*input);i++){
        gridItems[i] = document.createElement("div");
        gridItems[i].style.width = `${Number((700/input).toFixed(2))}px`;
        gridItems[i].style.height = `${Number((700/input).toFixed(2))}px`;
        gridItems[i].style.boxSizing = "border-box";
        gridItems[i].style.border = "1px solid black";
        gridItems[i].style.backgroundColor = "white";
        gridItems[i].style.opacity = "1";
        grid.appendChild(gridItems[i]);
        
    }
}
grid.addEventListener("mouseover",(event)=>{
    event.target.style.backgroundColor = gridColors[Math.floor((Math.random()) * 16)];
    event.target.style.opacity -= 0.1;
});
grid.addEventListener("click",(event)=>{
    event.target.style.backgroundColor = "";
});



createGrid(16);