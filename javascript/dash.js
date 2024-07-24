
let switchLinks = document.querySelectorAll(".switch-links li")
let AllPages = document.querySelectorAll(".all-pages  .Pag")
switchLinks.forEach((ele) => {
    ele.onclick = function () {
        switchLinks.forEach((ele) => {
            ele.classList.remove("background")
        })
        this.classList.add("background")
    }

   ele.addEventListener("click" , function () {
    AllPages.forEach((ele) => {
        ele.style.display = "none"
    })
    document.querySelectorAll(this.dataset.work).forEach((ele) => {
        ele.style.display = "block"
    })
   })
})



let backUp = document.querySelectorAll(".back-con div")
backUp.forEach((ele) => {
    ele.onclick = function () {
        backUp.forEach((ele) => {
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
})


