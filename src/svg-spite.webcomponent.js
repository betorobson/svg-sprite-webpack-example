
class IconsSvgSprite extends HTMLElement {

constructor() {

     super();

		 this.injectHTML();

   }

  static get observedAttributes() {
    return ['name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
		this.injectHTML();
  }

	injectHTML() {
		this.innerHTML = `
			<svg style="width: 100%; height: 100%">
				<use
					href="/icons.svg#${this.attr('name')}"
				/>
			</svg>
		`;
	}

	attr(name) {
		return this.getAttribute(name);
	}

 };

customElements.define('icon-svg-sprite', IconsSvgSprite);

let importAll = function(r){
	r.keys().forEach(key => {
		r(key);
	});
};

importAll(require.context('../svg-icons/', true, /\.svg$/));
