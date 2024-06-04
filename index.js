document
	.getElementById("bankName")
	.addEventListener("change", updateCardPreview);
document
	.getElementById("cardType")
	.addEventListener("input", updateCardPreview);
document
	.getElementById("cardNumber")
	.addEventListener("input", updateCardPreview);
document
	.getElementById("cardName")
	.addEventListener("input", updateCardPreview);
document
	.getElementById("cardExpiry")
	.addEventListener("input", updateCardPreview);

function updateCardPreview() {
	const bankName = document.getElementById("bankName").value;
	if (bankName == "Сбербанк") {
		document.querySelector("#cardPreview .bank-name").src =
			"./img/Лого сбер (1).png";
	} else if (bankName == "ВТБ") {
		document.querySelector("#cardPreview .bank-name").src =
			"./img/Лого втб.png";
	} else if (bankName == "Альфа-Банк") {
		document.querySelector("#cardPreview .bank-name").src =
			"./img/Лого альфа.png";
	} else if (bankName == "Тинькофф Банк") {
		document.querySelector("#cardPreview .bank-name").src =
			"./img/Лого тинь.png";
	} else {
	}

	const cardType = document.getElementById("cardType").value;
	if (cardType == "Visa") {
		document.querySelector("#cardPreview .card-type").src =
			"./img/Виза.png";
	} else if (cardType == "MasterCard") {
		document.querySelector("#cardPreview .card-type").src =
			"./img/мастер.png";
	} else if (cardType == "Мир") {
		document.querySelector("#cardPreview .card-type").src = "./img/мир.png";
	}

	document.querySelector("#cardPreview .card-number").textContent =
		document.getElementById("cardNumber").value || "0000 0000 0000 0000";
	document.querySelector("#cardPreview .card-name").textContent =
		document.getElementById("cardName").value || "Card Holder";
	document.querySelector("#cardPreview .card-expiry").textContent =
		document.getElementById("cardExpiry").value || "MM/YY";
}

function submitForm() {
	const bankName = document.getElementById("bankName").value;
	const cardType = document.getElementById("cardType").value;
	const cardNumber = document.getElementById("cardNumber").value;
	const cardName = document.getElementById("cardName").value;
	const cardExpiry = document.getElementById("cardExpiry").value;
	if (!bankName || !cardType || !cardNumber || !cardName || !cardExpiry) {
		alert("Please fill in all fields");
		return;
	}

	const tableBody = document.getElementById("cardTableBody");
	const row = document.createElement("tr");

	row.innerHTML = `<td>${bankName}</td><td>${cardType}</td><td>${cardNumber}</td><td>${cardName}</td><td>${cardExpiry}</td>`;
	tableBody.appendChild(row);

	document.getElementById("bankName").value = "";
	document.getElementById("cardType").value = "";
	document.getElementById("cardNumber").value = "";
	document.getElementById("cardName").value = "";
	document.getElementById("cardExpiry").value = "";

	updateCardPreview();
}
