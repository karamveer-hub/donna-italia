let url='https://docs.google.com/spreadsheets/d/1g84mYlBNj2EB5C2ULFBzi2BBgSXqDrmha4pXl6k7hYc/export?format=csv';

    fetch(url).then(result => result.text()).then(function (csvtext) {
       return csv().fromString(csvtext);
    }).then((res)=>{
        htmlfunction(res)
    })



// setInterval(() => {
//     data()
// }, 10000);


let displayDataElement=document.querySelector('#csvData')



function htmlfunction(data){
    console.log(data)
let veg_meals=document.querySelector('.veg_meals')
let nonveg_meals=document.querySelector('.nonveg_meals')
let pizza_veg_7inch=document.querySelectorAll('.pizza_veg_inch7')
let pasta_veg_calories=document.querySelectorAll('.pasta_veg_calories')
let pasta_nonveg=document.querySelectorAll('.pasta_nonveg')
let pasta_nonveg_calories=document.querySelectorAll('.pasta_nonveg_calories')
let pasta_veg_name=document.querySelectorAll('.pasta_veg_name')
let pizza_nonveg_7inch=document.querySelectorAll('.pizza_nonveg_inch7')
let pizza_gourmet_7inch=document.querySelectorAll('.pizza_quickbites_inch7')

      pizza_veg_7inch.forEach((element,i)=>{
        element.innerText=data[i].pizza_rate_veg
      })
      pizza_nonveg_7inch.forEach((element,i)=>{
        element.innerText=data[i].pizza_rate_nonveg
      })
      pizza_gourmet_7inch.forEach((element,i)=>{
        element.innerText=data[i].pizza_rate_quickbites
      })
      pasta_veg_calories.forEach((element,i)=>{
        element.innerText=data[i].pizza_rate_quickbites
      })
      pasta_veg_name.forEach((element,i)=>{
        element.innerText=data[i].pizza_rate_quickbites
      })
      pasta_nonveg.forEach((element,i)=>{
        element.innerText=data[i].pizza_rate_quickbites
      })
      pasta_nonveg_calories.forEach((element,i)=>{
        element.innerText=data[i].pizza_rate_quickbites
      })
      for (let i = 0; i < data.length; i++) {
        data[i].veg_meals!=""?veg_meals.innerText=data[i].veg_meals:null
        data[i].nonveg_meals!=""?nonveg_meals.innerText=data[i].nonveg_meals:null
        
      }
    }
    

