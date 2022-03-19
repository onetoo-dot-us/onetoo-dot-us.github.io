export default class GhudA extends HTMLElement {
  static get tag() {
    return "ghud-a";
  }

  static get observedAttributes() {
    return ["href", "text"];
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });

    const anchor = document.createElement("a");
    anchor.href = this.getAttribute("href");
    anchor.textContent = this.getAttribute("text");

    this._shadowRoot.append(anchor);
  }
}

customElements.define(GhudA.tag, GhudA);
