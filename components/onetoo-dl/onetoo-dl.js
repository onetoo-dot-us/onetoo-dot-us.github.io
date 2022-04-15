export class OnetooDl extends HTMLElement {
  static get tag() {
    return "onetoo-dl";
  }

  constructor() {
    super();

    const dl = document.createElement("dl");

    const dt = document.createElement("dt");
    dt.textContent = this.dt;

    const dd = document.createElement("dd");
    if (this.ddLink) {
      const anchor = document.createElement("a");
      anchor.textContent = this.dd;
      anchor.href = this.ddLink;
      dd.append(anchor);
    }
    if (!this.ddLink) {
      dd.textContent = this.dd;
    }

    dl.append(dt, dd);
    this.append(dl);
  }

  get dt() {
    return this.getAttribute("dt");
  }

  get dd() {
    return this.getAttribute("dd");
  }

  get ddLink() {
    return this.getAttribute("dd-link");
  }
}

customElements.define(OnetooDl.tag, OnetooDl);
