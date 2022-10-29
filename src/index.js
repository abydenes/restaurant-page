import "./style.css";

import homePager from "./home";
import menuPager from "./menu";
import contactPager from "./contact";



const content = document.querySelector("#content");
const circle = document.createElement("div");
circle.classList.add("circle");
const title = document.createElement("h1");
title.classList.add("title");
const container = document.createElement("div");
container.classList.add("container");
const leftside = document.createElement("div");
leftside.classList.add("leftside");
const nav = document.createElement("div");
nav.classList.add("nav");

const home = document.createElement("button");
home.textContent = "Home";
home.classList.add("home");
const menu = document.createElement("button");
menu.textContent = "Menu";
menu.classList.add("menu");
const contact = document.createElement("button");
contact.textContent = "Contact";
contact.classList.add("contact");

nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);

title.textContent = "kaja's";

circle.appendChild(title);
leftside.appendChild(circle);
leftside.appendChild(nav);
content.appendChild(leftside);
content.appendChild(container);

function cleanContainer() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
}

const button = document.querySelectorAll("button");
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const cl = e.target.classList.value
    cleanContainer();
    switch (cl) {
      case "home":
        homePager();
        break;
      case "menu":
        menuPager();
        break;
      case "contact":
        contactPager();
      default:
        break;
    }
  });
});

homePager();