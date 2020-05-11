// global document 
const colorPick = document.getElementById("colorPicker");
const myForm = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");


// When size is submitted by the user, call makeGrid()

myForm.addEventListener("submit", function (event){
    event.preventDefault();
    makeGrid()
})

// Make grid to hold it together
function makeGrid(){
  const height = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;
    
    
//remove all children from canvas when submit button gets called to clean the canvas
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  //Loop for height and add tr to canvas
  for (s = 0; s < height; s++) {
    var row = document.createElement("tr");
    canvas.appendChild(row);
    //Loop for width and add td to canvas
    for (z = 0; z < width; z++) {
      let column = document.createElement('td')
      row.appendChild(column);
      // Add eventListener and function to color grid cells
      column.addEventListener("click", fillSquare);
        
         
    }
  }
};
// function to color cells
function fillSquare () {
    this.setAttribute("style", `background-color: ${colorPick.value}`);
}
