"use strict";

function makeHrElements() {
  function makeHrUnderHeader() {
    const header = document.querySelector("header");
    if (header) {
      const hr = document.createElement("hr");
      header.append(hr);
    }
  }

  function makeHrAboveFooter() {
    const footer = document.querySelector("footer");
    if (footer) {
      const hr = document.createElement("hr");
      footer.prepend(hr);
    }
  }

  function makeHrAfterEveryArticle() {
    const everyArticle = document.querySelectorAll("article");
    if (everyArticle.length === 0) return;

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
    makeHrUnderHeader,
    makeHrAfterEveryArticle,
    makeHrAboveFooter,
  };
}

const tada = makeHrElements();
tada.makeHrAboveFooter();
tada.makeHrAfterEveryArticle();
tada.makeHrUnderHeader();
