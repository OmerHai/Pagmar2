let myIndex = 0
let myVideos = [
  '0001.mp4',
  '00002.mp4',
  '00003V.mp4'
]


function start() {
    document.getElementById("street").style.visibility = "visible";
    document.getElementById("industry").style.visibility = "hidden";
    document.getElementById("park").style.visibility = "hidden";
    document.getElementById("cemetery").style.visibility = "hidden";
    document.getElementById("tunnel").style.visibility = "hidden";
}


function street() {
    document.getElementById("street").style.visibility = "visible";
    document.getElementById("industry").style.visibility = "hidden";
    document.getElementById("park").style.visibility = "hidden";
    document.getElementById("cemetery").style.visibility = "hidden";
    document.getElementById("tunnel").style.visibility = "hidden";
}

function industry() {
    document.getElementById("street").style.visibility = "hidden";
    document.getElementById("industry").style.visibility = "visible";
    document.getElementById("park").style.visibility = "hidden";
    document.getElementById("cemetery").style.visibility = "hidden";
    document.getElementById("tunnel").style.visibility = "hidden";
}

function park() {
    document.getElementById("street").style.visibility = "hidden";
    document.getElementById("industry").style.visibility = "hidden";
    document.getElementById("park").style.visibility = "visible";
    document.getElementById("cemetery").style.visibility = "hidden";
    document.getElementById("tunnel").style.visibility = "hidden";
}

function cemetery() {
    document.getElementById("street").style.visibility = "hidden";
    document.getElementById("industry").style.visibility = "hidden";
    document.getElementById("park").style.visibility = "hidden";
    document.getElementById("cemetery").style.visibility = "visible";
    document.getElementById("tunnel").style.visibility = "hidden";
}

function tunnel() {
    document.getElementById("street").style.visibility = "hidden";
    document.getElementById("industry").style.visibility = "hidden";
    document.getElementById("park").style.visibility = "hidden";
    document.getElementById("cemetery").style.visibility = "hidden";
    document.getElementById("tunnel").style.visibility = "visible";
}