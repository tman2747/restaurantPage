import "./style.css" // be sure to import styles for webpack
import homepage from "./homepage";
import menupage from "./menu";
import contactpage from "./contact";
homepage()

const content = document.querySelector(".content") 
const homebutton = document.querySelector("#home")
const menu = document.querySelector("#menu")
const contact = document.querySelector("#about")


homebutton.addEventListener("click", (e) => {
    content.innerHTML = ""
    homepage()
})

menu.addEventListener("click", (e)=>{
    content.innerHTML = ""
    
    menupage()
})

contact.addEventListener("click", ()=>{
    content.innerHTML = ""
    contactpage()
})