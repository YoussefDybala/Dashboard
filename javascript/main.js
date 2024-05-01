let dash = document.getElementById("dash")
let set = document.getElementById("set")
let prof = document.getElementById("prof")
let proj = document.getElementById("proj")
let cours = document.getElementById("cours")
let friend = document.getElementById("friend")
let file = document.getElementById("file")
let plan = document.getElementById("plan")
let dashboard = document.querySelector(".dashboard")
let setting = document.querySelector(".setting")
let profile = document.querySelector(".profile")
let projects = document.querySelector(".Projects")
let courses = document.querySelector(".courses")
let friends = document.querySelector(".friends")
let files = document.querySelector(".files")
let plans = document.querySelector(".plans")

dash.addEventListener("click" , function() {
    dash.classList.add("background")
    set.classList.remove("background")
    prof.classList.remove("background")
    proj.classList.remove("background")
    cours.classList.remove("background")
    friend.classList.remove("background")
    file.classList.remove("background")
    plan.classList.remove("background")
    dashboard.style.display = "block"
    setting.style.display = "none"
    profile.style.display = "none"
    projects.style.display = "none"
    courses.style.display = "none"
    friends.style.display = "none"
    files.style.display = "none"
    plans.style.display = "none"
    
})
set.addEventListener("click" , function() {
    set.classList.add("background")
    dash.classList.remove("background")
    prof.classList.remove("background")
    proj.classList.remove("background")
    cours.classList.remove("background")
    friend.classList.remove("background")
    file.classList.remove("background")
    plan.classList.remove("background")
    setting.style.display = "block"
    dashboard.style.display = "none"
    profile.style.display = "none"
    projects.style.display = "none"
    courses.style.display = "none"
    friends.style.display = "none"
    files.style.display = "none"
    plans.style.display = "none"
})
prof.addEventListener("click" , function() {
    prof.classList.add("background")
    set.classList.remove("background")
    dash.classList.remove("background")
    proj.classList.remove("background")
    cours.classList.remove("background")
    friend.classList.remove("background")
    file.classList.remove("background")
    plan.classList.remove("background")
    profile.style.display = "block"
    dashboard.style.display = "none"
    setting.style.display = "none"
    projects.style.display = "none"
    courses.style.display = "none"
    friends.style.display = "none"
    files.style.display = "none"
    plans.style.display = "none"
})
proj.addEventListener("click" , function() {
    proj.classList.add("background")
    set.classList.remove("background")
    dash.classList.remove("background")
    prof.classList.remove("background")
    cours.classList.remove("background")
    friend.classList.remove("background")
    file.classList.remove("background")
    plan.classList.remove("background")
    projects.style.display = "block"
    dashboard.style.display = "none"
    setting.style.display = "none"
    profile.style.display = "none"
    courses.style.display = "none"
    friends.style.display = "none"
    files.style.display = "none"
    plans.style.display = "none"
})
cours.addEventListener("click" , function() {
    cours.classList.add("background")
    set.classList.remove("background")
    dash.classList.remove("background")
    prof.classList.remove("background")
    proj.classList.remove("background")
    friend.classList.remove("background")
    file.classList.remove("background")
    plan.classList.remove("background")
    courses.style.display = "block"
    dashboard.style.display = "none"
    setting.style.display = "none"
    profile.style.display = "none"
    projects.style.display = "none"
    friends.style.display = "none"
    files.style.display = "none"
    plans.style.display = "none"
})
friend.addEventListener("click" , function() {
    friend.classList.add("background")
    cours.classList.remove("background")
    set.classList.remove("background")
    dash.classList.remove("background")
    prof.classList.remove("background")
    proj.classList.remove("background")
    file.classList.remove("background")
    plan.classList.remove("background")
    friends.style.display = "block"
    dashboard.style.display = "none"
    setting.style.display = "none"
    profile.style.display = "none"
    projects.style.display = "none"
    courses.style.display = "none"
    files.style.display = "none"
    plans.style.display = "none"
})
file.addEventListener("click" , function() {
    file.classList.add("background")
    set.classList.remove("background")
    dash.classList.remove("background")
    prof.classList.remove("background")
    proj.classList.remove("background")
    cours.classList.remove("background")
    friend.classList.remove("background")
    plan.classList.remove("background")
    files.style.display = "block"
    dashboard.style.display = "none"
    setting.style.display = "none"
    profile.style.display = "none"
    projects.style.display = "none"
    courses.style.display = "none"
    friends.style.display = "none"
    plans.style.display = "none"
})
plan.addEventListener("click" , function() {
    plan.classList.add("background")
    set.classList.remove("background")
    dash.classList.remove("background")
    prof.classList.remove("background")
    proj.classList.remove("background")
    cours.classList.remove("background")
    friend.classList.remove("background")
    file.classList.remove("background")
    plans.style.display = "block"
    dashboard.style.display = "none"
    setting.style.display = "none"
    profile.style.display = "none"
    projects.style.display = "none"
    courses.style.display = "none"
    friends.style.display = "none"
    files.style.display = "none"
})


let megman = document.getElementById("megman")
let zero = document.getElementById("zero")
let sigma = document.getElementById("sigma")

megman.addEventListener("click" , function (){
    megman.classList.add("active")
    zero.classList.remove("active")
    sigma.classList.remove("active")
})
zero.addEventListener("click" , function (){
    zero.classList.add("active")
    megman.classList.remove("active")
    sigma.classList.remove("active")
})
sigma.addEventListener("click" , function (){
    sigma.classList.add("active")
    megman.classList.remove("active")
    zero.classList.remove("active")
})


