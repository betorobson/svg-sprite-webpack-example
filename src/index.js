
import './svg-spite.webcomponent';

const changeSvgIcon = (select, name) => {
	select.parentNode.querySelector('icon-svg-sprite').setAttribute('name', name);
};

document.querySelectorAll('select').forEach(
	item =>
		item.addEventListener(
			'change',
			e => changeSvgIcon(item, item.value)
		)
);

