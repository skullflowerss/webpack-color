//import "./style.scss"
import { colorMaker } from "./colorMaker.js";
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', ()=>{
    const randomColor = colorMaker()
    document.body.style.backgroundColor = randomColor
    color.textContent = randomColor
    btn.style.backgroundColor = randomColor
})

let isRGBmodeOn = false;
const rgbOpt = document.getElementById('rgb')
const hexOpt = document.getElementById('hex')

rgbOpt.addEventListener('click', () =>{
    if(!isRGBmodeOn){
        let hexColor = document.querySelector('.color').innerHTML
        let rgb = hexToRgb(hexColor)
        console.log(rgb)
        document.querySelector('.color').textContent = JSON.stringify(rgb)
    }
    return
})


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }