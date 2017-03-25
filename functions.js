//show or hide the login and logout links.
function toggleLogin() {
    var ele = document.getElementById("span_logloc"); //login
    var elem = document.getElementById("span_logloc1"); //logout

    if (ele.style.display == "block") {
        ele.style.display = "none";
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
        ele.style.display = "block";
    }
};

//varify the functions page is being read.
function reportStatus() {
    console.log("functions.js is active");
}

//count all active spans in the menubar.
function countSpan() {
    var nodeCount = document.getElementById('topBar').children; //spans
    var i;
    for (i = 0; i < nodeCount.length; i++) {}
    alert(i);
}

function toggle2() {
    var num = document.getElementById('topBar').getElementsByTagName("span").length; //number of children of topBar
    var ele = "span";
    var para = document.createElement("span");
    var node = document.createTextNode("Texting");
    var child = document.getElementById('span_logloc');
    para.appendChild(node); //creates the new span

    var element = document.getElementById('topBar');
    element.insertBefore(para, child); //displays the new span
}

function makeQuery() {
    userInput = prompt("User Input");

}