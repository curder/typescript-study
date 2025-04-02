import axios from "axios";
import react from "react";
import _ from "lodash";

import { sum } from "./utils/math";

const message = "hello";

console.log(message, message.length, sum(1, 2));

const h1Element = document.createElement("h1");
h1Element.innerHTML = message;
document.body.appendChild(h1Element);

console.log(_.join(["a", "b", "c"], "-"));

console.log(websiteName, websiteUrl, getWebsiteInfo());
const person = new Person("Jack", 18);
console.log(person.name, person.age);
