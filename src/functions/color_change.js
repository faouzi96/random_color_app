export function incrementHex(str) {
     const color_int = parseInt(str.slice(1), 16) + 1
     return color_int < 16777215 ? hex_size(color_int.toString(16)) : "000000"
}

export function decrementHex(str) {
     const color_int = parseInt(str.slice(1), 16) - 1
     return color_int > 0 ? hex_size(color_int.toString(16)) : "FFFFFF"
}

// Keep the size of the color's String to 6
function hex_size(hex) {
     while (hex.length < 6) {
          hex = "0" + hex
     }
     return hex
}
