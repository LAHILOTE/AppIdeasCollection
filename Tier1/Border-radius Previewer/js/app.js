var topLeft = document.getElementById('top-left');
const hasiltopLeft = topLeft.value;

var topRight = document.getElementById('top-right');
const hasiltopRight = topRight.value;

var bottomLeft = document.getElementById('bottom-left');
const hasilbottomLeft = bottomLeft.value;

var bottomRight = document.getElementById('bottom-right');
const hasilbottomRight = bottomRight.value;

let border_Radius = document.getElementById("myRec");



function borderRadius() {
    preventDefault();
    border_Radius.style = "borderTopLeftRadius:25px";
};