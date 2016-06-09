$(document).ready(function() {
	// randomize between 10 and 40 seconds
	randSeconds = Math.floor((Math.random() * 30) + 1) + 10;
	console.log("peer review in " + randSeconds + " seconds..");
	
	unicornCreeper(randSeconds);
});

function unicornCreeper(countdown) {
	// start the clock
	window.setTimeout(function() {
		// add a div to put the image in
		var $div = $("<div />").appendTo("body");
		$div.css('overflow', 'hidden');
		$div.css('position','relative');
		$div.css('width','100%');
		$div.css('height','100%');
		// add the unicorn img to the div
		var $unicorn = $("<img src='unicorn.png' />").appendTo($div);
		// give absolute pos and z-index above everything else (presumably)
		$unicorn.css('position','absolute');
		$unicorn.css('z-index','100');
		// find the height and width of the window
		var startPos = { top: window.innerHeight, left: window.innerWidth };
		// hide offscreen to start
		$unicorn.offset(startPos);
		// make sure the image is loaded in the DOM (otherwise dimensions = 0)
		$unicorn.on('load', function(){
			// get distance to creep into frame from image dimensions
			var creepX = $unicorn.width() - 100;
			var creepY = $unicorn.height() - 80;
			// start the magic
			$unicorn.animate({
				top: '-='+creepY+'px',
				left: '-='+creepX+'px'
			}, 8000).delay(2600); //stop and stare
			$unicorn.animate({
				top: '+='+creepY+'px',
				left: '+='+creepX+'px'
			}, 8000); // this never happened.
		});
	}, countdown * 1000);
}
	
	