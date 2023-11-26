const grid = document.createElement("div");
grid.style.height="700px";
grid.style.width="700px";
grid.style.display="flex";
grid.style.flexWrap="wrap";

const body=document.querySelector("body");
body.appendChild(grid);



let gridItems = new Array(256);

for(let i=0;i<256;i++){
    gridItems[i] = document.createElement("div");
    gridItems[i].style.width = "41.75px";
    gridItems[i].style.height = "41.75px";
    gridItems[i].style.border = "1px solid black"
    grid.appendChild(gridItems[i]);
}

const gridColors = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];

grid.addEventListener("mouseover",(event)=>{
    event.target.style.backgroundColor = gridColors[Math.floor((Math.random()) * 16)];
});
grid.addEventListener("click",(event)=>{
    event.target.style.backgroundColor = "";
})
