var colorOne = document.getElementById("color-1")
var colorTwo = document.getElementById("color-2")
var body = document.getElementById("bgBody")
var code = document.getElementById("code")

function addColor() {
  body.style.background =
    "linear-gradient(to right," + colorOne.value + "," + colorTwo.value + ")"

  code.textContent = "background: " + body.style.background + ";"
}

colorOne.addEventListener("input", addColor)

colorTwo.addEventListener("input", addColor)
