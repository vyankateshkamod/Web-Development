console.log("Vyankateh")

let boxex = document.getElementsByClassName("box")
console.log(boxex)

// boxex[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor= "red"

// document.querySelector(".box").style.backgroundColor="green"

// console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green"
})

//open console
e = document.getElementsByTagName("div")

// HTMLCollection(6) [div.container, div.box, div.box, div.box, div#redbox.box, div.box, redbox: div#redbox.box]

// e[4].matches("#redbox")
// true

// e[3].matches("#redbox")
// false

// e[3].closest("#redbox")
// null

// e[3].closest(".container")
// e[3].closest("html")

// document.querySelector(".container").contains(e[2])
// true
// document.querySelector(".container").contains(e[0])
// true
// document.querySelector(".container").contains(e[12])
// false

// document.querySelector(".container").contains(document.querySelector("body"))
// false
// document.querySelector("body").contains(document.querySelector(".container"))
// true
