random_walks.Walker = (function(){
	function Walker(){
		this.x = random_walks.width * Math.random();
		this.y = random_walks.height * Math.random();
		this.color = random_color();
	}

	function random_color(){
		var h = parseInt(Math.random() * 360);
		var s = 90;
		var l = 50;
		var a = 1;
		return 'hsla(' + h +', ' + s + '%, ' + l + '%, ' + a + ')';
	}

	Walker.prototype.display = function(){
		random_walks.point(this.x, this.y, this.color);
	}

	Walker.prototype.step = function(){
		var choice = (Math.random() * 4).toFixed() - 1;
		if( choice == 0 ){
			this.x += 1;
		} else if( choice == 1 ) {
			this.x -= 1;
		} else if( choice == 2 ){
			this.y += 1;
		} else {
			this.y -= 1;
		}

		if( this.x < 0 ){
			this.x = 0;
		}else if( this.x > random_walks.width ){
			this.x = random_walks.width;
		}

		if( this.y < 0 ){
			this.y = 0;
		}else if( this.y > random_walks.height ){
			this.y = random_walks.height;
		}
	}

	return Walker;
}());


