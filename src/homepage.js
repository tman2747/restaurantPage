import burgerImage from "./imgs/burger.png"
export default () => {
const content = document.querySelector(".content");
const pageContent = document.createElement("div");
pageContent.classList.add("page-content")

const welcome = document.createElement("div");
welcome.classList.add("welcome")
welcome.innerText = "Welcome to Astro Burger"
pageContent.appendChild(welcome)

const img = document.createElement("img")
img.classList.add("burger-image")
img.src = burgerImage
img.alt = "Space burger"
pageContent.appendChild(img)

const info = document.createElement("p")
info.innerHTML = "Our cosmic dining stations operate on a first-come, first-served basis—no reservations needed as we're always ready to fuel your adventure! 🌌 Prefer to enjoy your meal in the comfort of your spaceship? 🛸💨 To-go orders are available for your convenience. Prepare for a galactic feast like no other!"
pageContent.appendChild(info)



content.appendChild(pageContent)
};



/*<div class="page-content">
            <div class="welcome"> 
                Welcome to Astro Burger
            </div>
            <img class="burger-image" src="./imgs/burger.png" alt="burger">
            <div><p>Our cosmic dining stations operate on a first-come, first-served basis—no reservations needed as we're always ready to fuel your adventure! 🌌

                Prefer to enjoy your meal in the comfort of your spaceship? 🛸💨 To-go orders are available for your convenience.
                
                Prepare for a galactic feast like no other!</p></div>
    </div> */