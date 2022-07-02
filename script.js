
  let div = document.querySelector('#div')
 let pictures =[ 'https://place-puppy.com/300x300',' https://place-puppy.com/300x299',' https://place-puppy.com/400x300',' https://place-puppy.com/300x400']

let catPictures = ['http://placekitten.com/200/300',"http://placekitten.com/300/300",'http://placekitten.com/600/200','http://placekitten.com/400/400']

function addImg(p){
  let picture = document.createElement('img');
  picture.src = p
  div.appendChild(picture)
}

// addImg('https://place-puppy.com/300x300')


// let picture = document.createElement('img');
// picture.src = 'https://place-puppy.com/300x300'
// document.body.appendChild(picture)

let head = document.createElement('h1')
head.innerHTML = "<h1>Dallas Is Cool</h1>"
document.body.appendChild(head)



console.log(3+3)
const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);

// pictures.forEach((p)=>{
//     addImg(p)
// })
let cats = document.querySelector("#cats")
let dogs = document.querySelector("#dogs")

dogs.addEventListener("click",()=>{
    div.innerHTML = ""   
    pictures.forEach((p)=>{
        addImg(p)
    })
})

cats.addEventListener("click",()=>{
    div.innerHTML = ''
    catPictures.forEach((p)=>{
        addImg(p)
    })
})