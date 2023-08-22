let menu_icon = document.querySelector(".menu-icon")
let btn_close_sidebar = document.querySelector(".btn-close-sidebar")
let btn_expand = document.querySelectorAll(".arrow-icon")

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
        element.parentElement.parentElement.classList.toggle("show")
    })
})

if (navigator.userAgentData.mobile) {
    document.querySelectorAll(".input__date").forEach(el => {
        el.classList.add("form__date")
        const [ day, month, year ] = new Date().toLocaleDateString("en-GB").split('/')
        const currentDate = [year, month, day].join("-")
        el.value = currentDate
    })
}