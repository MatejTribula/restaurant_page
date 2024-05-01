import "./style.css"
import indexContent from "./index_module.js"
import menuContent from "./menu_module.js"
import aboutContent from "./about_module.js"

const menuBtnArr = document.querySelectorAll('button')
let i = 0
menuBtnArr.forEach(btn => {
    console.log(btn)
    if (i === 0) {
        btn.addEventListener('click', indexContent)
    } else if (i === 1) {
        btn.addEventListener('click', menuContent)
    } else {
        btn.addEventListener('click', aboutContent)
    }
    i++
})

indexContent()




console.log("test!!!")

