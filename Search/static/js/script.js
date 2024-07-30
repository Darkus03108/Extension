document.querySelector("#icon-btn").onclick = function(){
    document.querySelector(".accountInfo").classList.toggle('active');
    document.querySelector(".infoContent").classList.toggle('active');
    document.querySelector(".accountManage").classList.toggle('active');
    document.querySelector(".pfp-img").classList.toggle('active');
    document.querySelector(".manageAccount-txt").classList.toggle('active');
}



function rmplaceholder(){
    var searchBox = document.getElementById("SearchBox");
    searchBox.placeholder = " ";
}

function loadDefault(){
    if(document.getElementById("SearchBox").placeholder === " "){
        document.getElementById("SearchBox").placeholder = "Enter your query here...";
    } 
}


function hover(){
   document.querySelector(".images").classList.add('hovered');
}
function nohover(){
    document.querySelector(".images").classList.remove('hovered');
}