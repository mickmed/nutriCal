$(function() {

    class Ingredient {
        constructor(ingName, servSize, servCont, calories) {
            this.ingName = ingName;
            this.servSize = servSize;
            this.servCont = servCont;
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

    var ingredients = [];
    ingredients.push(cheese, cashews, whole_wheat_flour, lettuce_romain, tempeh);

    //MAKE DROPDOWN OF INGREDIENTS
    for (ing in ingredients) {
        // console.log(ingredients[ing].ing_name);
        var option = document.createElement("option");

        option.value = ingredients[ing].ingName;
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
    function makeMeas() {
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
    //GET INPUT VALUE ADD TO RECIPE

    //JQuery USED TO ADD AND REMOVE DYNAMIC INGREDIENTS LIST

    $("#ings").change(function() {
        let amnt = makeAmnt();
        let meas = makeMeas();
        let ingSelected = $('#ings option:selected').val();
        $("#ingredients-list").append(
            "<li><select class='<i></i>ngs-list-amnt'>" + amnt + "</select><select class='ings-list-meas'>" + meas + "</select><span class='ings-list-ing'>" + ingSelected + "</span><a href='javascript:void(0);' class='remove'>&nbsp&times;</a></li>");

        //need to use on() here to delete dynamically created <li>
        $(document).on("click", "a.remove", function() {
            $(this).parent().remove();
        });
        //loop through object keys and place values in Nutrition Facts Label
        // console.log(Object.keys(eval(ingSelected)));
        let obj = eval(ingSelected);
        var objKeys = Object.keys(eval(ingSelected));
        for (i = 0; i < objKeys.length; i++) {
            document.getElementById(objKeys[i]).innerHTML = obj[objKeys[i]];
        }
        recipe.addIngredient(ingSelected);
    });

    // MAKE RECIPE - PUT INGREDIENTS INTO ARRAY
    var recipe = {
        ingredients: [],
        addIngredient: function(ing) {
           
            var ingsObject = {name: ing};
            this.ingredients.push(ingsObject);
        }
    };

    
    //CYCLE THROUGH INGS AND ADD PROPERTIES
    $('#addPizza').on('click', function() {

        console.log(recipe.ingredients.length);
        let ings = [];
        let classVals = [];


        for (ing in recipe.ingredients) {
            // console.log(recipe.ingredients[ing]);
            ings.push(recipe.ingredients[ing].name);
            console.log(recipe.ingredients.length);
            var objKeys = Object.keys(recipe.ingredients[ing].name);
            console.log(objKeys.length);
            for (i = 0; i < objKeys.length; i++) {
                console.log(recipe.ingredients[ing].name);
                // classVals = Object.keys(recipe.ingredients[ing].name);
                
            }
        }

        console.log(ings);




        // for (objName in ingCals) {
        //     console.log(ingCals[objName].calories);
        // }
        // console.log(recipe.ingredients.length);





        var localPizza = {
            toppings: pizza.toppings,
        }
        order.addPizza(localPizza);
    });


    var order = {
        pizzas: [],

        addPizza: function(pizza) {
            this.pizzas.push(pizza);
            this.updateOrder();
        },
        updateOrder: function() {
            //Let's build this together :)
            $('#order').html(''); //reset it first

            //create an output variable that we can add things to
            var output = '<li class="list-group-item list-group-item-success">Your Order</li>';
            for (index in this.pizzas) {
                var localPizza = this.pizzas[index];
                var pizzaNumber = parseInt(index) + 1;
                var info = "Pizza #" + pizzaNumber + " has these toppings: ";
                for (toppingIndex in localPizza.toppings) {
                    var localTopping = localPizza.toppings[toppingIndex];
                    info += localTopping.name + " | ";
                }
                output += '<li class="list-group-item">' + info + '</li>'

            }
            $('#order').html(output); //update the DOM with the new output

            //Reset global pizza
            pizza.toppings = [];
            // updateDomPizza(pizza);
        }
    }



    // function updateDomPizza(pizza)
    //     {
    //         // console.log('here');
    //         $('#pizza').html(''); //reset it first

    //         //create an output variable that we can add things to
    //         var output = 'Your Pizza';
    //          console.log('pizza', typeof pizza.toppings);
    //         for(index in pizza.toppings)
    //         {
    //             var topping = pizza.toppings[index];
    //             output += '<li>' + topping.name + '</li>';
    //         }
    //         $('#pizza').html(output); //update the DOM with the new output
    //     }
    //     updateDomPizza(pizza); //invoke function definition









    // $('#addTopping').on('click', function(){

    //     var toppingName = $('#topping').val();

    //     console.log('top from input', toppingName);
    //     pizza.addTopping(toppingName);
    //     updateDomPizza(pizza); //invoke function definition
    //     // $('#topping').val('');
    // });







});