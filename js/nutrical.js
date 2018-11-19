class Ingredient {
    constructor(name, serving_size, servings_container, calories) {
        this.ing_name = name;
        this.serving_size = serving_size;
        this.servings_container = servings_container;
        this.calories = calories;
    }
    speak() {
        console.log(
            `My name is $(this.fname),
       I am ${this.humanYears()},
       and I am a ${this.breed}`
        );
    }
    humanYears() {
        return this.age * 7;
    }
}


let cheese = new Ingredient('cheese', '3/4  cup', 8, 12);
let cashews = new Ingredient('cashews', '.5 cup', 8, 14);
let whole_wheat_flour = new Ingredient('whole_wheat_flour', '.5 cup', 8, 14);
let lettuce_romain = new Ingredient('lettuce, romaine', '.5 cup', 8, 14);
let tempeh = new Ingredient('tempeh', '.5 cup', 8, 14);



console.log(cheese.serving_size);

var ingredients = [];
ingredients.push(cheese, cashews, whole_wheat_flour, lettuce_romain, tempeh);
console.log(ingredients);



for (ing in ingredients) {
    console.log(ingredients[ing].ing_name);
    var option = document.createElement("option");

    option.value = ingredients[ing].ing_name;
    option.text = ingredients[ing].ing_name;
    // console.log(option);
    document.getElementById("ings").appendChild(option);
}



// ADD INGREDIENTS TO UL ON APP PAGE
var add_ing_btn = document.getElementById('add-ing-btn');
console.log(add_ing_btn);
var addIngredient = function() {
    var ings_value = document.getElementById("ings").value;
    var create_li_ing = document.createElement('li');
    create_li_ing.id = ings_value;
    create_li_ing.innerHTML = ings_value;
    document.getElementById('todo-list').appendChild(create_li_ing);
   
    // var create_li_X = document.createElement('li');
    // create_li_X.innerHTML = " X";
    // var i = document.getElementById('x-out').appendChild(create_li_X);
    // console.log(i);
    console.log(document.getElementsByTagName('ings_'));
    var add_x = document.getElementById('x-out');
	add_x.style.display="block";
}

add_ing_btn.addEventListener('click', addIngredient);


//REMOVE INGREDIENT FROM UL
// var remIngredient = function(){
// 	// var Xout = document.getElementById('x-out');
// 	// Xout.parentNode.removeChild(Xout);


// }

// add_ing_btn.addEventListener('click', remIngredient);

var add_y = document.getElementById('x-out');
add_y.style.display="none";

// 




// 









// let n;
// var ingredient = {
//     serving_size: 'ss',
//     servings_container: 'sc',
//     calories: 8,
//     calories_fat: 'calories_fat',
//     total_fat: 'total_fat',
//     sat_fat: 'sat_fat',
//     trans_fat: 'trans_fat',
//     cholesterol: 'cholesterol',
//     sodium: 'sodium',
//     total_carb: 'total_carb',
//     fiber: 'fiber',
//     sugars: 'sugars',
//     protein: 'protein',
//     vitA: 'vitA',
//     vitC: 'vitC',
//     calcium: 'calcium',
//     iron: 'iron',
//     recss: function(n) {
//         return this.calories * n;

//     }
// }
// // 




// console.log(ingredient.recss(6));