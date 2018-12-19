var num = 0;
var late = null;
var d= new Date();
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
	if(x){	document.getElementById('noteMaker').style.display="block";
	}else{
	document.getElementById('noteMaker').style.display="none";	

	var note2 = new Note();
	note2.title = document.getElementById("Title").value;
	var str = document.getElementById("Date").value;
	str = str.split("-");
	str.splice(0,1);
	var str1  = str.join(",");
	var str2 = str1.replace(",","-");
	note2.date= str2;	
	//note2.date = getDate(str);
		
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
	document.getElementById("holder").appendChild(div);
	
	var title = document.createElement("h1");
	title.innerHTML=note1.title;
	document.getElementById(num).appendChild(title);
	
	var date = document.createElement("h2");
	date.innerHTML= DateTest(note1.date);
	if(late == true){
		date.style.color="red";
	}
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
	noteArray.splice(x,1);
	location.reload();
	saver();
}
//when the page is opened this loads all saved notes
function loader(){
	var par = document.cookie;
	noteArray = JSON.parse(par);
	document.getElementById("date").innerHTML="Date: "+ (d.getMonth()+1) + "-" + d.getDate();
	
    for(num = 0; num < noteArray.length; num){
        newNote();
    }

	//document.getElementById("date").innerHTML = "Date: " + (d.getMonth()+1 ) + "-" +d.getDate();
}
//this saves notes when they are made
function saver(){
	var str = JSON.stringify(noteArray);
	document.cookie= str+ ";expires=Fri, 31 Dec 9999 23:59:59 GMT;";
}
function check(){
	window.alert("cookies: " + document.cookie);
}
function DateTest(str){
	late = null;
	var str1 = str.split("-");
	if(str1[0] == d.getMonth()+1){
	if(str1[1] == d.getDate()){
	return("Today");
	}else if(str1[1] == d.getDate() + 1){
		return("Tomorrow");
	}else if(str1[1] == d.getDate() -1){
		late = true;
		return("Yesterday");
	}}
	if(d.getDate() > str1[1] || (d.getMonth() >= str1[0])){
		late = true;
	}
	str1  = str1.join(",");
	var str2 = str1.replace(",","-");
	return(str2);
}
