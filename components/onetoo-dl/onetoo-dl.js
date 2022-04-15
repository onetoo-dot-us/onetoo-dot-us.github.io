export class OnetooDl extends HTMLElement {
  static get tag() {
    return "onetoo-dl";
  }

  constructor() {
    super();

    const dl = document.createElement("dl");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");

    dl.append(dt, dd);
    this.append(dl);
  }
}

customElements.define(OnetooDl.tag, OnetooDl);
