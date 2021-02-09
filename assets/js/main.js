function toggleMenuItems()
{
    let menu = document.querySelector("#menu-items")

    if (menu.style.display === "grid")
        menu.style.display = "none"
    else
        menu.style.display = "grid"
}

function show_image(imgSource)
{
    let imgMain = document.querySelector("#main-img")

    const url = "./assets/img/"+imgSource

    imgMain.src = url

}