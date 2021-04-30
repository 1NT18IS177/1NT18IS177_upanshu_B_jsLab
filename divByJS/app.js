const mydiv1 = document.createElement("div")
const mydiv2 = document.createElement("div")
const mydiv3 = document.createElement("div")

mydiv1.style.height = "500px"
mydiv1.style.width = "500px"

mydiv2.style.height = "300px"
mydiv2.style.width = "300px"

mydiv3.style.height = "100px"
mydiv3.style.width = "100px"

mydiv1.style.backgroundColor = "purple"
mydiv2.style.backgroundColor = "green"
mydiv3.style.backgroundColor = "black"

document.body.append(mydiv1)
mydiv1.appendChild(mydiv2)
mydiv2.appendChild(mydiv3)

let divs = document.querySelectorAll("div")

divs.forEach(div => {
    div.addEventListener("click", () => {
        console.log("you clicked a div")
    })
})


divs.forEach(div => {
    div.addEventListener("mouseover", e => {
        mydiv3.style.backgroundColor = "blue"
    })
})
