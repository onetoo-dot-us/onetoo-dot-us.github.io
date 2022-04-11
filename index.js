(function createReusableHeader() {
  const root = findRoot();
  const { anchor, h1, header } = createElements();

  anchor.href = "/";
  anchor.textContent = "Onetoo";

  root.append(header);
  header.append(h1);
  h1.append(anchor);
})();

function findRoot() {
  return document.querySelector("div#root");
}

function createElements() {
  const anchor = document.createElement("a");
  const h1 = document.createElement("h1");
  const header = document.createElement("header");

  return { anchor, h1, header };
}
