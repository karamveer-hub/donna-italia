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
let nonveg_meals=document.querySelector('.nonveg_meals')

let pasta_veg_rate=document.querySelectorAll('.pizza_veg_inch7')
let pasta_veg_name=document.querySelectorAll('.pasta_veg_name')
let pasta_veg_calories=document.querySelectorAll('.pasta_veg_calories')

let pasta_nonveg_name=document.querySelectorAll('.pasta_nonveg')
let pasta_nonveg_calories=document.querySelectorAll('.pasta_nonveg_calories')
let pizza_nonveg_rate=document.querySelectorAll('.pasta_nonveg_rate')


let quick_bites_name=document.querySelectorAll('.quick_bites_name')
let quickbites_rate=document.querySelectorAll('.quickbites_rate')
let calories_quick_bites=document.querySelectorAll('.calories_quick_bites')


let dessert_name=document.querySelectorAll('.dessert_name')
let dessert_calories=document.querySelectorAll('.dessert_calories')


      pasta_veg_name.forEach((element,i)=>{
        element.innerText=data[i].pasta_veg_name
      })
      pasta_veg_rate.forEach((element,i)=>{
        element.innerText=data[i].pasta_veg_rate
      })
      pasta_veg_calories.forEach((element,i)=>{
        element.innerText=data[i].calories_pasta_veg
      })

      pizza_nonveg_rate.forEach((element,i)=>{
        element.innerText=data[i].pizza_nonveg_rate
      })
      pasta_nonveg_name.forEach((element,i)=>{
        element.innerText=data[i].pasta_nonveg_name
      })
      pasta_nonveg_calories.forEach((element,i)=>{
        element.innerText=data[i].calories_pasta_nonveg
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

      dessert_name.forEach((element,i)=>{
        element.innerText=data[i].dessert_name
      })
      dessert_calories.forEach((element,i)=>{
        element.innerText=data[i].dessert_calories
      })
      for (let i = 0; i < data.length; i++) {
        data[i].veg_meals!=""?veg_meals.innerText=data[i].veg_meals:null
        data[i].nonveg_meals!=""?nonveg_meals.innerText=data[i].nonveg_meals:null
        
      }
    }
    

