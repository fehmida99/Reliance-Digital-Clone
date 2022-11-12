let newData = []

const images = document.querySelector("#img1");
  const button = document.querySelector("#start");
  const buttons = document.querySelector("#stop");
  let btn1 = document.querySelector("#prev");
  let btn2 = document.querySelector("#next");
  let image = [
  "https://www.reliancedigital.in/medias/Audio-Fest-Carousel-Banner-07-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NzQyN3xpbWFnZS9qcGVnfGltYWdlcy9oNzEvaDc2Lzk5MTgyMDE0MzAwNDYuanBnfDgyOGRjYjJiN2E2MTgxM2ZmNGM1YTk5YmRmNzQ3YjFkMTZiMTQxNmJjN2U1NGY4ZTk1MGZjYzI2YzU3OTU4NWQ",
      "https://www.reliancedigital.in/medias/Digital-Big-Screen-Fest-Carousel-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzA3Njd8aW1hZ2UvanBlZ3xpbWFnZXMvaDE1L2g4OS85OTE2MTg4MDAwMjg2LmpwZ3xlZGFlYjkxOTc2MTFiZDkzYTkwZDllNGU0YTYxYmNmM2UxNjRkMTZjMDQwMWM1ZGE3Yjk0M2E4MmI1OWI2MjM0",
      "https://www.reliancedigital.in/medias/Motorola-Carousel-Banner.jpg?context=bWFzdGVyfGltYWdlc3w2NjE5MXxpbWFnZS9qcGVnfGltYWdlcy9oZTIvaGUwLzk5MTgzMzYxNzIwNjIuanBnfDIzMzY2Y2ZjMTcyNWY4ZWUyZjIxNDk2YjZiNjdlYmY4YzE5MjM4ZTNlODAyZmNiOGI0ZGQ3NjhjYmQ5MmM5MjE",
      "https://www.reliancedigital.in/medias/Winter-Sale-Carousel-Banner-2022.jpg?context=bWFzdGVyfGltYWdlc3w3ODA1OXxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDU3Lzk5MTgzMzY0MzQyMDYuanBnfDkxOGNjMWJiMjExYWUzYTQ0ODMzMTk5MjQ0YzY0YmVhNTE5ZjQxZTZjNzc4ZTRhNDhjYjc3N2I3NmZjNmM2ZDI",
  
  ]
  let int;


  let generateRandomPicture = (array) => {
      let randomNum = Math.floor(Math.random() * array.length);
      console.log(randomNum)
      images.setAttribute("src", array[randomNum]);
      button.addEventListener("click", function () {
          int = setInterval("generateRandomPicture(image)", 2000)
      })

  }
  buttons.addEventListener("click", function () {
      clearInterval(int)
  })
  let count = 0
  btn1.addEventListener("click", function () {
      clearInterval(int)
      count++;
      if (count >= image.length) {
          count = 0;
          images.src = image[count];
      } else {
          images.src = image[count];
      }
  })
  btn2.addEventListener("click", function () {
      clearInterval(int)
      count--;
      if (count < 0) {
          count = image.length - 1;
          images.src = image[count];
      } else {
          images.src = image[count];
      }
  })


  generateRandomPicture(image)

// Image slide part

