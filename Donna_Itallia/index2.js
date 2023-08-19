let url='https://docs.google.com/spreadsheets/d/1g84mYlBNj2EB5C2ULFBzi2BBgSXqDrmha4pXl6k7hYc/export?format=csv';


data()

  function data(){  fetch(url).then(result => result.text()).then(function (csvtext) {
       return csv().fromString(csvtext);
    }).then((res)=>{
        htmlfunction(res)
    })
  }


setInterval(() => {
    data()
}, 10000);


let displayDataElement=document.querySelector('#csvData')



function htmlfunction(data){
    console.log(data)
let veg_meals=document.querySelector('.veg_meals')
let category_veg_meals=document.querySelector('.category_veg_meals')
let nonveg_meals=document.querySelector('.nonveg_meals')
let category_nonveg_meals=document.querySelector('.category_nonveg_meals')

let pasta_veg_rate=document.querySelectorAll('.pizza_veg_inch7')
let pasta_veg_name=document.querySelectorAll('.pasta_veg_name')
let pasta_veg_calories=document.querySelectorAll('.pasta_veg_calories')
let pasta_veg_description=document.querySelectorAll('.pasta_veg_description p')
let category_pasta_veg=document.querySelectorAll('.category_pasta_veg')

let allergens_pasta_veg=document.querySelectorAll('.allergens_pasta_veg')
let allergens_pasta_nonveg=document.querySelectorAll('.allergens_pasta_nonveg')
let allergens_quickbites=document.querySelectorAll('.allergens_quickbites')
let allergens_desserts=document.querySelectorAll('.allergens_desserts')

let pasta_nonveg_name=document.querySelectorAll('.pasta_nonveg')
let pasta_nonveg_calories=document.querySelectorAll('.pasta_nonveg_calories')
let pasta_nonveg_rate=document.querySelectorAll('.pasta_nonveg_rate')
let pasta_nonveg_description=document.querySelectorAll('.pasta_nonveg_description p')
let category_pasta_nonveg=document.querySelectorAll('.category_pasta_nonveg')


let quick_bites_name=document.querySelectorAll('.quick_bites_name')
let quickbites_rate=document.querySelectorAll('.quickbites_rate')
let calories_quick_bites=document.querySelectorAll('.calories_quick_bites')
let category_quickbites=document.querySelectorAll('.category_quickbites')


let dessert_name=document.querySelectorAll('.dessert_name')
let dessert_calories=document.querySelectorAll('.dessert_calories')
let category_dessert=document.querySelectorAll('.category_dessert')


      pasta_veg_name.forEach((element,i)=>{
        element.innerText=data[i].pasta_veg_name
      })
      pasta_veg_rate.forEach((element,i)=>{
        element.innerText=data[i].pasta_veg_rate
      })
      pasta_veg_calories.forEach((element,i)=>{
        element.innerText=data[i].calories_pasta_veg
      })
      pasta_veg_description.forEach((element,i)=>{
        element.innerText=data[i].pasta_veg_description
      })
      category_pasta_veg.forEach((element,index)=>{
        let c = []
        c = window.location.href.split("/")
        c.pop()
        let d= c
        let e= d.splice(2)
        for (let i = 0; i < data[index].category_pasta_veg.split(",").length; i++) {
          data[index].category_pasta_veg!=""?
          element.src=d[0]+'//'+e.join("/")+'/'+data[index].category_pasta_veg.split(",")[i] + '.svg'
          :null
        }

      })

      pasta_nonveg_rate.forEach((element,i)=>{
        element.innerText=data[i].pasta_nonveg_rate
      })
      pasta_nonveg_name.forEach((element,i)=>{
        element.innerText=data[i].pasta_nonveg_name
      })
      pasta_nonveg_calories.forEach((element,i)=>{
        element.innerText=data[i].calories_pasta_nonveg
      })
      pasta_nonveg_description.forEach((element,i)=>{
        element.innerText=data[i].pasta_nonveg_description
      })
      category_pasta_nonveg.forEach((element,index)=>{
        let c = []
        c = window.location.href.split("/")
        c.pop()
        let d= c
        let e= d.splice(2)
        for (let i = 0; i < data[index].category_pasta_nonveg.split(",").length; i++) {
          data[index].category_pasta_nonveg!=""?
          element.src=d[0]+'//'+e.join("/")+'/'+data[index].category_pasta_nonveg.split(",")[i] + '.svg'
          :null
        }    
      })


      quick_bites_name.forEach((element,i)=>{
        element.innerText=data[i].quick_bites_name
      })
      quickbites_rate.forEach((element,i)=>{
        element.innerText=data[i].quickbites_rate
      })
      calories_quick_bites.forEach((element,i)=>{
        element.innerText=data[i].calories_quick_bites
      })
      category_quickbites.forEach((element,index)=>{
        let c = []
        c = window.location.href.split("/")
        c.pop()
        let d= c
        let e= d.splice(2)
        for (let i = 0; i < data[index].category_quickbites.split(",").length; i++) {
          data[index].category_quickbites!=""?
          element.src=d[0]+'//'+e.join("/")+'/'+data[index].category_quickbites.split(",")[i] + '.svg'
          :null
        }
      })

      dessert_name.forEach((element,i)=>{
        element.innerText=data[i].dessert_name
      })
      dessert_calories.forEach((element,i)=>{
        element.innerText=data[i].dessert_calories
      })
      category_dessert.forEach((element,index)=>{
        let c = []
        c = window.location.href.split("/")
        c.pop()
        let d= c
        let e= d.splice(2)
        for (let i = 0; i < data[index].category_dessert.split(",").length; i++) {
          data[index].category_dessert!=""?
          element.src=d[0]+'//'+e.join("/")+'/'+data[index].category_dessert.split(",")[i] + '.svg'
          :null
        }
      })

      allergens_pasta_veg.forEach((element, index) => {
        let string="";
        let c = []
        c = window.location.href.split("/")
        c.pop()
        let d= c
        let e= d.splice(2)

        for (let i = 0; i < data[index].allergens_pasta_veg.split(",").length; i++) {
                data[index].allergens_pasta_veg!=""?
                string+=`<img src="${d[0]+'//'+e.join("/")+'/'+data[index].allergens_pasta_veg.split(",")[i] + '.svg'}" alt="">`
                :null
        }
        element.children[1].innerHTML=string
    });
      allergens_pasta_nonveg.forEach((element, index) => {
        let string="";
        let c = []
        c = window.location.href.split("/")
        c.pop()
        let d= c
        let e= d.splice(2)

        for (let i = 0; i < data[index].allergens_pasta_nonveg.split(",").length; i++) {
                data[index].allergens_pasta_nonveg!=""?
                string+=`<img src="${d[0]+'//'+e.join("/")+'/'+data[index].allergens_pasta_nonveg.split(",")[i] + '.svg'}" alt="">`
                :null
        }
        element.children[1].innerHTML=string
    });
      allergens_quickbites.forEach((element, index) => {
        let string="";
        let c = []
        c = window.location.href.split("/")
        c.pop()
        let d= c
        let e= d.splice(2)

        for (let i = 0; i < data[index].allergens_quickbites.split(",").length; i++) {
                data[index].allergens_quickbites!=""?
                string+=`<img src="${d[0]+'//'+e.join("/")+'/'+data[index].allergens_quickbites.split(",")[i] + '.svg'}" alt="">`
                :null
        }
        element.children[1].innerHTML=string
    });
      allergens_desserts.forEach((element, index) => {
        let string="";
        let c = []
        c = window.location.href.split("/")
        c.pop()
        let d= c
        let e= d.splice(2)

        for (let i = 0; i < data[index].allergens_desserts.split(",").length; i++) {
                data[index].allergens_desserts!=""?
                string+=`<img src="${d[0]+'//'+e.join("/")+'/'+data[index].allergens_desserts.split(",")[i] + '.svg'}" alt="">`
                :null
        }
        element.children[1].innerHTML=string
    });
    let c = []
    c = window.location.href.split("/")
    c.pop()
    let d= c
    let e= d.splice(2)
      for (let i = 0; i < data.length; i++) {
        data[i].veg_meals!=""?veg_meals.innerText=data[i].veg_meals:null
        data[i].nonveg_meals!=""?nonveg_meals.innerText=data[i].nonveg_meals:null
        data[i].category_veg_meals!=""?category_veg_meals.src=d[0] + '//' + e.join("/") + '/' + data[i].category_veg_meals.split(",")[i] + '.svg':null
        data[i].category_nonveg_meals!=""?category_nonveg_meals.src=d[0] + '//' + e.join("/") + '/' + data[i].category_nonveg_meals.split(",")[i] + '.svg':null

      }
    }
    

