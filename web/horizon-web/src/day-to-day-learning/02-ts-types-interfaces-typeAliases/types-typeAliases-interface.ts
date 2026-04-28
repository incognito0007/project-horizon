type ChaiOrder = {
  type: string
  sugar: number
  strong: boolean
}

function makeChai(order: ChaiOrder) {
  console.log(order)
}

function serveChai(order: ChaiOrder) {
  console.log(order)
}

// implementing type alais on a class, this can only be don if type alias is describing an object type, it cannot be used if type alias is describing a union or intersection type, or a primitive type like string, number, boolean etc.

type TeaRecipe = {
  water: number
  milk: number
}

class MasalaChai implements TeaRecipe {
  water = 100
  milk = 50
}

function printOrderDetails() {
  console.log(makeChai({ type: 'Masala Chai', sugar: 2, strong: true }))
  console.log(serveChai({ type: 'Ginger Chai', sugar: 1, strong: false }))
  const masalaChai = new MasalaChai()
  console.log(`Masala Chai Recipe: Water - ${masalaChai.water}ml, Milk - ${masalaChai.milk}ml`)
}

export { printOrderDetails }
