var num = 0;
//holds note information
var noteArray = [];

//Object for notes
function Note(title, date, note){
	this.title = title;
	this.date = date;
	this.note = note;
}

//empty
function main(){
	
    
    
}

//When the new note button is pressed
function setter(x){
	if(x){
	document.getElementById('noteMaker').style.display="block";
	}else{
	document.getElementById('noteMaker').style.display="none";	

	var note2 = new Note();
	note2.title = document.getElementById("Title").value;
	note2.date = document.getElementById("Date").value;
	note2.note = document.getElementById("Note").value;
	noteArray.push(note2);
	newNote();
	}
    saver();
}

//gets information form setter function to make note on screen
function newNote(){
 	var note1 = noteArray[num];
	
	var div = document.createElement("div");
	div.id= num;
	div.classList.add("note");
	document.body.appendChild(div);
	
	var title = document.createElement("h1");
	title.innerHTML=note1.title;
	document.getElementById(num).appendChild(title);
	
	var date = document.createElement("h2");
	date.innerHTML=note1.date;
	document.getElementById( num).appendChild(date);
	
	var date = document.createElement("p");
	date.innerHTML=note1.note;
	date.id="text";
	document.getElementById( num).appendChild(date);
	
	var delButton = document.createElement("p");
	delButton.innerHTML = " X";
	delButton.id="del";
	delButton.setAttribute("title", "Delete Note");
	delButton.setAttribute("onclick", "remover("+num+")");
	document.getElementById(num).appendChild(delButton);
	num++;
	}	

//deletes note
function remover(x){
	var target = document.getElementById(x);
	document.body.removeChild(target);
   noteArray.splice(x,1);
    window.alert(noteArray[1].title);
}

//when the page is opened this loads all saved notes
function loader(){
    window.alert("loaded");
     noteArray = JSON.parse(localStorage.getItem("noteArray") || "[]");
    num = noteArray.length;
    window.alert(noteArray);
    for(num = 0; num < noteArray.length; num){
        newNote();
    }

}

//this saves notes when they are made
function saver(){
    localStorage.setItem("noteArray" , JSON.stringify(noteArray));
}