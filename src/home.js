export default function home() {
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

  const home = document.createElement("a")
  home.textContent = "Home"
  home.classList.add("home")
  const menu = document.createElement("a")
  menu.textContent = "Menu"
  menu.classList.add("menu")
  const contact = document.createElement("a")
  contact.textContent = "Contact"
  contact.classList.add("contact")

  nav.appendChild(home)
  nav.appendChild(menu)
  nav.appendChild(contact)



  title.textContent = "kaja's";

  circle.appendChild(title);
  leftside.appendChild(circle);
  leftside.appendChild(nav);
  content.appendChild(leftside);
  content.appendChild(container);
}
