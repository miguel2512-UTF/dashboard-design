let menu_icon = document.querySelector(".menu-icon")
let btn_close_sidebar = document.querySelector(".btn-close-sidebar")

menu_icon.addEventListener("click", (e) => {
    document.querySelector(".header").classList.toggle("content-wrapper")
    document.querySelector(".content-body").classList.toggle("content-wrapper")
    document.querySelector(".sidebar").classList.toggle("sidebar-wrapper")
})

btn_close_sidebar.addEventListener("click", (e) => {
    document.querySelector(".header").classList.toggle("content-wrapper")
    document.querySelector(".content-body").classList.toggle("content-wrapper")
    document.querySelector(".sidebar").classList.toggle("sidebar-wrapper")
})