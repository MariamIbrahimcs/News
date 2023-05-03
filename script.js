
// let myhttp = new XMLHttpRequest()

// function getbusiness(){
//    return new Promise(function(callback){
//     console.log('Business');

//     myhttp.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1ef3630e15c6497f9d5697dfe1c14af3`)
//     myhttp.send()
    
//     let objects = document.getElementById('objects')
    
//     ready state
//     0: request not initialized
//     1: server connection established
//     2: request received
//     3: processing request
//     4: request finished and response is ready 
    
//     console.log(myhttp.readyState);
//     myhttp.addEventListener('readystatechange',function(){
//         if (myhttp.readyState==4){
//             console.log(myhttp.response);
//            myarr = JSON.parse(myhttp.response).articles
//     console.log(myarr);
//     }
//     console.log(myarr.length);
    
//     displaynews();
    
//     })
//     callback()
//    })
// }
// function getsports(){
//     return new Promise(function(callback){
        
// console.log('Sports');
// myhttp.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=1ef3630e15c6497f9d5697dfe1c14af3`)
// myhttp.send()

// let objects = document.getElementById('objects')

// // ready state
// // 0: request not initialized
// // 1: server connection established
// // 2: request received
// // 3: processing request
// // 4: request finished and response is ready 

// console.log(myhttp.readyState);
// myhttp.addEventListener('readystatechange',function(){
//     if (myhttp.readyState==4){
//         console.log(myhttp.response);
//        myarr = JSON.parse(myhttp.response).articles
// console.log(myarr);
// }
// console.log(myarr.length);

// displaynews();

// })
// callback()
//     })
// }

// function gethealth(){
//  return new Promise(function(callback){
       
// console.log('Health');
// myhttp.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=1ef3630e15c6497f9d5697dfe1c14af3`)
// myhttp.send()

// let objects = document.getElementById('objects')

// // ready state
// // 0: request not initialized
// // 1: server connection established
// // 2: request received
// // 3: processing request
// // 4: request finished and response is ready 

// console.log(myhttp.readyState);
// myhttp.addEventListener('readystatechange',function(){
//     if (myhttp.readyState==4){
//         console.log(myhttp.response);
//        myarr = JSON.parse(myhttp.response).articles
// console.log(myarr);
// }
// console.log(myarr.length);

// displaynews();

// })
// callback()
//  })
// }

// function done (){
//     console.log('DONE');
// }

let businesstype = document.querySelector('.business-type')
let sportstype = document.querySelector('.sports-type')
let healthtype = document.querySelector('.health-type')
let myarr =[];
let category = 'business'
let links = document.querySelectorAll(".nav-bar li")
let countrycode ='us'
let options = document.querySelectorAll(".options li")

let targetedcode = document.querySelector('.us-code')

let targetedcat = document.querySelector('.business-type')

let index = 0

window.addEventListener('load',function(){
    news(countrycode,category)
})

function displaynews(){
// console.log(targetedcode);
// console.log(targetedcat);
// console.log(category);
console.log(targetedcat);

for(let i = 0;i<links.length;i++){
    if (links[i] == targetedcode){
        targetedcode.style.backgroundColor = '#0F4C75'
    }
    else {
        links[i].style.backgroundColor = '#1B262C'
    }
}
// targetedcode.style.backgroundColor = '#0F4C75'


// for(let j = 0;j<options.length;j++){
 
//     if (options[j] == targetedcat){
//         // targetedcat = options[i].getAttribute('type')

//         targetedcat.style.backgroundColor = '#0F4C75'
        
//     }

//     else{
//         options[j].style.backgroundColor = '#1B262C5'
//     }
// }

    let ids = ``
    let topic=``

for (let i = 0 ;i<myarr.length;i++){
    // let myimg = myarr[i].urlToImage
    // console.log(myarr[i].id);

    if (myarr[i].urlToImage == null){
        ids+=`
        <div class="object">
        <h2 class="id">${myarr[i].author}</h2>
        <p class="title"> <span>Title : </span>${myarr[i].title}</p>
        <p class="url"> <span>URL : </span><a href="${myarr[i].url}" target="_blank">${myarr[i].url}</a></p>
        
        </div>
        `
      
    }
    else{
        ids+=`
        <div class="object">
        <h2 class="id">${myarr[i].author}</h2>
        <p class="title"> <span>Title : </span>${myarr[i].title}</p>
        <p class="url"> <span>URL : </span><a href="${myarr[i].url}" target="_blank">${myarr[i].url}</a></p>
        <img src="${myarr[i].urlToImage}" alt="">
        </div>
        `
    }
 


}

if (countrycode == 'us'){
    topic+=`<h1 class="topic-title">United States : ${category} news </h1>`
}

else if (countrycode == 'eg'){
    topic+=`<h1 class="topic-title">Egypt : ${category} news </h1>`
}


else if (countrycode == 'fr'){
    topic+=`<h1 class="topic-title">France : ${category} news </h1>`
}


else if (countrycode == 'it'){
    topic+=`<h1 class="topic-title">Italy : ${category} news </h1>`
}


document.getElementById('objects').innerHTML = ids
document.getElementById('topic').innerHTML = topic
}


for(let i = 0;i<links.length;i++){

    links[i].addEventListener('click',function(){
        countrycode = links[i].getAttribute('code')
        // links[i].style.backgroundColor = '#0F4C75'
        // links[i].style.backgroundColor = '#1B262C'
       targetedcode = links[i]

        
        category = 'business'
        news(countrycode,category)
    })
}


for(let i = 0;i<options.length;i++){
    options[i].addEventListener('click',function(){
        // options[i].style.backgroundColor = '#0F4C75'
        // options[i].style.backgroundColor = '#1B262C'
        let x = options[i].getAttribute('type')
        targetedcat = options[i]
        index = i
        changecat(x)
    })
}


function changecat(newcat){
    category = newcat
    console.log(category);
    
    news(countrycode,category)

}

// cors => cross origin resource sharing

function news(code,category){
   
    let x =fetch(`https://newsapi.org/v2/top-headlines?country=${code}&category=${category}&apiKey=1ef3630e15c6497f9d5697dfe1c14af3`)
    .then(function(s){
        // console.log(s.json());
return s.json()

    }).then(function(u){
        console.log(u.articles);
        myarr = u.articles
        // console.log(myarr);
        
    })

    .then(function(){
        displaynews()
    })
}


//await
// async function test(){
//     await getbusiness()
//     await getsports()
//     await gethealth()
//     done()
// }
// test()


//promise
// getbusiness().then(function(){

//     return getsports().then(function(){

//         return gethealth().then(function(){

//             return done()
//         })
//     })
// })

//hell
// getbusiness(function(){
//     getsports(function(){
//         gethealth(function(){
//             done()
//         })
//     })
// })









