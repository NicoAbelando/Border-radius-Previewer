function inicio() {
	document.getElementById("range_tl").addEventListener("change", modifyBorderRadius);
	document.getElementById("range_tr").addEventListener("change", modifyBorderRadius);
	document.getElementById("range_br").addEventListener("change", modifyBorderRadius);
	document.getElementById("range_bl").addEventListener("change", modifyBorderRadius);
}

function modifyBorderRadius() {
	let container = document.getElementById("div_container__modifiable").style;
	let out_range = document.getElementsByTagName("output");

	container.borderTopLeftRadius = out_range[0].value;
	container.borderTopRightRadius = out_range[1].value;
	container.borderBottomRightRadius = out_range[2].value;
	container.borderBottomLeftRadius = out_range[3].value;
}

window.addEventListener("load", inicio);
