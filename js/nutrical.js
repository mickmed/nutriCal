class Ingredient {
    constructor(name, serving_size, servings_container, calories) {
        this.ing_name = name;
        this.serving_size = serving_size;
        this.servings_container = servings_container;
        this.calories = calories;
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

//MAKE DROPDOWN OF INGREDIENTS
for (ing in ingredients) {
    // console.log(ingredients[ing].ing_name);
    var option = document.createElement("option");

    option.value = ingredients[ing].ing_name;
    option.text = ingredients[ing].ing_name;
    // console.log(option);
    document.getElementById("ings").appendChild(option);
}

//JQuery USED TO ADD AND REMOVE DYNAMIC INGREDIENTS LIST
$(document).ready(function() {
    $("#ings").change(function() {
    	var x = $('#ings option:selected').val();
        $("#ings-list").append("<li>" + x + "<a href='javascript:void(0);' class='remove'>&times;</a></li>");
    });
    //need on() here to delete dynamically created <li>
    $(document).on("click", "a.remove", function() {
        $(this).parent().remove();
    });
});

// TRIED TO ADD INGREDIENTS TO UL WITH VANILLA JS BUT COULD NOT REMOVE DYNAMICALLY CREATED <li>'s

// get add item button
// var add_ing_btn = document.getElementById('add-ing-btn');

// var addIngredient = function() {
//     var ings_value = document.getElementById("ings").value;
//     var create_li_ing = document.createElement('li');
//     create_li_ing.id = ings_value;
//     create_li_ing.innerHTML = ings_value;
//     document.getElementById('todo-list').appendChild(create_li_ing);

//     var create_li_X = document.createElement('li');
//     create_li_X.innerHTML = " X";
//     var i = document.getElementById('x-out').appendChild(create_li_X);
// }

// add_ing_btn.addEventListener('click', addIngredient);










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