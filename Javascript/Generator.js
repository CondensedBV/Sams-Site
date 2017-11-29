"use strict";
var grid = document.getElementsByClassName("grid")[0];
function AddTile(game) {
	var GameDiv = document.createElement("div");
	GameDiv.classList.add("game");
	grid.appendChild(GameDiv);

	//add image background
	var image = document.createElement('img');
	image.src = game.ImageUrl;
	image.alt = game.Name;
	GameDiv.appendChild(image);

	//adds the small bar with the prices in the bottom
	var info = document.createElement("div");
	info.classList.add("info");
	GameDiv.appendChild(info);


	if (game.Discount > 0) {
		var discount = document.createElement("p");
		discount.classList.add("discount");
		discount.innerHTML = "-" + game.Discount + "%";
		info.appendChild(discount);

		var original = document.createElement("p");
		original.classList.add("Original");
		original.innerHTML = game.Price + "&euro;";
		info.appendChild(original);
	}
	var price = document.createElement("p");
	price.classList.add("price");
	price.innerHTML = (game.Price / 100 * (100 - game.Discount)).toFixed(2) + "&euro;";
	info.appendChild(price);

	var extra = document.createElement("div");
	extra.classList.add("extra");
	GameDiv.appendChild(extra);

	var h1 = document.createElement("h1");
	h1.innerHTML = game.Name;
	extra.appendChild(h1);
	var p = document.createElement("p");
	p.innerHTML = game.Description;
	extra.appendChild(p);
	return GameDiv;
}
for (var i = 0; i < Games.length; i++) {
	AddTile(Games[i]);
}