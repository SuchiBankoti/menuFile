const mnu = {
    categories: ['All', 'Breakfast', 'Lunch', 'Dinner', 'Shakes'],
    AllDishes: [
        {
            name: 'Pan-cakes',
            category: ['All', 'Breakfast'],
            image: "foodpic.png",
            price: "$ 15.99",
            text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle,hammock freegan copper mug whatever cold-pressed"
        },
        {
            name: 'Burger-Fries',
            category: ['All', 'Lunch'],
            image: "food1.png",
            price: "$ 15.99",
            text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle,hammock freegan copper mug whatever cold-pressed"
        },
        {
            name: 'Sundae',
            category: ['All', 'Shakes'],
            image: "food2.png",
            price: "$ 15.99",
            text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle,hammock freegan copper mug whatever cold-pressed"
        },
        {
            name: 'Choco-shake',
            category: ['All', 'Shakes'],
            image: "food4.png",
            price: "$ 15.99",
            text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle,hammock freegan copper mug whatever cold-pressed"
        },
        {
            name: "Egg-Attack",
            category: ['All', "Breakfast", ''],
            image: "food7.png",
            price: "$ 15.99",
            text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle,hammock freegan copper mug whatever cold-pressed"
        },
        {
            name: "Egg-Toast",
            category: ['All', "Breakfast"],
            image: "food3.png",
            price: "$ 15.99",
            text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle,hammock freegan copper mug whatever cold-pressed"
        },
        {
            name: "Steak-Roast",
            category: ['All', "Lunch", "Dinner"],
            image: "food6.png",
            price: "$ 15.99",
            text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle,hammock freegan copper mug whatever cold-pressed"
        },
        {
            name: "Hamburger",
            category: ['All', "Dinner", "Lunch"],
            image: "food5.png",
            price: "$ 15.99",
            text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle,hammock freegan copper mug whatever cold-pressed"
        }
    ]
}

let div = document.getElementById("buttons")
let menu = document.getElementById("menu")

function createButton(category) {
    let btn = document.createElement("button")
    btn.textContent = (category)
    div.appendChild(btn)
    btn.addEventListener("click", (e) => addContent(e.target.textContent))
    btn.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "#c59d5f"
        e.target.style.color = "white"
    })
    btn.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = "transparent"
        e.target.style.color = "#c59d5f"
    })
    return btn
}
let buttons = mnu.categories.map(createButton)

function addContent(value) {
    let str = ""
    let newArray = mnu.AllDishes.filter((obj) => obj.category.includes(value))
    str = newArray.map((obj) => (`
    <div class="contents">
    <img src=${obj.image}>
      <div id="info">
        <div id="name-price">
         <p class="name">${obj.name}</p>
         <p class="price">${obj.price}</p>
        </div>
        <div class="text">${obj.text}</div>
      </div>
    </div>
    `)).join("")
    menu.innerHTML = str
}
addContent("All")
