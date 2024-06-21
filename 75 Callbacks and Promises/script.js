console.log("this is console")
console.log("I am not a robot")

setTimeout(() => {
    console.log("I am inside the timeout")
}, 0);

setTimeout(() => {
    console.log("I am inside the timeout 2")
}, 0);

console.log("The Endgame")

const fn=()=>{
    console.log("Nothing")
}

const callback=(arg,fn)=>{
    console.log(arg)
    fn()
}

const loadScript=(src,callback) =>{
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Dark",fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)