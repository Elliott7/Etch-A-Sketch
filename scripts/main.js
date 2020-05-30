// for each div parent, create 16 child divs



const container = document.querySelector(".container");
let axis=50;
createGrid(axis)


const userGridSize = document.querySelector(".grid-size-number");
userGridSize.addEventListener('input', function(){
    if (this.value >= 1 && this.value <= 200){
        container.textContent = '';
        createGrid(this.value)
        console.log(this.value)
    }
})


function createGrid(axis){
    for (let parentDiv = 0; parentDiv < axis; parentDiv++){
        let currentDiv = document.createElement('div');
        currentDiv.classList.add(`parent-line`);

        for (let childDiv = 0; childDiv < axis; childDiv++){
            let child = document.createElement('div');
            child.classList.add('div-border');
            child.addEventListener("mouseover", function() {
                child.classList.add('div-background');
            })
            child.addEventListener("click", function() {
                child.classList.toggle('div-background');
            })
            currentDiv.appendChild(child);
        }
        container.appendChild(currentDiv);
    }
}

function backgroundChange(option){
    if (option == 'reset'){
        let divBackground = document.querySelectorAll(".div-border");
        divBackground.forEach(div => {
            div.classList.remove('div-background')})
    } else {
        let divBackground = document.querySelectorAll(".div-border");
        divBackground.forEach(div => {
            div.classList.toggle('div-background')})
    }
}


const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", function(){
    backgroundChange('reset')});

const inverseButton = document.querySelector(".inverse-button");
inverseButton.addEventListener("click", function() {
    backgroundChange("inverse")});

const root = document.documentElement;

const redButton = document.querySelector(".red-button");
redButton.addEventListener("click", function() {
    root.style.setProperty('--background-col', 'red')
})

const blueButton = document.querySelector(".blue-button");
blueButton.addEventListener("click", function() {
    root.style.setProperty('--background-col', 'blue')
})

const greenButton = document.querySelector(".green-button");
greenButton.addEventListener("click", function() {
    root.style.setProperty('--background-col', 'green')
})

const yellowButton = document.querySelector(".yellow-button");
yellowButton.addEventListener("click", function() {
    root.style.setProperty('--background-col', 'yellow')
})