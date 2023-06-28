let menu_icon = document.querySelector(".menu-icon")

menu_icon.addEventListener("click", (e) => {
    document.querySelector(".header").classList.toggle("content-wrapper")
    document.querySelector(".content-body").classList.toggle("content-wrapper")
    document.querySelector(".sidebar").classList.toggle("sidebar-wrapper")
})