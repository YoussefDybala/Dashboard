
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

    }, 1500);
}
// 
loaded()




let box = document.querySelectorAll(".boxes .box")
// IntersectionObserver options
const options = {
    root: null,
    threshold: 0,
    
};

// Keep track of the number of elements being observed
let observedCount = box.length;

// IntersectionObserver callback
const boxObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            boxObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                boxObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
box.forEach((element) => {
    boxObserver.observe(element);
});




let boxOne = document.querySelectorAll(".boxes .box1")
const boxOneObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            boxOneObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                boxOneObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
boxOne.forEach((element) => {
    boxOneObserver.observe(element);
});

let boxTwo = document.querySelectorAll(".boxes .box2")
const boxTwoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            boxTwoObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                boxTwoObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
boxTwo.forEach((element) => {
    boxTwoObserver.observe(element);
});

let boxThree = document.querySelectorAll(".boxes .box3")
const boxThreeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            boxThreeObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                boxThreeObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
boxThree.forEach((element) => {
    boxThreeObserver.observe(element);
});

let boxFour = document.querySelectorAll(".boxes .box4")
const boxFourObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            boxFourObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                boxFourObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
boxFour.forEach((element) => {
    boxFourObserver.observe(element);
});

let boxFive = document.querySelectorAll(".boxes .box5")
const boxFiveObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            boxFiveObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                boxFiveObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
boxFive.forEach((element) => {
    boxFiveObserver.observe(element);
});

let courseBox = document.querySelectorAll(".boxes .course-box")
const courseBoxObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            courseBoxObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                courseBoxObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
courseBox.forEach((element) => {
    courseBoxObserver.observe(element);
});


let friendBox = document.querySelectorAll(".boxes .fr-box")
const friendBoxObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            friendBoxObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                friendBoxObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
friendBox.forEach((element) => {
    friendBoxObserver.observe(element);
});

let fileBoxOne = document.querySelectorAll(".boxes .file-box1")
const fileBoxOneObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            fileBoxOneObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                fileBoxOneObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
fileBoxOne.forEach((element) => {
    fileBoxOneObserver.observe(element);
});

let fileBoxTwo = document.querySelectorAll(".boxes .file-box2")
const fileBoxTwoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            fileBoxTwoObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                fileBoxTwoObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
fileBoxTwo.forEach((element) => {
    fileBoxTwoObserver.observe(element);
});

let planBox = document.querySelectorAll(".boxes .plan-box")
const planeBoxObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Toggle the 'slide' class based on the element's intersection status
        if (entry.isIntersecting) {
            entry.target.classList.add("slide");
            // Unobserve the element once it's intersected
            planeBoxObserver.unobserve(entry.target);
            observedCount--;

            // Disconnect the observer if no more elements are left to observe
            if (observedCount === 0) {
                planeBoxObserver.disconnect();
            }
        } else {
            entry.target.classList.remove("slide");
        }
    });
}, options);

// Observe each element
planBox.forEach((element) => {
    planeBoxObserver.observe(element);
});
