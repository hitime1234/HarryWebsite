function TravelerMain(){
    if (document.getElementById("flex") != null){
        document.getElementById("flex").remove();
    }
    else{
        console.log("TravelerMain");
        var img = document.createElement("img");
        img.src = "flex.png";
        img.id = "flex"
        img.className="flex"
        img.style.width = "50%";
        img.style.height = "50%";
        var local = document.getElementById("Content");
        local.appendChild(img);    
    }
}

function AkashaCV() {
    window.location.href = "https://akasha.cv/profile/711831071";
}