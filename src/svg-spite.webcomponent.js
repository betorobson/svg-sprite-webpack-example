
const template = document.createElement('div');

template.innerHTML = `
	<svg style="width: 100%; height: 100%">
		<use
			href="/icons.svg#{{name}}"
		/>
	</svg>
`;

const hrefTemplate = template.querySelector('use').getAttribute('href');

class IconsSvgSprite extends HTMLElement {

	constructor() {

		super();

		const shadowRoot = this.attachShadow({mode: 'open'});

	}

  static get observedAttributes() {
    return ['name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
		this.injectHTML();
  }

	injectHTML() {

		if(this.shadowRoot.querySelector('use')){

			this.shadowRoot.querySelector('use').setAttribute(
				'href',
				hrefTemplate.replace(/\{\{name\}\}/, this.attr('name'))
			);

		}else{

			let content = template.querySelector('svg').cloneNode(true);

			console.log(this.attr('name'));

			content.querySelector('use').setAttribute(
				'href',
				hrefTemplate.replace(/\{\{name\}\}/, this.attr('name'))
			);

			this.shadowRoot.appendChild(content);

		}

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
