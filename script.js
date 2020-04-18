var player = "x";
var symbol = "";
const x = "<img src=\"img/x.png\">"
const o = "<img src=\"img/o.png\">"
const ids = ["field1","field2","field3","field4","field5","field6","field7","field8","field9"];
const winners = [
["field1", "field2", "field3"], 
["field1", "field5", "field9"],
["field1", "field4", "field7"],
["field2", "field5", "field8"],
["field3", "field5", "field7"],
["field3", "field6", "field9"],
["field4", "field5", "field6"],
["field7", "field8", "field9"]
];
function reset() {
    player = "x";
    for (element in ids) {
        document.getElementById(ids[element]).innerHTML = ""                     
    } 
}
function checkwinner() {
    for (combo in winners){
        //alert(x);   
       // alert(document.getElementById(winners[combo][0]).innerHTML);
        if (document.getElementById(winners[combo][0]) == x) {
            alert("We have a Winner!")
        }
    }
}


function hello(fieldnumber) {
    if (player =="x") {
        symbol = x;
    }
    else {
        symbol = o;
    }
    h = document.getElementById(fieldnumber);
    if (h.innerHTML == "") {
        h.innerHTML = symbol; 
        checkwinner();
    }
    else {
    }
   
    if (player == "x") {
        player = "o";
    } 
    else if (player == "o") {
        player = "x";
    }
   }

