function toggleMenuItems()
{
    let menu = document.querySelector("#menu-items")

    if (menu.style.display === "grid")
        menu.style.display = "none"
    else
        menu.style.display = "grid"
}