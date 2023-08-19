let url = 'https://docs.google.com/spreadsheets/d/1CJ8vrEcFwdVlUSFrvUZvEpNvdXlJPqBpGuTLgWG1FGc/export?format=csv';
let loading=true
async function coolMama() {
        await fetch(url).then(result => result.text()).then(function (csvtext) {
            return csv().fromString(csvtext);
        }).then((res) => {
                htmlfunction(res)
        })
        
    
    
}
coolMama()
setInterval(() => {
    coolMama()



}, 10000);

let displayDataElement
let veg_meals
let nonveg_meals
let addon_cheese
let addon_veggies
let pizza_veg_7inch
let pizza_veg_12inch
let pizza_nonveg_7inch
let pizza_nonveg_12inch
let pizza_gourmet_7inch
let pizza_gourmet_12inch
let description_pizza_veg
let description_pizza_nonveg
let pizza_veg_allergens
let pizza_nonveg_allergens
let allergens_image_gourmet


function htmlfunction(data) {
    console.log(data)
    veg_meals = document.querySelector('.veg_meals');
    nonveg_meals = document.querySelector('.nonveg_meals');
    offer = document.querySelector('.offer');
    addon_cheese = document.querySelector('.addon_cheese');
    addon_veggies = document.querySelector('.addon_veggies');
    pizza_veg_7inch = document.querySelectorAll('.pizza_veg_inch7');
    pizza_veg_name = document.querySelectorAll('.pizza_veg_name');
    let pizza_veg_calories = document.querySelectorAll('.pizza_veg_calories');
    pizza_veg_allergens = document.querySelectorAll('.allergens_image');
    description_pizza_veg = document.querySelectorAll('.description_pizza_veg p');
    pizza_veg_12inch = document.querySelectorAll('.pizza_veg_inch12');

    pizza_nonveg_7inch = document.querySelectorAll('.pizza_nonveg_inch7');
    let pizza_nonveg_calorie = document.querySelectorAll('.pizza_nonveg_calorie');
    description_pizza_nonveg = document.querySelectorAll('.description_pizza_nonveg p');
    pizza_nonveg_name = document.querySelectorAll('.pizza_nonveg_name');
    pizza_nonveg_12inch = document.querySelectorAll('.pizza_nonveg_inch12');
    pizza_nonveg_allergens = document.querySelectorAll('.allergens_image_nonveg');

    allergens_image_gourmet = document.querySelectorAll('.allergens_image_gourmet');
    gourmet_pizza_name = document.querySelectorAll('.gourmet_pizza_name');
    let pizza_gourmet_inch7 = document.querySelectorAll('.pizza_gourmet_inch7');
    gourmet_pizza_12inch = document.querySelectorAll('.gourmet_pizza_12inch');
    gourmet_pizza_calorie = document.querySelectorAll('.gourmet_pizza_calorie');
    let description_pizza_gourmet = document.querySelectorAll('.description_pizza_gourmet p');
    // console.log(pizza_veg_7inch[0],pizza_veg_7inch[1],pizza_veg_7inch[2],pizza_veg_7inch[3],pizza_veg_7inch[4])
    // let string=" ";

    pizza_veg_name.forEach((element, i) => {
        element.innerText = data[i].pizza_veg_name
    });
    pizza_veg_7inch.forEach((element, i) => {
        element.innerText = data[i].pizza_veg_7inch
    });
    pizza_veg_12inch.forEach((element, i) => {
        element.innerText = data[i].pizza_veg_12inch
    });
    pizza_veg_calories.forEach((element, i) => {
        element.innerText = data[i].pizza_veg_calories
    });
    description_pizza_veg.forEach((element, i) => {
        element.innerText = data[i].pizza_veg_description
    })
    
    pizza_veg_allergens.forEach((element, index) => {
        let string="";
        let c = []
        c = window.location.href.split("/")
        c.pop()
        let d= c
        let e= d.splice(2)
        console.log(index)
        console.log(data[index].allergens_pizza_veg.split(",").length)
        for(let i = 0; i < data[index].allergens_pizza_veg.split(",").length; i++) {
            string+=`<img src="${d[0] + '//' + e.join("") + '/' + data[index].allergens_pizza_veg.split(",")[i] + '.svg'}" alt="">`
        }
        element.children[1].innerHTML=string
        console.log(string)
    });
    pizza_nonveg_allergens.forEach((element, index) => {
        let string="";
        let c = []
        c = window.location.href.split("/")
        c.pop()
        let d= c
        let e= d.splice(2)

        for (let i = 0; i < data[index].allergens_pizza_veg.split(",").length; i++) {
                string+=`<img src="${d[0] + '//' + e.join("") + '/' + data[index].allergens_pizza_nonveg.split(",")[i] + '.svg'}" alt="">`
        }
        element.children[1].innerHTML=string
    });
    allergens_image_gourmet.forEach((element, index) => {
        let string="";
        let c = []
        c = window.location.href.split("/")
        c.pop()
        let d= c
        let e= d.splice(2)
        console.log(data[index].allergens_pizza_gourmet.split(",").length)
        
        for (let i = 0; i < data[index].allergens_pizza_gourmet.split(",").length; i++) {
                string+=`<img src="${d[0] + '//' + e.join("") + '/' + data[index].allergens_pizza_gourmet.split(",")[i] + '.svg'}" alt="">`
        }
        element.children[1].innerHTML=string
    });
    
    


    pizza_nonveg_name.forEach((element, i) => {
        element.innerText = data[i].pizza_nonveg_name
    });
    pizza_nonveg_calorie.forEach((element, i) => {
        element.innerText = data[i].pizza_nonveg_calorie
    });
    pizza_nonveg_7inch.forEach((element, i) => {
        element.innerText = data[i].pizza_nonveg_7inch
    });
    pizza_nonveg_12inch.forEach((element, i) => {
        element.innerText = data[i].pizza_nonveg_12inch
    });
    description_pizza_nonveg.forEach((element, i) => {
        element.innerText = data[i].pizza_nonveg_description
    });
  

    pizza_gourmet_inch7.forEach((element, i) => {
        element.innerText = data[i].gourmet_pizza_7inch
    });
    gourmet_pizza_12inch.forEach((element, i) => {
        element.innerText = data[i].gourmet_pizza_12inch
    });
    gourmet_pizza_name.forEach((element, i) => {
        element.innerText = data[i].gourmet_pizza_name
    });
    gourmet_pizza_calorie.forEach((element, i) => {
        element.innerText = data[i].gourmet_pizza_calorie
    });
    description_pizza_gourmet.forEach((element, i) => {
        element.innerText = data[i].gourmet_pizza_description
    });
    
    for (let i = 0; i < data.length; i++) {

        data[i].veg_meals != "" ? veg_meals.innerText = data[i].veg_meals : null
        data[i].nonveg_meals != "" ? nonveg_meals.innerText = data[i].nonveg_meals : null
        data[i].choco_lava != "" ? offer.innerText = data[i].choco_lava : null
        data[i].addon_cheese != "" ? addon_cheese.innerText = data[i].addon_cheese : null
        data[i].addon_veggies != "" ? addon_veggies.innerText = data[i].addon_veggies : null

    }

}
