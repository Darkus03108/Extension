document.getElementById("icon-btn").addEventListener("click", function(){
    var dropdown = document.getElementById("menuPallete");
    if(dropdown.style.display === "none" || dropdown.style.display === ""){
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }

});
document.getElementsByTagName("body").addEventListener("click", function(){
    var dropdown = document.getElementById("menuPallete");
    if(dropdown.style.display === "flex"){
        dropdown.style.display = "none";
    }
})

function rmplaceholder(){
    var searchBox = document.getElementById("SearchBox");
    searchBox.placeholder = " ";
}

function loadDefault(){
    if(document.getElementById("SearchBox").placeholder === " "){
        document.getElementById("SearchBox").placeholder = "Enter your query here...";
    }
}