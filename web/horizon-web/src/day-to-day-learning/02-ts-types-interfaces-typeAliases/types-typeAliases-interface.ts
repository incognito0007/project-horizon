function makeChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order)
}

function serveChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order)
}

function printOrderDetails() {
  console.log(makeChai({ type: 'Masala Chai', sugar: 2, strong: true }))
  console.log(serveChai({ type: 'Ginger Chai', sugar: 1, strong: false }))
}

export { printOrderDetails }
