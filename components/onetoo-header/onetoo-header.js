export class OnetooHeader extends HTMLElement {
  static get tag() {
    return "onetoo-header";
  }

  constructor() {
    super();
  }
}

customElements.define(OnetooHeader.tag, OnetooHeader);
