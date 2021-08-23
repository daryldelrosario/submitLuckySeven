function letsPlay() {
	var x = parseInt(prompt("How many dollars would you like to bet?", "1"), 10);
	var startMoney = parseInt(x);
	
	document.getElementById("startMoney").innerText = startMoney;
		
		if (startMoney <= 0) {
			alert("No more money?!? Add more...");
			letsPlay();
		}	
}

function rollDiceOne() {
	return Math.floor(Math.random() * 6) + 1;
}

function rollDiceTwo() {
	return Math.floor(Math.random() * 6) + 1;
}	

function playDice() {
	var dice1 = rollDiceOne();
	var dice2 = rollDiceTwo();
	var addDice = dice1 + dice2;
	
	return addDice;
}

function hideResults() {
	document.getElementById("rHr").style.display = "none";
	document.getElementById("rTable").style.display = "none";
	document.getElementById("rTitle").style.display = "none";
}


function clickPlay() {
	var checkMoney = parseInt(document.getElementById("startMoney").textContent);
	var startMoney = checkMoney;
	var updateMoney = startMoney;
	var winnings = new Array();
		winnings.push(updateMoney);
	
	while (updateMoney > 0) {
		var sumDice = playDice();
			if (sumDice == 7){
				updateMoney = updateMoney + 4;
			} else {
				updateMoney = updateMoney - 1;
			}
		winnings.push(updateMoney);
		console.log(winnings);
	}
	
	var rollCounter = winnings.length - 1;
	var highestWin = Math.max.apply(Math, winnings);
	var highestWinSpot = winnings.indexOf(highestWin);
	
	function displayResults() {
		document.getElementById("rHr").style.display = "block";
		document.getElementById("rTitle").style.display = "block";
		document.getElementById("rTable").style.display = "block";
		document.getElementById("rStartBet").innerText = "$ " + checkMoney + ".00";
		document.getElementById("rTotalRoll").innerText = rollCounter;
		document.getElementById("rMaxWin").innerText = "$ " + highestWin + ".00";
		document.getElementById("rMaxRoll").innerText = highestWinSpot;
		
		document.getElementById("startMoney").innerText = 0;
		document.getElementById("playBtn").style.display = "none";

	};
	
	displayResults();
}
		
/*
	var startMoney = parseInt(document.getElementById("startMoney").textContent);
	
		if (startMoney <= 0) {
				alert("No more money!?! Add more...");
				letsPlay();
		} else {
			for (var i = startMoney; i > 0; ) {
				
	
	var z = startMoney + 5;
	
	document.getElementById("showDice").innerText = addDice;
	document.getElementById("showMoney").innerText = z;
}
*/