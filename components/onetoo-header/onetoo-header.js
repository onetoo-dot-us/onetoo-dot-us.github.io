export class OnetooHeader extends HTMLElement {
  static get tag() {
    return "onetoo-header";
  }

  constructor() {
    super();

    const h1 = document.createElement('h1');

    this.append(h1);
  }
}

customElements.define(OnetooHeader.tag, OnetooHeader);
