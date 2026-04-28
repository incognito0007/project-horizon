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

interface cupSize {
  size: 'small' | 'medium' | 'large'
}

class ChaiCup implements cupSize {
  size: cupSize['size'] = 'small'
}

type teaType = 'Masala Chai' | 'Ginger Chai' | 'Lemon Chai'
function printTeaType(t: teaType) {
  console.log(`Tea Type: ${t}`)
}

type baseChai = { teaLeaves: number }
type ExtraIngredients = { masala: number }
type MasalaChaiRecipe = baseChai & ExtraIngredients

const masalaChaiRecipe: MasalaChaiRecipe = {
  // this is an example of intersection type, it combines the properties of both baseChai and ExtraIngredients types, so the resulting MasalaChaiRecipe type has both teaLeaves and masala properties.
  teaLeaves: 5,
  masala: 3,
}

function printOrderDetails() {
  console.log(makeChai({ type: 'Masala Chai', sugar: 2, strong: true }))
  console.log(serveChai({ type: 'Ginger Chai', sugar: 1, strong: false }))
  const masalaChai = new MasalaChai()
  console.log(`Masala Chai Recipe: Water - ${masalaChai.water}ml, Milk - ${masalaChai.milk}ml`)
  const chaiCup = new ChaiCup()
  chaiCup.size = 'medium'
  console.log(`Chai Cup Size: ${chaiCup.size}`)
  printTeaType('Lemon Chai') //this function will only accept the specified string literals as valid arguments, if we try to pass any other string it will result in a type error, this is one of the key benefits of using type aliases to define union types, it provides better type safety and helps catch errors at compile time.
  console.log(
    `Masala Chai Recipe: Tea Leaves - ${masalaChaiRecipe.teaLeaves}g, Masala - ${masalaChaiRecipe.masala}g`
  )
}

export { printOrderDetails }
