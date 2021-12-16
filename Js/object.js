var users = [
  {
    userName: "jana",
    password: "123123",
  },
  {
    userName: "kamal",
    password: "123123",
  },
  {
    userName: "vimal",
    password: "123123",
  },
]

var posts = [
  {
    title: "Jaffna raining day",
    user: "Mano",
  },

  {
    title: "Colombo very hot day",
    user: "Lola",
  },
]

var inputUname = prompt("Enter your user name?")
var inputPassword = prompt("Enter your password?")

login(inputUname, inputPassword)

function login(userName, password) {
  if (isValidUser(userName, password)) {
    console.log("Login success!")
  } else {
    console.log("Login failed")
  }
}

function isValidUser(userName, password) {
  var check = false
  users.forEach((user) => {
    if (user.userName === userName && user.password === password) {
      check = true
    }
  })
  return check
}
