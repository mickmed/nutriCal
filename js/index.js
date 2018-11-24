
bannerTargeting();
function bannerTargeting() {
    var banner = document.getElementById("banner-home");
    // var pos = 0;
    var targeting = setInterval(bannerChange, 5000);
    function bannerChange() {
        // banner.innerHTML="ha"; 
        if (banner.innerHTML.indexOf("planning") !== -1) {
            console.log('planning');
            banner.innerHTML = "<h1>targeting nutrients?</h1>";
            clearInterval(targeting);
            bannerCounting();
        }
    }
}
// console.log('heres');

function bannerCounting() {
    console.log('here');
    var banner = document.getElementById("banner-home");
    // var pos = 0;
    var counting = setInterval(bannerChange, 5000);
    function bannerChange() {
        // banner.innerHTML="ha"; 
        if (banner.innerHTML.indexOf("targeting") !== -1) {
            console.log('targeting');
            banner.innerHTML = "<h1>counting calories?</h1>";
            clearInterval(counting);
            bannerSmallBus();
        }
    }
}

function bannerSmallBus() {
    var banner = document.getElementById("banner-home");
    // var pos = 0;
    var smallBus = setInterval(bannerChange, 5000);
    function bannerChange() {
        // banner.innerHTML="ha"; 
        if (banner.innerHTML.indexOf("counting") !== -1) {
            console.log('targeting');
            banner.innerHTML = "<h1>small business?</h1>";
            clearInterval(smallBus);
            bannerPlanning();
        }
    }
}
function bannerPlanning() {
    var banner = document.getElementById("banner-home");
    // var pos = 0;
    var  planning = setInterval(bannerChange, 5000);
    function bannerChange() {
        // banner.innerHTML="ha"; 
        if (banner.innerHTML.indexOf("small") !== -1) {
            console.log('targeting');
            banner.innerHTML = "<h1>planning healthy meals?</h1>";
            clearInterval(planning);
            bannerTargeting();
        }
    }
}




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