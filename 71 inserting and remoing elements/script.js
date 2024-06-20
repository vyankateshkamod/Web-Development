console.log("hello world")

document.querySelector(".box")
// '<div class=​"box">​Good Day​</div>​'

document.querySelector(".container").innerHTML
// '\n        <div class="box">Good Day</div>\n    '


document.querySelector(".box").innerText
// 'Good Day'
document.querySelector(".container").innerText
// 'Good Day'


document.querySelector(".box").outerHTML
// '<div class="box">Good Day</div>'
document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">Good Day</div>\n    </div>' 

document.querySelector(".container").tagName
// 'DIV'
document.querySelector(".container").nodeName
// 'DIV'

document.querySelector(".container").textContent
// '\n        Good Day\n    '

document.querySelector(".container").hidden
// false
// document.querySelector(".container").hidden = true
// true

document.querySelector(".box").innerHTML = "Hello World"
// 'Hello World'

document.querySelector(".box").hasAttribute("style")
// false

document.querySelector(".box").getAttribute("style")
// 'color: red;'

document.querySelector(".box").setAttribute("style","color:yellow")
// undefine

document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}