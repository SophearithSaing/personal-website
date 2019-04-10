var todos = [];

var input = prompt("Enter command(add, view, remove, exit): ");

while (input !== "exit"){
	
	//operate
	if (input === "add"){
		addItem();	
	} 
	else if (input === "view"){
		viewItem();
	} 
	else if (input == "remove") {
		removeItem();
	}
	
	// loop by asking for input
	var input = prompt("Anything else(add, view, remove, exit): ");
}
console.log("You've succesfully exited");	

function viewItem(){
	console.log("*********************");
	todos.forEach (function(list, i){
		console.log(i+1 + "). " + list);
	});
	console.log("********************");
}

function addItem(){
	var newtodo = prompt("Enter your new todo: ");
	todos.push(newtodo);
	number = todos.indexOf(newtodo)+1;
	console.log("Item number " + number + " added.");
}

function removeItem(){
	// ask for number
	var number = prompt("Enter the number of To-Do: ");
	// delete using splice
	todos.splice(number-1,1);
	console.log("Item number " + number + " deleted.");
}
