function breakfast(dessert = '🎂', drink = '☕️') {
  return `${dessert} ${drink}`
}

console.log(breakfast()) // 🎂 ☕️

console.log(breakfast('🍩', '🍺')) // 🍩 🍺