$(document).ready(function(){
	$(".title-area").click(function(){

		$(function(){
	    $(".byline").typed({
	        strings: ["ByAlexWen",""],
	        typeSpeed: 0,
	        backDelay: 2000,
	        showCursor: false
	    });
		});

	});

	$(function(){
	    $(".main-text").typed({
	        strings: ["<span class='imwithher'>#ImWithHer</span>^1000BecauseOurCurrent<br>PoliticalSystemDoesntAllow<br>ForThirdPartiesToThrive", "<span class='makeamericagreatagain'>#MakeAmericaGreatAgain</span>^1000LikeWhen<br>WomenCouldntVoteAndFountains<br>WereSeperatedByRace","<span class='alllivesmatter'>#AllLivesMatter</span>^1000UnlessYouWear<br>AHijabHaveDarkSkinOr<br>DontSpeakEnglish"],
	        typeSpeed: 0,
	        backDelay: 2000,
	        loop:true,
	        showCursor: false
	    });
	});
});