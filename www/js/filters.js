angular.module('starter.filters', [])
.filter('recordingTime', function(){
	return function(input) {
		totalSeconds = Math.round(input / 10);

	    seconds = totalSeconds % 60;
	    
	    minutes = Math.floor(totalSeconds / 60)
	    seconds = seconds < 10 ? '0' + seconds : seconds;
	    minutes = minutes < 10 ? '0' + minutes : minutes;
	    return minutes + ":" + seconds;
	  };
});