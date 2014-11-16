var random_walks = (function(){

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

    function expandCanvas(canvas){
        var b = document.body;
        var d = document.documentElement;
        canvas.width = Math.max(b.clientWidth , b.scrollWidth, d.scrollWidth, d.clientWidth);
        canvas.height = Math.max(b.clientHeight , b.scrollHeight, d.scrollHeight, d.clientHeight);
    }
    expandCanvas(canvas);

    var width = canvas.width;
    var height = canvas.height;


	return {ctx:ctx, width:width, height:height};
}());
