
// GET PAGE URL END
let urlSnipper = (path) => {
    page = path.split("/").pop();
    return page;
}
let pathName = window.location.pathname;
let sitePathPageName = urlSnipper(pathName);

console.log(sitePathPageName);

// STYLE SELECTED NAV ITEM
  let navItems = document.getElementsByClassName('navlink');
    // console.log(navItems[0].getAttribute("href"));
    for (i = 0; i < navItems.length; i++) {
        console.log(i);
        let pageName = urlSnipper(navItems[i].getAttribute("href"));
        console.log(sitePathPageName, pageName);
        if (pageName === sitePathPageName) {
            console.log(navItems[i]);
            navItems[i].style.fontSize = "24px";
        }
    }


////////////////APP STARTS HERE//////////////////

//MAKE CLASS FOR RECIPE INGRIEDIENTS///////
class Ingredient {
    constructor(ingID, ingName, servAmnt, servMeas, servCont, calories, totalFat, totalCarb, protein) {
        this.ingID = ingID;
        this.ingName = ingName;
        this.servAmnt = servAmnt;
        this.servMeas = servMeas;

        this.servCont = servCont;
        this.calories = calories;
        this.totalFat = totalFat;
        this.totalCarb = totalCarb;
        this.protein = protein;

    }
}

let cheese = new Ingredient('cheese', 'cheese', .125, 'cup', 8, 110, 9, 2, 7);
let cashews = new Ingredient('cashews', 'cashews', .25, 'cup', 15, 180, 13, 9, 7);
let wholeWheatPasta = new Ingredient('wholeWheatPasta', 'pasta - whole wheat', .75, 'cup', 8, 190, 1.5, 41, 7);
let milkHalfHalf = new Ingredient('milkHalfHalf', 'milk - half and half', 1, 'tbsp', 32, 30, 1.5, 4, 0);
let tempeh = new Ingredient('tempeh', 'tempeh', .5, 'cup', 2, 240, 11, 16, 20);
let pastaSauce = new Ingredient('pastaSauce', 'pasta sauce', .5, 'cup', 6, 60, 2, 8, 2);
let hummus = new Ingredient('hummus', 'hummus', 2, 'tbsp', 8, 70, 5, 4, 2);
let wholeWheatWraps = new Ingredient('wholeWheatWraps', 'wraps - whole wheat', 50, 'grms', 6, 130, 3, 21, 6);

/////MAKE ARRAY OF INGREDIENTS FOR DROPDOWN
var ingredients = [];
ingredients.push(cheese, cashews, wholeWheatPasta, milkHalfHalf, tempeh, pastaSauce, hummus, wholeWheatWraps);

//MAKE DROPDOWN OF INGREDIENTS
for (ing in ingredients) {
    // console.log(ingredients[ing].ing_name);
    var option = document.createElement("option");

    option.value = ingredients[ing].ingID;
    option.text = ingredients[ing].ingName;
    // console.log(option);
    document.getElementById("ings").appendChild(option);
}

//MAKE DROPDOWN OF AMOUNTS
function makeAmnt() {
    let amntReturn = [];
    for (i = 1; i <= 10; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        // $(".ings-list-amnt").append(option);
        amntReturn.push("<option = '" + i + "'>" + i + "</option>");
    }
    return amntReturn.join("");

}

//MAKE DROPDOWN OF MEASUREMENTS
let makeMeas = () => {
    let measurements = ['tsp', 'tbs', 'cup'];
    let measReturn = [];
    for (meas in measurements) {
        var option = document.createElement("option");
        option.value = measurements[meas];
        option.text = measurements[meas];
        // $(".ings-list-meas").append(option);

        measReturn.push("<option = '" + measurements[meas] + "'>" + measurements[meas] + "</option>");
    }
    return measReturn.join("");
}


/////GET CHOSEN INGREDIENT ADD TO LIST IN APP 
var addIngObj = document.getElementById("ings").addEventListener("change", function() {
    let ingSelectedVal = $('#ings option:selected').val();
    // console.log(typeof ingSelectedVal);
    let obj = eval(ingSelectedVal);
    // console.log(obj);
    if (obj.servMeas === 'cup') {
        obj.servMeas = 'tsp';
        obj.servAmnt *= 48;
    }
    if (obj.servMeas === 'tbsp') {
        obj.servMeas = 'tsp';
        obj.servAmnt *= 3;
    }
    let id = obj.ingID;
    let amnt = obj.servAmnt;
    let meas = makeMeas();

    $(document).ready(function() {
        //JQuery USED TO ADD AND REMOVE DYNAMIC INGREDIENTS LIST
        let ingSelectedText = $("#ings option:selected").text();
        $("#ingredients-list").append(
            "<li><input type='text' class='ings-list-amnt' data-id='" + id + "' onkeyup='chngAmnt(this)' value =" + amnt + "></select><select class='ings-list-meas' data-id='" + id + "' onchange='chngMeas(this)'>" + meas + "</select><span class='ings-list-ing'>" + ingSelectedText + "</span><a href='javascript:void(0);' class='remove'>&nbsp&times;</a></li>");

        //need to use on() here to delete dynamically created <li>
        $(document).on("click", "a.remove", function() {
            $(this).parent().remove();
        });
    });
    //loop through object keys and place values in Nutrition Facts Label

    let objKeys = Object.keys(eval(ingSelectedVal));
    for (i = 0; i < objKeys.length; i++) {
        // console.log(objKeys[i]);
        document.getElementById(objKeys[i]).innerHTML = obj[objKeys[i]];
    }

    recipe.addIngredient(obj);

});


