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