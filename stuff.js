let headingElement = document.querySelector("#bigMessage");
console.log(headingElement.textContent);
headingElement.textContent = "Whats happening?"
headingElement.setAttribute("class", "bar foo");
headingElement.style.color = "tomato"
console.log(headingElement.getAttribute("class"));

let bodyElement = document.body;
for (let i=0; i < bodyElement.children.length; i++) {
    let childElement = bodyElement.children[i];
    console.log(childElement.tagName)
}

let newElement = document.createElement("p");
newElement.classList.add("bodyText");
newElement.textContent = "Ooops, I did it again!";
bodyElement.appendChild(newElement);
