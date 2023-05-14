import React from "react";
import { hexaStyle } from "../styles/randomColor";

export const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }
  
export const HexaColor = ( {colors} ) => {
    const colorsFormatted = colors.map((color) => 
      <li key={color} style={hexaStyle(color)}>{color}</li>)
    return colorsFormatted
  }