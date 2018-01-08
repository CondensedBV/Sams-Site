"use strict";

//region GameGrid
var grid = document.getElementsByClassName("grid")[0];

function AddTile(game) {
	if (game.VideoUrl) {
		var element = "<iframe src=\"(URL)\" frameborder=\"0\" gesture=\"media\" allow=\"encrypted-media\" allowfullscreen></iframe>";
		element = element.replace("(URL)", game.VideoUrl);
		var div = document.createElement("div");
		div.innerHTML = element;
		div.classList.add("game");
		grid.appendChild(div);
	}
}
//retrieve Games and add to the grid.
for (var i = 0; i < Games.length; i++) {
	AddTile(Games[i]);
}
//endregion
//region GameInfo
function OpenStore(game) {
	game.onclick = undefined;
	game.classList.add("extend");
	game.style.backgroundImage = "url(" + game.parentElement.getAttribute("data-game") + ")";
}

function closeGame(element) {
	element.parentElement.classList.remove("extend");
	element.parentElement.style.backgroundImage = "";
	setTimeout(function () {
		element.parentElement.onclick = function () {
			OpenStore(element.parentElement);
		};
	}, 1000);

}
//#endregion