let button = document.getElementById("btn")
//List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button.addEventListener("dblclick",()=>{
//     document.querySelector(".box").innerHTML="<b>Yeyy you were clicked</b> Enjoy your click!"
// })

button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by right click please ")
})
button.addEventListener("keydown",(e)=>{
    console.log(e,e.key,e.keycode)
})