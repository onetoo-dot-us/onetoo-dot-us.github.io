"use strict";

const everyArticle = document.querySelectorAll("article");

const renderHrElement = makeHrElement();
Object.values(renderHrElement).map((value) => {
  if (typeof value === "function") {
    value.call();
  }
});
renderHrElement();

function makeHrElement() {
  function underHeader() {
    const header = document.querySelector("header");
    if (header) {
      const hr = document.createElement("hr");
      header.append(hr);
    }
  }

  function aboveFooter() {
    const footer = document.querySelector("footer");
    if (footer) {
      const hr = document.createElement("hr");
      footer.prepend(hr);
    }
  }

  function afterEveryArticle() {
    if (everyArticle && everyArticle.length === 0) return;

    const main = document.querySelector("main");
    if (!main) return;

    everyArticle.forEach((article) => {
      const hr = document.createElement("hr");
      const articleParent = article.parentNode;
      if (article !== main.childNodes[1]) {
        articleParent.insertBefore(hr, article);
      }
    });
  }

  return {
    underHeader,
    afterEveryArticle,
    aboveFooter,
  };
}
