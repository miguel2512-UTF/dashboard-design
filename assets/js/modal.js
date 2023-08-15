const btn_modal = document.getElementById("modal-demo")
const btn_modal_close = document.querySelectorAll("#modal-close")

btn_modal.addEventListener("click", (e) => {
    document.querySelector(".modal-backdrop").classList.toggle("modal-show")
})

btn_modal_close.forEach(element => {
    element.addEventListener("click", (e) => {
        document.querySelector(".modal-backdrop").classList.toggle("modal-show")
    })
})