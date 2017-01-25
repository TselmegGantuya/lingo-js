(function Lingo () {
	var round = 0;
	var count = 0;
	(function randomWord () {
		var word = words[Math.floor(Math.random() * words.length)];
		return word;
	})();
	
	(function newRow (){	
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
			count =count - 5;
			var FirstLetter = this.word.charAt(0);
			document.getElementById("box" + count).innerHTML = FirstLetter;
			document.getElementById("box" + count).style.marginLeft = "200px";	
			var br = document.createElement("br");
			document.body.appendChild(br);
	})();
	
	function checkWord () {
		var input = "";
		for (var a = 0; a < 5; a++){
			input = input + document.getElementById("box"+ count).innerHTML;
			count++;
		}
		count = count - 5;
		var used = 0;
		for (var i = 0; i < input.length; i++) {
			if(word[i] == input[i]){
				document.getElementById("box"+ count).style.backgroundColor = "green";
			}else if(word[i] == input[0] ||word[i] == input[1] || word[i] == input[2] || word[i] == input[3] || word[i] ==input[4]){
				document.getElementById("box"+ count).style.backgroundColor = "yellow";
			}else{
				document.getElementById("box"+ count).style.backgroundColor = "red";
			}
			count++;
			used++;
		}
		count = count - used;
		console.log(count);
		count = count + 5;
		console.log(count);
		round++;
		if(round == 5){
			alert("You lose!");
		}
		newRow();
	}
	document.getElementById("check").onclick = checkWord;
})();