// Write your code here!
const main = document.querySelector("#main");

main.remove();


const newHeader = document.createElement('h1');
const body = document.querySelector('body');

newHeader.setAttribute("id", "victory")

newHeader.textContent = "Your name is the champion"
console.log(body)




body.append(newHeader);

//const element = document.createElement("div");
// document.body.append(element);
// const ul = document.createElement("ul");
// for (let i = 0; i < 3; i++){
//     const li = document.createElement('li');
//     li.textContent = (i + 1);
//     ul.append(li);
// }
// element.append(ul);