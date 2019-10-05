var enterbtn= document.getElementById("enter");
var input= document.getElementById("userInput");
var ul= document.querySelector("ul");

function inputLength(){
	return input.value.length;
}


function createListElement(){
	var li= document.createElement("li"); //creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li);  //adds li to ul
	input.value="";    //input text field to be reset

    
    li.addEventListener("click",crossOut);
	//START STRIKETHROUGH
	function crossOut(){
		li.classList.toggle("done");
	}
	

	var dBtn= document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click",deleteListItem);

	function deleteListItem(){
		li.classList.add("delete")    //add class DELETE (DISPLAY: NONE)
	}
}

function addListAfterClick(){    //after the icon is clicked
	if(inputLength()>0) {
		createListElement();
	}
}

function addListAfterKeypress(event){    //after the enter is pressed
	if(inputLength()>0 && event.which===13){
		createListElement();
	}
}

enterbtn.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

