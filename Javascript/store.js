"use strict";

//region GameGrid
var grid = document.getElementsByClassName("grid")[0];

function AddTile(game) {
	var GameDiv = document.createElement("div");
	GameDiv.classList.add("game");
	GameDiv.setAttribute("data-game", game.ImageUrl);
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

	//checks if there is a discount
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
	extra.onclick = function () {
		OpenStore(extra);
	};
	GameDiv.appendChild(extra);

	var closebutton = document.createElement("span");
	closebutton.onclick = function () {
		closeGame(closebutton);
	};
	closebutton.classList.add("close");
	extra.appendChild(closebutton);

	var h1 = document.createElement("h1");
	h1.innerHTML = game.Name;
	extra.appendChild(h1);
	var p = document.createElement("p");
	p.innerHTML = game.Description;
	extra.appendChild(p);

	if (game.MinSpecs || game.RecSpecs) {
		var Requirements = document.createElement("div");
		Requirements.classList.add("panel");
		extra.appendChild(Requirements);
		var h1 = document.createElement("h1");
		h1.innerHTML = "System Requirements";
		Requirements.appendChild(h1);
		if (game.MinSpecs) {
			var table = document.createElement("table");
			Requirements.appendChild(table);
			for (var i = 0; i < 6; i++) {
				var row = document.createElement("tr");
				table.appendChild(row);
				switch (i) {
					case 0:
						var data = document.createElement("th");
						data.innerHTML = "Minimum System Requirements";
						data.colSpan = 2;
						row.appendChild(data);
						break;
					case 1:
						var data = document.createElement("td");
						data.innerHTML = "Operating System";
						row.appendChild(data);
						var data = document.createElement("td");
						data.innerHTML = game.MinSpecs.OS;
						row.appendChild(data);
						break;
					case 2:
						var data = document.createElement("td");
						data.innerHTML = "Processor";
						row.appendChild(data);
						var data = document.createElement("td");
						data.innerHTML = game.MinSpecs.Processor;
						row.appendChild(data);
						break;
					case 3:
						var data = document.createElement("td");
						data.innerHTML = "Memory";
						row.appendChild(data);
						var data = document.createElement("td");
						data.innerHTML = game.MinSpecs.Memory + "GB";
						row.appendChild(data);
						break;
					case 4:
						var data = document.createElement("td");
						data.innerHTML = "Hard disk space";
						row.appendChild(data);
						var data = document.createElement("td");
						data.innerHTML = game.MinSpecs.HardDisk + "GB";
						row.appendChild(data);
						break;
					case 5:
						var data = document.createElement("td");
						data.innerHTML = "Video Card";
						row.appendChild(data);
						var data = document.createElement("td");
						data.innerHTML = game.MinSpecs.VideoCard;
						row.appendChild(data);
						break;
				}
			}
		}
		if (game.RecSpecs) {
			var table = document.createElement("table");
			Requirements.appendChild(table);
			for (var i = 0; i < 6; i++) {
				var row = document.createElement("tr");
				table.appendChild(row);
				switch (i) {
					case 0:
						var data = document.createElement("th");
						data.innerHTML = "Recommendend System Requirements";
						data.colSpan = 2;
						row.appendChild(data);
						break;
					case 1:
						var data = document.createElement("td");
						data.innerHTML = "Operating System";
						row.appendChild(data);
						var data = document.createElement("td");
						data.innerHTML = game.RecSpecs.OS;
						row.appendChild(data);
						break;
					case 2:
						var data = document.createElement("td");
						data.innerHTML = "Processor";
						row.appendChild(data);
						var data = document.createElement("td");
						data.innerHTML = game.RecSpecs.Processor;
						row.appendChild(data);
						break;
					case 3:
						var data = document.createElement("td");
						data.innerHTML = "Memory";
						row.appendChild(data);
						var data = document.createElement("td");
						data.innerHTML = game.RecSpecs.Memory + "GB";
						row.appendChild(data);
						break;
					case 4:
						var data = document.createElement("td");
						data.innerHTML = "Hard disk space";
						row.appendChild(data);
						var data = document.createElement("td");
						data.innerHTML = game.RecSpecs.HardDisk + "GB";
						row.appendChild(data);
						break;
					case 5:
						var data = document.createElement("td");
						data.innerHTML = "Video Card";
						row.appendChild(data);
						var data = document.createElement("td");
						data.innerHTML = game.RecSpecs.VideoCard;
						row.appendChild(data);
						break;
				}
			}
		}
	}
	return GameDiv;
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