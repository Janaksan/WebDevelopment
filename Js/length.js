var input = document.getElementById("inputText")
var button = document.getElementById("btn")

var ul = document.querySelector("ul")

button.addEventListener("click", function () {
  if (input.value.length > 0) {
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))

    ul.appendChild(li)

    input.value = ""
  }
})
