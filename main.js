//hot fix
//to be replaced with more efficient code
//client wants it fast
var modal = document.getElementsByClassName("modal");
var veneer = document.querySelector(".veneer-modal");
var mdf = document.querySelector(".mdf-modal");
var plywood = document.querySelector(".plywood-modal");
var hardwood = document.querySelector(".hardwood-modal");

var trigger = document.getElementsByClassName("trigger");
var closeButton = document.getElementsByClassName("close-button");

function toggleVeneer() {
    veneer.classList.toggle("show-modal");
}
function toggleMdf() {
    mdf.classList.toggle("show-modal");
}
function togglePlywood() {
    plywood.classList.toggle("show-modal");
}
function toggleHardwood() {
    hardwood.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal[0] || event.target === modal[1] ||
        event.target === modal[2] || event.target === modal[3] )
        {
            for(i = 0; i<trigger.length; i++){
                modal[i].classList.remove("show-modal")
            }
        }
}

function closer() {
    for(i = 0; i<trigger.length; i++){
        modal[i].classList.remove("show-modal")
    }
}
for(i = 0; i<trigger.length; i++){
    closeButton[i].addEventListener("click", closer);
}

trigger[0].addEventListener("click", toggleVeneer);
trigger[1].addEventListener("click", toggleMdf);
trigger[2].addEventListener("click", togglePlywood);
trigger[3].addEventListener("click", toggleHardwood);

window.addEventListener("click", windowOnClick);