let currentIngVals = {
    ingName: '',
    ingAmnt: '',
    ingMeas: ''
};
// when click on amnt to change
let chngAmnt = (amnt) => {
    // set vars
    let objId = eval(amnt.dataset.id);
    let objKeys = Object.keys(eval(amnt.dataset.id));
    let objVals = Object.values(eval(amnt.dataset.id));
    
    // set object with original obj meas if empty
    if(currentIngVals.ingMeas === ''){
        currentIngVals.ingMeas = objId.servMeas;//set to original object val
    }
    // calculate new values after input change
    for (i = 0; i < objVals.length; i++) {
        if (typeof objVals[i] === 'number') {
            //make orig obj amnts into single tsp amnts
            var lowestCommonByTsp = (objVals[i] / objId.servAmnt);
            //times them by the new amnt val
            var newIngAmnt = lowestCommonByTsp * amnt.value;
            //times them by the amnt meas
            if(currentIngVals.ingMeas === 'tbs'){
                newIngAmnt = newIngAmnt * 3;
            }
            if(currentIngVals.ingMeas === 'cup'){
                newIngAmnt = newIngAmnt * 48;
            }
            newIngAmnt = parseFloat(newIngAmnt).toFixed(0);
        } else {
            var newIngAmnt = objVals[i];
        }
        // fill the label with new values
        document.getElementById(objKeys[i]).innerHTML = newIngAmnt;
        // console.log(document.getElementById('servAmnt').innerHTML = amnt.value);
        // console.log(amnt.value);
    }
    // set object with current value
    currentIngVals.ingName = objId;
    currentIngVals.ingAmnt = amnt.value;
    recipe.addIngredient(objId, amnt.value, objId.servMeas);
    // Object.assign(recipe.addIngredient, {ingName: 'Test', ingAmnt: 'Barbar', ingMeas: 'asd'})
    console.log(recipe.ingredients);
}

let chngMeas = (meas) => {

    let objId = eval(meas.dataset.id);
    let objKeys = Object.keys(eval(meas.dataset.id));
    let objVals = Object.values(eval(meas.dataset.id));
    // set object with original obj vals if empty
    if(currentIngVals.ingAmnt === ''){
        currentIngVals.ingAmnt = objId.servAmnt;
    }
    
    // calculate new values after meas change
    for (i = 0; i < objVals.length; i++) {
        if (typeof objVals[i] === 'number') {
            // console.log(objVals[i]);
            var lowestCommonByTsp = (objVals[i] / objId.servAmnt);
            // console.log(lowestCommonByTsp);
            var newIngAmnt = lowestCommonByTsp * currentIngVals.ingAmnt;
            
            if(meas.value === 'tbs'){
                newIngAmnt = newIngAmnt * 3;
                
            }
            if(meas.value === 'cup'){
                newIngAmnt = newIngAmnt * 48;
                
            }
            newIngAmnt = parseFloat(newIngAmnt).toFixed(0);
        } else {
            var newIngAmnt = objVals[i];
        }
       
        document.getElementById(objKeys[i]).innerHTML = newIngAmnt;
        // console.log(document.getElementById('servAmnt').innerHTML = amnt.value);
        // console.log(amnt.value);
    }
    currentIngVals.ingName = objId;
    currentIngVals.ingMeas = meas.value;
    console.log(currentIngVals.ingMeas);

}

var recipe = {
    ingredients: [],
    addIngredient: function(ingId, ingAmnt, ingMeas) {

        var ingsObject = {ingName: ingId, ingAmnt: ingAmnt, ingMeas: ingMeas};
        this.ingredients.push(ingsObject);
    }
};


// let currentObj = (currentIng) => {
//     let obj = eval(currentIng);
//     // console.log(obj);
//     if (obj.servMeas === 'cup') {
//         obj.servMeas = 'tsp';
//         obj.servAmnt *= 48;
//     }
//     if (obj.servMeas === 'tbsp') {
//         obj.servMeas = 'tsp';
//         obj.servAmnt *= 3;
//     }
//     let amnt = obj.servAmnt;
//     let meas = makeMeas();


