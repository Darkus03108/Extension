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



function hover(){
   document.querySelector(".images").classList.add('hovered');
}
function nohover(){
    document.querySelector(".images").classList.remove('hovered');
}

function noplaceholder(){
    document.querySelector("#SearchBox").setAttribute('placeholder', '');
}
function yesplaceholder(){
    document.querySelector("#SearchBox").setAttribute('placeholder', 'Enter your query here...');
}
document.querySelector("#SearchBox").addEventListener('focus', noplaceholder);
document.querySelector("#SearchBox").addEventListener('blur', yesplaceholder);
