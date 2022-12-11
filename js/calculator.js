let square = Number($('#amount-square')[0].value);
$("#amount-square").on("change", changeValueOnRange);
$("#amount-square").on("pointerdown", () => this.addEventListener('pointermove', changeValueOnRange));
$("#amount-square").on("pointerup", () => this.removeEventListener('pointermove', changeValueOnRange));

function changeValueOnRange(event) {
	const target = event.target;
	const value = target.value;
	square = value;
	$('#square-amount').text(value);
}