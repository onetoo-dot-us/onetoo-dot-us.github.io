(function createReusableHeader() {
  const root = document.querySelector("div#root");
  const header = document.createElement("header");
  const h1 = document.createElement("h1");

  const anchor = document.createElement("a");
  anchor.href = "/";
  anchor.textContent = "Onetoo";

  h1.append(anchor);
  header.append(h1);
  root.append(header);
})();
