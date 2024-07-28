
let switchLinks = document.querySelectorAll(".switch-links li")
let AllPages = document.querySelectorAll(".all-pages  .Pag")
for (let i = 0 ; i < switchLinks.length ; i++) {
    switchLinks[0].setAttribute("data-work" , ".dash")
    switchLinks[1].setAttribute("data-work" , ".set")
    switchLinks[2].setAttribute("data-work" , ".profe")
    switchLinks[3].setAttribute("data-work" , ".proj")
    switchLinks[4].setAttribute("data-work" , ".cours")
    switchLinks[5].setAttribute("data-work" , ".freind")
    switchLinks[6].setAttribute("data-work" , ".file")
    switchLinks[7].setAttribute("data-work" , ".plan")
}
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

let started = document.querySelector(".started")
function loaded() {
    document.body.onload = function () {
        started.style.display = "block"
    }
    setTimeout(() => {
        started.classList.add("deleteStarted")

    }, 1000);
    setTimeout(() => {
        started.style.display = "none"

    }, 2000);
}
// 
loaded()