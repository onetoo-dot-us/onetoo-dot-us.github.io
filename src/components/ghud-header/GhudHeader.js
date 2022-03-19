module.exports = class GhudHeader extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    const header = document.createElement("header");

    shadowRoot.append(header);
  }
};

customElements.define("ghud-header", GhudHeader);
