export default class GhudHeaderElement extends HTMLElement {
  static get tag() {
    return "ghud-header-element";
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");

    this._shadowRoot.append(slot);
  }
}

customElements.define(GhudHeaderElement.tag, GhudHeaderElement);
