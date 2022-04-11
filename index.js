document.title = "onetoo.us";

const root = document.querySelector("div#root");
const header = document.createElement("header");
const h1 = document.createElement("h1");

h1.textContent = "Onetoo";

header.append(h1);
root.append(header);