//     //JQuery USED TO ADD AND REMOVE DYNAMIC INGREDIENTS LIST
//     let ingSelectedText = $("#ings option:selected").text();
//     $("#ingredients-list").append(
//         "<li><input type='text' class='ings-list-amnt' data-type='ing-amnt' onclick='chngAmnt(this)'value =" + amnt + "></select><select class='ings-list-meas'>" + meas + "</select><span class='ings-list-ing'>" + ingSelectedText + "</span><a href='javascript:void(0);' class='remove'>&nbsp&times;</a></li>");

//     //need to use on() here to delete dynamically created <li>
//     $(document).on("click", "a.remove", function() {
//         $(this).parent().remove();
//     });

//     //loop through object keys and place values in Nutrition Facts Label

//     let objKeys = Object.keys(eval(ingSelectedVal));
//     for (i = 0; i < objKeys.length; i++) {
//         // console.log(objKeys[i]);
//         document.getElementById(objKeys[i]).innerHTML = obj[objKeys[i]];
//     }

// }




// MAKE RECIPE - PUT INGREDIENTS INTO ARRAY



//CYCLE THROUGH INGS AND ADD PROPERTIES
$('#addPizza').on('click', function() {


    let ings = [];


    let sumCals = 0;
    let sumTotFats = 0;
    let sumTotCarbs = 0;
    let sumTotProtein = 0;

    for (ing in recipe.ingredients) {

        ings.push(recipe.ingredients[ing].name);
        var objKeys = Object.keys(eval(recipe.ingredients[ing].name));
        var value = eval(recipe.ingredients[ing].name)[objKeys[i]];
        // for (i = 0; i < objKeys.length; i++) {
        //     var key = objKeys[i];
        //     console.log(key);
        //     console.log(eval(recipe.ingredients[ing].name)[objKeys[i]]);
        //     classVals.push({
        //         [key]: eval(recipe.ingredients[ing].name)[objKeys[i]] });
        // }
        console.log(typeof eval(recipe.ingredients[ing].name));
        var cals = Number(eval(recipe.ingredients[ing].name).calories);
        var totFat = Number(eval(recipe.ingredients[ing].name).totalFat);
        var totCarb = Number(eval(recipe.ingredients[ing].name).totalCarb);
        var totProtein = Number(eval(recipe.ingredients[ing].name).protein);



        sumCals += cals;
        sumTotFats += totFat;
        sumTotCarbs += totCarb;
        sumTotProtein += totProtein;
    }
    console.log(eval(recipe.ingredients[ing].name).calories);
    // console.log(classVals);


    // // let what = classVals.reduce((a, b) => +a + +b.calories, 0);
    // // console.log(what);

    // function shoonga(classVals) {
    //     var total = 0;
    //     for (var i = 0; i < classVals.length; i++) {
    //         total = total + classVals[i].calories;
    //     }
    //     return total;
    // }

    // console.log(shoonga(classVals));

});






//         var localPizza = {
//             toppings: pizza.toppings,
//         }
//         order.addPizza(localPizza);
//     });


//     var order = {
//         pizzas: [],

//         addPizza: function(pizza) {
//             this.pizzas.push(pizza);
//             this.updateOrder();
//         },
//         updateOrder: function() {
//             //Let's build this together :)
//             $('#order').html(''); //reset it first

//             //create an output variable that we can add things to
//             var output = '<li class="list-group-item list-group-item-success">Your Order</li>';
//             for (index in this.pizzas) {
//                 var localPizza = this.pizzas[index];
//                 var pizzaNumber = parseInt(index) + 1;
//                 var info = "Pizza #" + pizzaNumber + " has these toppings: ";
//                 for (toppingIndex in localPizza.toppings) {
//                     var localTopping = localPizza.toppings[toppingIndex];
//                     info += localTopping.name + " | ";
//                 }
//                 output += '<li class="list-group-item">' + info + '</li>'

//             }
//             $('#order').html(output); //update the DOM with the new output

//             //Reset global pizza
//             pizza.toppings = [];
//             // updateDomPizza(pizza);
//         }
//     }



//     // function updateDomPizza(pizza)
//     //     {
//     //         // console.log('here');
//     //         $('#pizza').html(''); //reset it first

//     //         //create an output variable that we can add things to
//     //         var output = 'Your Pizza';
//     //          console.log('pizza', typeof pizza.toppings);
//     //         for(index in pizza.toppings)
//     //         {
//     //             var topping = pizza.toppings[index];
//     //             output += '<li>' + topping.name + '</li>';
//     //         }
//     //         $('#pizza').html(output); //update the DOM with the new output
//     //     }
//     //     updateDomPizza(pizza); //invoke function definition









//     // $('#addTopping').on('click', function(){

//     //     var toppingName = $('#topping').val();

//     //     console.log('top from input', toppingName);
//     //     pizza.addTopping(toppingName);
//     //     updateDomPizza(pizza); //invoke function definition
//     //     // $('#topping').val('');
//     // });


// });