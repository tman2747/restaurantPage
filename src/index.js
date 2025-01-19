import "./style.css" // be sure to import styles for webpack
import homepage from "./homepage";
import menupage from "./menu";
//homepage()

const content = document.querySelector(".content") 
const homebutton = document.querySelector("#home")
const menu = document.querySelector("#menu")

homebutton.addEventListener("click", (e) => {
    content.innerHTML = ""
    homepage()
})

menu.addEventListener("click", (e)=>{
    content.innerHTML = ""
    menupage()
})