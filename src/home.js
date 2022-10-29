export default function homePager() {
  const container = document.querySelector(".container");

  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget sagittis augue. Aliquam consectetur hendrerit velit, et scelerisque dolor fermentum sit amet. Mauris auctor odio ac ex lacinia congue. Quisque a lacus vel mauris porta rutrum. Mauris risus est, rutrum vitae iaculis ac, convallis at diam.";

  container.appendChild(p);
}
