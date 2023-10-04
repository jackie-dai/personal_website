let ageText = document.getElementById("age");


const milliPerYear = 31540000000


let DOB = new Date("07 April 2004 14:48");
let age = (Date.now() - DOB.getTime()) / milliPerYear;
console.log(age)


function updateAge() {
    let age = (Date.now() - DOB.getTime()) / milliPerYear;
    ageText.innerHTML = "I am " + age.toFixed(10) + " years old.";
}

setInterval(updateAge, 1000);



let animalDropdown = document.getElementById("animal-dropdown");
let imgContainer = document.getElementById("img-container");

function displayAnimal(animal) {
    let img = createImage(animalDropdown.value);
    imgContainer.appendChild(img);
}


function createImage(type) {
    let image = document.createElement("img");
    image.src = "./images/" + type + "1.jpg";
    image.style.width = "100px";
    image.style.height = "100px";
    return image;
}