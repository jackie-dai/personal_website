

/* AGE */
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

/* -------------- */


/* ANIMAL GENERATOR */

let animalDropdown = document.getElementById("animal-dropdown");
let imgContainer = document.getElementById("img-container");

function displayAnimal() {
      let img = createImage(animalDropdown.value);
      if (imgContainer.childElementCount > 0) {
          imgContainer.textContent = '';
      }
      imgContainer.appendChild(img);
}

let url = '1';

function createImage(type) {
    let image = document.createElement("img");
    
    if (type == "dog") {
        axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
            url = response.data.message;
            image.src = url;
        });
    } else {
        axios.get("https://api.thecatapi.com/v1/images/search?api_key=live_4ReRWzkmmyVtEQyn3GZBJqSS8xgCBl5gBOypjcT0xKpTYjV6jipzwAY903rVw4Ie").then((response) => {
            url = response.data[0].url;
            image.src = url;
        });
    }
    
    image.style.width = "100px";
    image.style.height = "100px";
    return image;
}

/* ------------------------ */