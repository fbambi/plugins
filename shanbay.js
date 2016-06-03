


(function() {
	var textOld = "",
		t;

	function renderWord() {
		var left = document.activeElement.offsetLeft,
			top = document.activeElement.offsetTop,
			width = document.activeElement.style.width,
			tipss = document.createElement("div");
		tipss.innerHTML = document.activeElement.getAttribute("data");
		textOld = tipss.innerHTML;
		tipss.id = "extraTip";
		tipss.style.backgroundColor = "#209E85";
		tipss.style.position = "absolute";
		tipss.style.top = top;
		tipss.style.left = left;
		tipss.style.width = width;
		tipss.style.textAlign = "center";
		tipss.style.display = "inline-block";
		tipss.style.color = "white";
		tipss.style.padding = "5px";
		tipss.style.marginTop = "-20px";
		tipss.style.lineHeight = "18px";
		document.activeElement.parentNode.insertBefore(tipss, document.activeElement);
		t = setTimeout(function() {
			document.getElementById("extraTip").parentNode.removeChild(document.getElementById("extraTip"));
		}, 5000);
	}
	document.onkeydown = function() {
		if (event.keyCode == 17) {
			if (!document.getElementById("extraTip") && ((document.activeElement.className == "sentence-word-input") || (document.activeElement.className == "sentence-word-input wrong-answer"))) {
				renderWord();
			} else if (textOld !== document.activeElement.getAttribute("data") && (document.getElementById("extraTip"))) {
				clearTimeout(t);
				document.getElementById("extraTip").parentNode.removeChild(document.getElementById("extraTip"));
				renderWord();
			} else if (document.getElementById("extraTip")) {
				clearTimeout(t);
				document.getElementById("extraTip").parentNode.removeChild(document.getElementById("extraTip"));
			}
		}
	}
})();