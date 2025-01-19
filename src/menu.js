import burger from "./imgs/burger.png"
import salad from "./imgs/salad.png"
export default () => {

class Card{
    constructor(name,imagesource,imagealtText)
    {
        this.name = name
        this.image = imagesource
        this.imagealtText = imagealtText
        return this.createcard()
    }
    createcard()
    {
        this.card = document.createElement("div")
        this.card.classList.add("card")

        let itemname = document.createElement("p")
        itemname.innerHTML = this.name
        this.card.appendChild(itemname)
        
        let imagecontainer = document.createElement("div")
        imagecontainer.classList.add("card-image-container")
        this.card.appendChild(imagecontainer)
        let image = document.createElement("img")
        image.src = this.image
        image.alt = this.imagealtText
        imagecontainer.appendChild(image)

        let button = document.createElement("button")
        button.innerText = "More Info"
        this.card.appendChild(button)

        return this.card
    }
}

const contentarea = document.querySelector(".content")

const pageContent = document.createElement("div")
pageContent.classList.add("page-content")

const pagetitle = document.createElement("p")
pagetitle.classList.add("welcome")
pagetitle.innerText = "Check out our menu"

pageContent.appendChild(pagetitle)

const menu = document.createElement("div")
menu.classList.add("menu")
pageContent.appendChild(menu)


menu.appendChild(new Card("Astro burger",burger,"burger"))
menu.appendChild(new Card("Atomic Waste Salad",salad,"salad"))
menu.appendChild(new Card("Astro burger W/O cheese",burger,"burger"))

contentarea.appendChild(pageContent)


};