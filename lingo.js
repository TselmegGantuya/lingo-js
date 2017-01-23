function Lingo () {
	var round = 0;
	var count = 0;
	function randomWord () {
		
		var word = words[Math.floor(Math.random() * words.length)];
		return word;
	}
	this.word = randomWord ();
	
	function newRow (){
		
		
		for(var t=0; t< 5 ; t++){
			var box = document.createElement("li");
			box.id= "box"+ count;
			document.body.appendChild(box);
			box.style.backgroundColor = "white";
			box.contentEditable="true";
			document.getElementById("box" + count).style.display = "inline-block";
			document.getElementById("box" + count).style.border = "2px solid blue";
			count++

				}
		(function firstLetter () {
			console.log(this.word);
			count =count - 5;
			var FirstLetter = this.word.charAt(0);
			document.getElementById("box" + count).innerHTML = FirstLetter;
			document.getElementById("box" + count).style.marginLeft = "200px";
		})();		
					var br = document.createElement("br");
			document.body.appendChild(br);
		
	}
	newRow();
	
	function checkWord (input) {
		var input = "";
		for (var a = 0; a < 5; a++){
			input = input + document.getElementById("box"+ count).innerHTML;
			count++;
		}
		count = count - 5;
loop1:
		for (var i = 0; i < input.length; i++) {
			var red = true;
			loop2:
			for (var j = 0; j < word.length; j++) {
				if(input[i] == word[j]){
					red = false;
					if(i == j){
						document.getElementById("box"+ count).style.backgroundColor = "green";
						break loop2;
					}
				}else{
					console.log(red);
					if(red == true && j == word.length - 1){
						document.getElementById("box"+ count).style.backgroundColor = "red";
					}else if(red == false && j == word.length - 1){
						document.getElementById("box"+ count).style.backgroundColor = "yellow";
						console.log("yellow")
					}
				}
			}
			count++
		}
		round++;
		if(round == 5){
			alert("You lose!");
		}
		newRow();
	}
	document.getElementById("check").onclick = checkWord;
}

Lingo();