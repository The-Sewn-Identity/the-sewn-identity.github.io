function changeColor(theme) {
    // document.header.style.backgroundColor = "#008080"
    let choice = parseInt(theme)

    let select = document.querySelector('#select-opt')
    select.selectedIndex = "0"

    switch (choice) {
        case 1:
            document.querySelector('header').style = "background-color: #CB0356"
            document.querySelector('footer').style = "background-color: #90164F"

            document.querySelector('#left').style = "background-color: #C5405C"
            document.querySelector('#right').style = "background-color: #C5405C"
            break;
        case 2:
            document.querySelector('header').style = "background-color: #D91E3D"
            document.querySelector('footer').style = "background-color: #CB0356"

            document.querySelector('#left').style = "background-color: #FC7F4A"
            document.querySelector('#right').style = "background-color: #FC7F4A"
            break;
        case 3:
            document.querySelector('header').style = "background-color: #008080"
            document.querySelector('footer').style = "background-color: #1C4B44"

            document.querySelector('#left').style = "background-color: #50988A"
            document.querySelector('#right').style = "background-color: #50988A"
    }
}

var mus = document.querySelector('#frame')
let spot_URLs = [
    "https://open.spotify.com/embed/track/4oLEixV6gLlHMiecqSZOLY?utm_source=generator", // Sturm & Drang
    "https://open.spotify.com/embed/track/1mh0UmMFz040KPisigYy7b?utm_source=generator" // Back in the U.S.S.A.
]

var foot = document.querySelector('footer')

var show_status = false

$(document).ready(function() {
    $("#music").click(function() {
        let rand = Math.floor(Math.random() * spot_URLs.length)
        mus.src = spot_URLs[rand]

        console.log(rand)

        show_status = !show_status
        switch (show_status) {
            case true:
                $("#frame").css("display", "initial");
                break;
            case false:
                $("#frame").css("display", "none");
                break;
        }
    })
});

function update() {
    mus.style.left = "calc(50% - " + mus.clientWidth/2 + "px)";

    if (window.innerWidth < 576) {
        mus.style.bottom = 16 + foot.clientHeight + "px";
    }
    else {
        mus.style.bottom = 'initial';
    }
}

setInterval(update, 1)