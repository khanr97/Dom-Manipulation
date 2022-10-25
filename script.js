let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];
//Part 1
function changeTitle () {
  const mainTitleEl = document.querySelector("#main-title")
  mainTitleEl.textContent = "Welcome I'm Dom"
}
changeTitle ()

//Part 2
function colorChange () {
  const bodyEl = document.querySelector("body")
  bodyEl.style.backgroundColor = "lightcoral"
}
colorChange ()

//Part 3
function removeLastThing () {
  const favThingEl = document.querySelector("#favorite-things")
  favThingEl.removeChild(favThingEl.lastElementChild)
}
removeLastThing ()

// //Part 4
function changeFont () {
  const specialTitleEl = document.querySelectorAll(".special-title")
  console.log(specialTitleEl)
  specialTitleEl.forEach((arg) =>{
    arg.style.fontSize = "2em"
  })
}
changeFont ()

//Part 5
function removeChicago () {
  var list = document.getElementById("past-races")
  const items = document.querySelectorAll("#past-races > li")
  list.removeChild(items[3])
}
removeChicago ()

//Part 6
function addNewCity () {
  const liEl =document.createElement("li")
  liEl.textContent = "New York"
  list.append(liEl)
}
addNewCity()

//Part 7
function addBlog () {
  const newDiv = document.createElement("div")
  newDiv.className = ".blog-post"
  const newH2 = document.createElement("h2")
  newH2.textContent = "New York City Vibes"
  const newP = document.createElement("p")
  newP.style.fontSize = "medium"
  newP.textContent = "It's not how you stand by your car...it's how you race your car under these city lights."
  liEl.append(newDiv)
  newDiv.append(newH2)
  newH2.append(newP)
}
addBlog()

//Part 8
function addRandomQuote () {
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  const quoteTitle = document.querySelector("#quote-title")
  quoteTitle.addEventListener("click",randomQuote)
}
addRandomQuote ()


//Part 9

function changeColor () {
  const blogPostEl = document.querySelectorAll(".blog-post")
  blogPostEl.forEach(function(post){
    post.addEventListener("mouseenter",function(){
      post.classList.toggle("purple")
    })
    post.addEventListener("mouseout",function(){
      post.classList.toggle("red")
    })
  })
}
changeColor()






