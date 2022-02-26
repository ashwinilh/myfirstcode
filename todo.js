var todos = ["Buy grocerries"];
var input = prompt("what would you like todo?");
while (input !== "quit") {
    if (input === "list") {
        console.log(todos);
    }
    else if (input === "new") {
        var newtodo = prompt("enter new todo");
        todos.push(newtodo);
    }
    var input = prompt("what would you like todo?");
}
console.log("Ok, You quit an app");