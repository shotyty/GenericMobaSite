

/*var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/RiotSchmick?api_key=RGAPI-fdeae6f2-aa9f-4ce4-b149-fef33c7b3428');
ourRequest.onload = function() {
	var ourData = JSON.parse(ourRequest.responseText);
	console.log(ourData[0]);
};
ourRequest.send();*/

window.onload = function() {
	var levelContainer = document.getElementById('level');
	var btn = document.getElementById('btn');
	var summonerName = 'shotyty';
	var ourData;



	btn.addEventListener('click', function() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', "https://m99bp7llx2.execute-api.us-east-2.amazonaws.com/rgapi/summoner/na1/" + summonerName);
		xhr.onload = function() {
			ourData = JSON.parse(xhr.responseText);
			renderHTML(ourData.summonerLevel);
		};
		xhr.send();
	});

	function renderHTML(data) {
		levelContainer.insertAdjacentHTML('afterbegin', ourData.summonerLevel);
	}

}