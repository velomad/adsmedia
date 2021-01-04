import anime from "animejs";

export function grow(element, percent) {
	anime({
		targets: element,
		width: percent, // -> from '28px' to '100%',
		easing: "easeInSine",
		direction: "alternate",
		loop: false,
	});
}
