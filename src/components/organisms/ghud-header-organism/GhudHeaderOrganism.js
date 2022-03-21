export default class GhudHeaderOrganism extends HTMLElement {
  static get tag() {
    return "ghud-header-organism";
  }

  static get observedAttributes() {
    return ["h1Text"];
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });

    const h1 = document.createElement("h1");
    h1.textContent = this.getAttribute("h1Text");

    const slot = document.createElement("slot");

    const header = document.createElement("header");
    header.append(h1, slot);

    this._shadowRoot.append(header);
  }
}

customElements.define(GhudHeaderOrganism.tag, GhudHeaderOrganism);
