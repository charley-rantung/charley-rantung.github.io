function educlick() {
    if(document.getElementsByClassName("Edubutton")[0].innerText == "Show"){
        document.querySelector("ul.Edulist").style.display = "block";
        document.getElementsByClassName("Edubutton")[0].innerText = "Hide";
    } else {
        document.querySelector("ul.Edulist").style.display = "none";
        document.getElementsByClassName("Edubutton")[0].innerText = "Show";
    }
}

function weclick() {
    if(document.getElementsByClassName("WEbutton")[0].innerText == "Show"){
        document.querySelector("ul.WElist").style.display = "block";
        document.getElementsByClassName("WEbutton")[0].innerText = "Hide";
    } else {
        document.querySelector("ul.WElist").style.display = "none";
        document.getElementsByClassName("WEbutton")[0].innerText = "Show";
    }
}

function oeclick() {
    if(document.getElementsByClassName("OEbutton")[0].innerText == "Show"){
        document.querySelector("ul.OElist").style.display = "block";
        document.getElementsByClassName("OEbutton")[0].innerText = "Hide";
    } else {
        document.querySelector("ul.OElist").style.display = "none";
        document.getElementsByClassName("OEbutton")[0].innerText = "Show";
    }
}

function pubclick() {
    if(document.getElementsByClassName("PUBbutton")[0].innerText == "Show"){
        document.querySelector("ul.PUBlist").style.display = "block";
        document.getElementsByClassName("PUBbutton")[0].innerText = "Hide";
    } else {
        document.querySelector("ul.PUBlist").style.display = "none";
        document.getElementsByClassName("PUBbutton")[0].innerText = "Show";
    }
}

function cvClick() {
    document.querySelector("div.name p").style.color = "green";
}