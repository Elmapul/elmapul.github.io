
    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
    ctx.drawImage(img,10,10);

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

/////////////
    var start = null;
    var value=0;

    var animar=function(){
	start=0;
	var contar=0;
	function step(timestamp) {
  		if (!start) start = timestamp;
  			var progress = timestamp - start;
			value = Math.min(progress / 10, 200);
  			ctx.clearRect(0, 0, 300, 150);

			for (var i = 0; i < data.length; i += 4) {
			//2400 = width * color depth
			cLine=Math.floor(i/2400); 
				if (i%(2400) <contar){
				data[i]     = data[contar+0+(cLine*2400) ];     // red
				data[i + 1] = data[contar+0+(cLine*2400)+1 ];; // green
		     	 	data[i + 2] = data[contar+0+(cLine*2400)+2 ];; // blue
				}
    			}
		contar+=4;
		ctx.putImageData(imageData, 0, 0);  
		if (progress < 8000) {
    			window.requestAnimationFrame(step);}
		}
		requestAnimationFrame(step);
	}
