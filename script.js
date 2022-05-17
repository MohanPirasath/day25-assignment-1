// the div which contains the classname of "fox_result" is assinged to "fox_result" by using querySelector
const fox_result = document.querySelector(".fox_result");
// the button which contains the classname of "fox_btn" is assinged to "fox_btn" by using querySelector
const fox_btn = document.querySelector(".fox_btn");
// the div which contains the classname of "dog_result" is assinged to "dog_result" by using querySelector
const dog_result = document.querySelector(".dog_result");
// the button which contains the classname of "dog_btn" is assinged to "dog_btn" by using querySelector
const dog_btn = document.querySelector(".dog_btn");
// the div which contains the classname of "one_result" is assinged to "one_result" by using querySelector
const one_result = document.querySelector(".one_result");
// the button which contains the classname of "one_btn" is assinged to "one_btn" by using querySelector
const one_btn = document.querySelector(".one_btn");

// the function named getRandomfox is added to fox_btn by using addEventListener
fox_btn.addEventListener("click", getRandomfox);
// the function named getRandomDog is added to dog_btn by using addEventListener
dog_btn.addEventListener("click", getRandomDog);
// the function named getRandomone is added to one_btn by using addEventListener
one_btn.addEventListener("click", getRandomone);

// the getRandomDog function is created
async function getRandomDog() {
  let b = await fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      dog_result.innerHTML = `
        <img src="${data.url}"/>`;
    })
    .catch(console.log(Error));
}
// the getRandomfox function is created

async function getRandomfox() {
  let a = await fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
      fox_result.innerHTML = `
        <img src="${data.image}"/>`;
    })
    .catch(console.log(Error));
}
// the getRandomone function is created

async function getRandomone() {
  let c = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then((res) => res.json())
    .then((data) => {
      one_result.innerHTML = `
        <img src="${data.image_link}"/>`;
    })
    .catch(console.log(Error));
}
