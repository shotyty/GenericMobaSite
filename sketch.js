/*DON'T NEED THIS RIGHT NOW TO FILTER, MIGHT LATER
var mageRole = document.getElementById('mage');
var tankRole = document.getElementById('tank');*/
/*fetch('https://sp5e96p6h9.execute-api.us-east-2.amazonaws.com/rgapi/champion/na1')
  .then(r => r.json())
  .then(info => {
    localStorage.setItem('Tags', JSON.stringify(info))
  })
*/
 /*need to delay to make sure the fetch has finished
setTimeout(() => {
  let info = JSON.parse(localStorage.getItem('Tags'))
  console.log('Your origin is ' + info.origin)
}, 3000);*/

/*var info = JSON.parse(localStorage.getItem('Tags'));
var infoData = info.data;
console.log(infoData)*/

var input = document.getElementById('userInput');
var marksmanRole = document.getElementsByClassName('marksman');
var fighterRole = document.getElementsByClassName('fighter');
var supportRole = document.getElementsByClassName('support');
var assassinRole = document.getElementsByClassName('assassin');
var tankRole = document.getElementsByClassName('tank');
var mageRole = document.getElementsByClassName('mage');
var summonerName;
var levelContainer = document.getElementById('level')
var btn = document.getElementById('btn');
var ourData;
function grabInput() {
	summonerName = document.getElementById('userInput').value;
	document.getElementById('level').innerHTML = "";
};

//Filter div images based on role from dropdrown
function filterTags() {
	if(document.getElementById('filterDropdown').value == 'tank') {
		for(var i = 0; i!= mageRole.length; ++i){
			mageRole[i].style.display = "none";
		};
		for(var i = 0; i!= fighterRole.length; ++i){
			fighterRole[i].style.display = "none";
		};for(var i = 0; i!= supportRole.length; ++i){
			supportRole[i].style.display = "none";
		};
		for(var i = 0; i!= assassinRole.length; ++i){
			assassinRole[i].style.display = "none";
		};
		for(var i = 0; i!= marksmanRole.length; ++i){
			marksmanRole[i].style.display = "none";
		};
		for(var i = 0; i!= tankRole.length; ++i){
			tankRole[i].style.display = "inline-block";
		};
	} else if (document.getElementById('filterDropdown').value == 'mage') {
		for(var i = 0; i!= tankRole.length; ++i){
			tankRole[i].style.display = "none";
		};
		for(var i = 0; i!= fighterRole.length; ++i){
			fighterRole[i].style.display = "none";
		};for(var i = 0; i!= supportRole.length; ++i){
			supportRole[i].style.display = "none";
		};
		for(var i = 0; i!= assassinRole.length; ++i){
			assassinRole[i].style.display = "none";
		};
		for(var i = 0; i!= marksmanRole.length; ++i){
			marksmanRole[i].style.display = "none";
		};
		for(var i = 0; i!= mageRole.length; ++i){
			mageRole[i].style.display = "inline-block";
		};
	} else if (document.getElementById('filterDropdown').value == 'support') {
		for(var i = 0; i!= tankRole.length; ++i){
			tankRole[i].style.display = "none";
		};
		for(var i = 0; i!= fighterRole.length; ++i){
			fighterRole[i].style.display = "none";
		};for(var i = 0; i!= mageRole.length; ++i){
			mageRole[i].style.display = "none";
		};
		for(var i = 0; i!= assassinRole.length; ++i){
			assassinRole[i].style.display = "none";
		};
		for(var i = 0; i!= marksmanRole.length; ++i){
			marksmanRole[i].style.display = "none";
		};
		for(var i = 0; i!= supportRole.length; ++i){
			supportRole[i].style.display = "inline-block";
		};
	} else if (document.getElementById('filterDropdown').value == 'assassin') {
		for(var i = 0; i!= tankRole.length; ++i){
			tankRole[i].style.display = "none";
		};
		for(var i = 0; i!= fighterRole.length; ++i){
			fighterRole[i].style.display = "none";
		};for(var i = 0; i!= supportRole.length; ++i){
			supportRole[i].style.display = "none";
		};
		for(var i = 0; i!= mageRole.length; ++i){
			mageRole[i].style.display = "none";
		};
		for(var i = 0; i!= marksmanRole.length; ++i){
			marksmanRole[i].style.display = "none";
		};
		for(var i = 0; i!= assassinRole.length; ++i){
			assassinRole[i].style.display = "inline-block";
		};
	} else if (document.getElementById('filterDropdown').value == 'fighter') {
		for(var i = 0; i!= tankRole.length; ++i){
			tankRole[i].style.display = "none";
		};
		for(var i = 0; i!= mageRole.length; ++i){
			mageRole[i].style.display = "none";
		};for(var i = 0; i!= supportRole.length; ++i){
			supportRole[i].style.display = "none";
		};
		for(var i = 0; i!= assassinRole.length; ++i){
			assassinRole[i].style.display = "none";
		};
		for(var i = 0; i!= marksmanRole.length; ++i){
			marksmanRole[i].style.display = "none";
		};
		for(var i = 0; i!= fighterRole.length; ++i){
			fighterRole[i].style.display = "inline-block";
		};
	} else if (document.getElementById('filterDropdown').value == 'marksman') {
		for(var i = 0; i!= tankRole.length; ++i){
			tankRole[i].style.display = "none";
		};
		for(var i = 0; i!= fighterRole.length; ++i){
			fighterRole[i].style.display = "none";
		};for(var i = 0; i!= supportRole.length; ++i){
			supportRole[i].style.display = "none";
		};
		for(var i = 0; i!= assassinRole.length; ++i){
			assassinRole[i].style.display = "none";
		};
		for(var i = 0; i!= mageRole.length; ++i){
			mageRole[i].style.display = "none";
		};
		for(var i = 0; i!= marksmanRole.length; ++i){
			marksmanRole[i].style.display = "inline-block";
		};
	} else if (document.getElementById('filterDropdown').value == 'all') {
		for(var i = 0; i!= tankRole.length; ++i){
			tankRole[i].style.display = "inline-block";
		};
		for(var i = 0; i!= fighterRole.length; ++i){
			fighterRole[i].style.display = "inline-block";
		};for(var i = 0; i!= supportRole.length; ++i){
			supportRole[i].style.display = "inline-block";
		};
		for(var i = 0; i!= assassinRole.length; ++i){
			assassinRole[i].style.display = "inline-block";
		};
		for(var i = 0; i!= marksmanRole.length; ++i){
			marksmanRole[i].style.display = "inline-block";
		};
		for(var i = 0; i!= mageRole.length; ++i){
			mageRole[i].style.display = "inline-block";
		};
	}

};



input.addEventListener('keyup', function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById('btn').click();
	}
})

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




