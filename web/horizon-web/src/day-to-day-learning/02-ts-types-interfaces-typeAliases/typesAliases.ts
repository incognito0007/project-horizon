type coordinates = {
  x: number
  y: number
} // Type alias declaration for an object type

function getCoordinates(points: coordinates): string {
  // Function declaration with parameter type using the coordinates type alias and return type
  return `X: ${points.x}, Y: ${points.y}`
}

function printCoordinates() {
  const pointA: coordinates = { x: 10, y: 20 } // Variable declaration and initialization using the coordinates type alias
  const pointB: coordinates = { x: 30, y: 40 } // Variable declaration and initialization using the coordinates type alias
  console.log(getCoordinates(pointA)) // Calling the getCoordinates function with pointA
  console.log(getCoordinates(pointB)) // Calling the getCoordinates function with pointB
}

export { printCoordinates }
