export default class GhudHeader extends HTMLElement {
  static get tag() {
    return "ghud-header";
  }

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");

    this.shadowRoot.append(slot);
  }
}

customElements.define(GhudHeader.tag, GhudHeader);
