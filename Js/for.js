var todos = ["Write new code", "Clean room", "Learn javascript"]

// for (var i = 0; i < todos.length; i++) {
//   console.log(todos[i])
// }

// var secTodos = ["One", "Two", "Three"]

// var count = 0
// while (count < secTodos.length) {
//   console.log(secTodos[count])
//   count++
// }

// var finalTodos = ["One", "Two", "Three"]

// var doCount = 0

// do {
//   console.log(finalTodos[doCount])
//   doCount++
// } while (doCount < finalTodos.length)

todos.forEach((todo, i) => {
  console.log(i + "  is " + todo)
})
