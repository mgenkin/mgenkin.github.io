$(document).ready(function(){
	var w = window.innerWidth;
	var h = window.innerHeight;
	$("#bg_canvas").attr("width", window.innerWidth);
	$("#bg_canvas").attr("height", window.innerHeight);
	var c = document.getElementById("bg_canvas");
	console.log(window.innerWidth)
	var ctx = c.getContext("2d");
	var img_array = [];
	for(var i = 0; i < 9; i++){
		for(var j = 0; j < 9; j++){
			var img = new Image();
			img.src = "blocks/block"+i+"_"+j+".jpg";
			img_array.push(img);
		};
	};
	var w_im = img_array[0].width;
	var h_im = img_array[0].height;
	var i = 0;
	var j = 0;
	var r =  Math.floor((Math.random() * 90)); 
	while(j<=w){
		while(i<=h){
			r =  Math.floor((Math.random() * 30));
			ctx.drawImage(img_array[r], j, i);
			i += h_im;
		};
		j += w_im;
		i = 0;
	};
});
