class OnetooRepository extends HTMLElement {
  static get tag() {
    return "onetoo-repository";
  }

  constructor() {
    super();

    const h2 = document.createElement("h2");
    h2.textContent = this.name;

    this.append(h2);
  }

  get name() {
    return this.getAttribute("name");
  }
}

customElements.define(OnetooRepository.tag, OnetooRepository);

module.exports = OnetooRepository;
