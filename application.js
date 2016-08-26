$(document).ready(function(){

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
	
  var arr = ["<span class='imwithher'>#ImWithHer</span>^1000BecauseOurCurrent<br>PoliticalSystemDoesntAllow<br>ForThirdPartiesToThrive", "<span class='makeamericagreatagain'>#MakeAmericaGreatAgain</span>^1000Like<br>WhenWomenCouldntVote<br>AndFountainsWereSeperatedByRace","<span class='alllivesmatter'>#AllLivesMatter</span>^1000UnlessYouWear<br>AHijabHaveDarkSkinOr<br>DontSpeakEnglish","<span class='notallmen'>#NotAllMen</span>^1000Catcall<br>MostAreContentUpholding<br>ThePatriarchySilently"]
	shuffle(arr);



	$(function(){
	    $(".main-text").typed({
	        strings: arr,
	        typeSpeed: 0,
	        backDelay: 2000,
	        loop:true,
	        showCursor: false
	    });
	});
});