const iphone = document.querySelector("#phone_img");
    const butn = document.querySelector("#strt");
    const butns = document.querySelector("#stp");
    let btnn1 = document.querySelector("#prv");
    let btnn2 = document.querySelector("#nxt");
    let photo = [
    "https://www.reliancedigital.in/medias/airpods-pro-2nd-gen-Buy-now-NPI-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM4NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDkwL2hiMy85OTE1MjAzNTE4NDk0LmpwZ3w1NzZjYjljZGY4M2E3OTMwZmFmOTExNmY3MzE4ZDczYTIxNzUyOWE3YmQyOWQ4YzA5MWRkZmU2NTY4YWMyYTUy",
    "https://www.reliancedigital.in/medias/Apple-Watch-Series-8-Buy-now-CLP-Banner-30-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDE0Mjh8aW1hZ2UvanBlZ3xpbWFnZXMvaGExL2gwNS85OTE1MjU1MzkwMjM4LmpwZ3wwMzIwY2NmMWUzODMyOTBjYTNiMDY0ZDJiN2YwMWNmMzBlMzViZGUzMGM2OGVjNzA0OTZiZGVkNWZlY2EwZjRk",
    "https://www.reliancedigital.in/medias/iPhone14-Pro-Buy-now-NPI-Banner-18-10-2022.jpg?context=bWFzdGVyfGltYWdlc3w4OTEzMnxpbWFnZS9qcGVnfGltYWdlcy9oOWUvaDhkLzk5MTM2NTcxMzEwMzguanBnfDVlNjcwMmQyZjhkZmVkNTg2NzY5ZWYwODQyODI3NDllZTZiZWM5ZDUxMjZkZGIzNzI4ZTBmODdmNGYxY2EwNTU",
    "https://www.reliancedigital.in/medias/iPad-10th-Gen-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYzNDB8aW1hZ2UvanBlZ3xpbWFnZXMvaGY2L2hiMS85OTEzNjU2NDEwMTQyLmpwZ3wxNTJiZjhiZDMxYTcyZWJmMGM4MzE4OTdlYjkzOGMwYWMzM2E0Mzk1YWFiNTQzZjdiYmJkOTJlNGQ3Yjk5MDBm",
    "https://www.reliancedigital.in/medias/Boat-Watch-NPI-Banner-07-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDI4Nzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGY1L2hmOS85OTE2OTExNTgzMjYyLmpwZ3xiYTlhMmVmNjdmNzRlNGQ5Y2EyN2Q3ZTZmNjkzYjVjYjU4MjllMzU1NGUyNjIzZjJiMjNhOWMzZGE0NDE3NTEz",
    "https://www.reliancedigital.in/medias/iPad-Pro-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYwNjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDNlL2gyMC85OTEzNjU2NTQxMjE0LmpwZ3wwOTcxYjg0MTc5NDQxNDcwNTRjMzcwNjkxYWJlNGI2NDk3ZjkyYzNhNzM5NWY3NzM0NTRiYjA3ODA1MzRiOWFk",
    ]
    let ints;
  
  
    let digitalExpress = (array) => {
        let randomNum = Math.floor(Math.random() * array.length);
        console.log(randomNum)
        iphone.setAttribute("src", array[randomNum]);
        butn.addEventListener("click", function () {
            ints = setInterval("digitalExpress(photo)", 2000)
        })
  
    }
    butns.addEventListener("click", function () {
        clearInterval(ints)
    })
    let factor = 0
    btnn1.addEventListener("click", function () {
        clearInterval(ints)
        factor++;
        if (factor >= photo.length) {
            factor = 0;
            iphone.src = photo[factor];
        } else {
            iphone.src = photo[factor];
        }
    })
    btnn2.addEventListener("click", function () {
        clearInterval(ints)
        factor--;
        if (factor < 0) {
            factor = photo.length - 1;
            iphone.src = photo[factor];
        } else {
            iphone.src = photo[factor];
        }
    })
  
  
    digitalExpress(photo)

//Evaluation part

let bag = []

let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
   
    newData=data
    display(data);
    console.log(bag)
  })
  .catch((err) => alert(err))

function display(bag) {
    // console.log("bag",bag)
    document.querySelector("#product-container").innerHTML=""
 
    bag.data.forEach((elem) => {
      let div = document.createElement("div");
      let my_img = document.createElement("img")
      my_img.setAttribute("src", elem.img)
      let brand = document.createElement("h2")
      brand.innerText = elem.brand
      let price = document.createElement("h3")
      price.innerText = elem.price
      let details = document.createElement("p")
      details.innerText = elem.details
      let cat = document.createElement("p");
      cat.innerText = elem.category
      let btn = document.createElement("button")
      btn.innerText = "Add To Cart"
      btn.addEventListener("click", function () {
        my_cart(elem)
      })
      div.append(my_img, brand, price, details, cat, btn)
      document.querySelector("#product-container").append(div)
    })


}
document.querySelector("#filter").addEventListener("change", my_fill)
function my_fill() {
  let selected = document.querySelector("#filter").value;
//   newData.data.forEach((elem) => {
//     let x = elem.data.filter((elem) => {
//       return elem.category == selected;
//     })
//     let obj={
//         data:x,
//         totatlPages:1
//     }
//     my_fun(obj)
//   })

// console.log(newData)
let finaldata = newData.data.filter((el)=>{
    if(el.category==selected){
        return el
    }

})

let obj ={
    data:finaldata,
    totalPages:1
}
display(obj)
}
document.querySelector("#box").addEventListener("change",Sorting)
function Sorting(){
    
    console.log("ndata",newData)
    let finaldata;
    let sorted = document.querySelector("#box").value
        if(sorted == "LTH"){
            finaldata= newData.data.sort((a,b)=>a.price-b.price)
         }
        if(sorted=="HTL") {
            finaldata= newData.data.sort((a,b)=>b.price-a.price)
         }
         let obj={
            data:finaldata,
            totalPages:1
            
         }
         display(obj)
 
    
}

function my_fun(x) {
  document.querySelector("#product-container").innerHTML = "";
  x.forEach((elem) => {
    let div = document.createElement("div");
    let my_img = document.createElement("img")
    my_img.setAttribute("src", elem.img)
    let brand = document.createElement("h2")
    brand.innerText = elem.brand
    let price = document.createElement("h3")
    price.innerText = elem.price
    let details = document.createElement("p")
    details.innerText = elem.details
    let cat = document.createElement("p");
    cat.innerText = elem.category
    let btn = document.createElement("button")
    btn.innerText = "Add To Cart"
    div.append(my_img, brand, price, details, cat, btn)
    document.querySelector("#product-container").append(div)
  })
}
let cartItems = JSON.parse(localStorage.getItem("cart")) || []

function my_cart(elem) {
  if (cartItems.includes(elem)) {
    alert("Product Already in Cart")
  } else {
    cartItems.push(elem)
    localStorage.setItem("cart", JSON.stringify(cartItems))
    alert("Product Added To Cart")
  }
}