const HEX = "0123456789ABCDEF"

function random_choice() {
     const color = []
     for (let i = 0; i < 6; i++) {
          color.push(chooser(HEX))
     }
     return color.join("")
}

function chooser(str) {
     return str[Math.floor(Math.random() * str.length)]
}
export default random_choice
