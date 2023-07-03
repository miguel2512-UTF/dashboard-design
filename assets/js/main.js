let menu_icon = document.querySelector(".menu-icon")
let btn_close_sidebar = document.querySelector(".btn-close-sidebar")
let btn_expand = document.querySelectorAll(".expand-item")

menu_icon.addEventListener("click", (e) => {
    document.querySelector(".header").classList.toggle("content-wrapper")
    document.querySelector(".content-body").classList.toggle("content-wrapper")
    document.querySelector(".sidebar").classList.toggle("sidebar-wrapper")
    document.querySelectorAll(".expand-item").forEach(element => element.classList.remove("show"))
})

btn_close_sidebar.addEventListener("click", (e) => {
    document.querySelector(".header").classList.toggle("content-wrapper")
    document.querySelector(".content-body").classList.toggle("content-wrapper")
    document.querySelector(".sidebar").classList.toggle("sidebar-wrapper")
})

btn_expand.forEach(element => {
    element.addEventListener("click", () => {
        if (!element.parentElement.parentElement.classList.contains("sidebar-wrapper")) {
            element.classList.toggle("show")
        }
    })
})