var modal = document.getElementById("modal-window");

function toggleMobileNavigation(){
    var element = document.getElementById("mobile-navigation");

    if(element.classList.contains("mobile-navigation__open")){
        element.classList.remove("mobile-navigation__open");
    }else{
        element.classList.add("mobile-navigation__open");
    }
}

function openModal(){
    modal.style.display = "flex";
}

function closeModal(){
    modal.style.display = "none";
}