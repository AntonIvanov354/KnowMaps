document.addEventListener("DOMContentLoaded", function(){
    const Klik = document.getElementById("menu-knopka");
    const Menu = document.getElementById("menu");
    
    Klik.addEventListener("click", function(){
        if(Menu.style.display == "none" || Menu.style.display == " "){

            Menu.style.display = "block";
        }
        else{
            Menu.style.display = "none";
        }
    })

})