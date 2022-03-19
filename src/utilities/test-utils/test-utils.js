export class TestUtils {
  /**
   * Renders element with provided attributes.
   * Returns promise which resolves when rendered element becomes available.
   *
   * @param {string} tag
   * @param {object} attributes
   * @returns `Promise<HTMLElement>`
   */
  static render(tag, attributes = {}) {
    TestUtils._renderToDocument(tag, attributes);
    return TestUtils._waitForComponentToRender(tag);
  }

  /**
   * Replaces document's body with provided element and attributes.
   *
   * @param {string} tag
   * @param {object} attributes
   */
  static _renderToDocument(tag, attributes) {
    const htmlAttributes = TestUtils._mapObjectToHTMLAttributes(attributes);
    document.body.innerHTML = `<${tag} ${htmlAttributes}></${tag}>`;
  }

  /**
   * Converts an object to HTML string representation of attributes.
   *
   * `{ foo: "bar", faz: "baz"}`
   * becomes
   * `foo="bar" faz="baz"`
   *
   * @param {object} attributes
   * @returns `string`
   */
  static _mapObjectToHTMLAttributes(attributes) {
    return Object.entries(attributes).reduce((previous, current) => {
      return previous + ` ${current[0]}="${current[1]}"`;
    }, "");
  }

  /**
   * Returns promise which resolves when requested element becomes available.
   *
   * @param {string} tag
   * @returns `Promise<HTMLElement>`
   */
  static async _waitForComponentToRender(tag) {
    return new Promise((resolve) => {
      function requestComponent() {
        const element = document.querySelector(tag);
        if (element) {
          resolve(element);
        } else {
          window.requestAnimationFrame(requestComponent);
        }
      }
      requestComponent();
    });
  }
}
