import { sum } from "./utils/math";

const message = "hello";

console.log(message, message.length, sum(1, 2));

const h1Element = document.createElement("h1");
h1Element.innerHTML = message;
document.body.appendChild(h1Element);
