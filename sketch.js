/*DON'T NEED THIS RIGHT NOW TO FILTER, MIGHT LATER
var mageRole = document.getElementById('mage');
var tankRole = document.getElementById('tank');*/
var mageRole = document.getElementsByClassName('mage');
tankRole = 'tank';
var summonerName;
var levelContainer = document.getElementById('level')
var btn = document.getElementById('btn');
var ourData;
function grabInput() {
	summonerName = document.getElementById('userInput').value;
	document.getElementById('level').innerHTML = "";
};
function filterTank() {
	for(var i = 0; i!= mageRole.length; ++i){
		mageRole[i].style.display = "none";
	};

};

	btn.addEventListener('click', function() {
		document.getElementById('level').innerHTML = "";
		var xhr = new XMLHttpRequest();
		xhr.open('GET', "https://m99bp7llx2.execute-api.us-east-2.amazonaws.com/rgapi/summoner/na1/" + summonerName);
		xhr.onload = function() {
			ourData = JSON.parse(xhr.responseText);
			renderHTML(ourData.summonerLevel);
		};
		xhr.send();
	});

	function renderHTML(data) {
		if(typeof ourData.summonerLevel == 'number') {
	levelContainer.insertAdjacentHTML('beforeend', ourData.summonerLevel);
} else {
	levelContainer.insertAdjacentHTML('beforeend', 'NA');
}
};


