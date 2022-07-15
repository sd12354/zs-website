function mode() {
  console.log("oggggg")
  var top = document.getElementById("top");
  var nav1 = document.getElementById("nav1")
  var nav2 = document.getElementById("nav2")
  var nav3 = document.getElementById("nav3")
  var nav4 = document.getElementById("nav4")
  var mode = document.getElementById("mode")
  var home = document.getElementById("home")
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    top.style.backgroundColor = "black"
    nav1.style.color = "white"
    nav2.style.color = "white"
    nav3.style.color = "white"
    nav4.style.color = "white"
    mode.setAttribute('name', "moon")
    home.style.backgroundColor = "black"
  } else {
    document.body.style.backgroundColor = "white"
    top.style.backgroundColor = "white"
    nav1.style.color = "black"
    nav2.style.color = "black"
    nav3.style.color = "black"
    nav4.style.color = "black"
    mode.setAttribute('name', "sunny-sharp")
    home.style.backgroundColor = "black"
  }
}