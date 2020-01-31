

const template = document.createElement('template');

  // <style>
  //   :host {
  //        display: block;
  //   }
  // </style>
	// <img src="https://img.icons8.com/android/24/000000/download-2.png">

template.innerHTML = `
	<svg style="width: 100px; height: 100px">
		<use
			xlink:href="/icons.svg#car"
			href="/icons.svg#car"
		/>
	</svg>
`;

class IconsSvgSprite extends HTMLElement {

constructor() {

     super();

		 this.injectHTML();

    //  const shadowRoot = this.attachShadow({mode: 'open'});

    //  let content = template.content.cloneNode(true);

    //  this.shadowRoot.appendChild(content);

   }

  static get observedAttributes() {
    return ['name'];
  }

  // Only called for the disabled and open attributes due to observedAttributes
  attributeChangedCallback(name, oldValue, newValue) {
    console.log([name, oldValue, newValue])
  }

	injectHTML() {
		 this.innerHTML = `
			<svg style="width: 100px; height: 100px">
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


const obj = {
	name: 'svg-sprite'
}

export const {name: svgSpriteName} = obj;
