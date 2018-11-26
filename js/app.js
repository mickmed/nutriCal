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
    // console.log(i);
    let pageName = urlSnipper(navItems[i].getAttribute("href"));
    // console.log(sitePathPageName, pageName);
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
let milkHalfHalf = new Ingredient('milkHalfHalf', 'milk - half and half', 1, 'tbsp', 32, 30, 1.5, 4, 8);
let tempeh = new Ingredient('tempeh', 'tempeh', .5, 'cup', 2, 240, 11, 16, 20);
let pastaSauce = new Ingredient('pastaSauce', 'pasta sauce', .5, 'cup', 6, 60, 2, 8, 2);
let hummus = new Ingredient('hummus', 'hummus', 2, 'tbsp', 8, 70, 5, 4, 2);
let wholeWheatWraps = new Ingredient('wholeWheatWraps', 'wraps - whole wheat', 50, 'grms', 6, 130, 3, 21, 6);
let lettuce = new Ingredient('lettuce', 'lettuce', .25, 'cup', 4, 4.2, 0, .8, .4);
let tomatoes = new Ingredient('tomatoes', 'tomatoes', .25, 'cup', 1, 25.3, .3, 5, 1.8);
let walnuts = new Ingredient('walnuts', 'walnuts', 1, 'cup', 4, 765, 76.3, 16, 17.8);

/////MAKE ARRAY OF INGREDIENTS FOR DROPDOWN
let ingredients = [];
ingredients.push(cheese, cashews, wholeWheatPasta, milkHalfHalf, tempeh, pastaSauce, hummus, wholeWheatWraps, lettuce, tomatoes, walnuts);

//MAKE DROPDOWN OF 


for (ing in ingredients) {
    // console.log(ingredients[ing].ing_name);
    let option = document.createElement("option");

    option.value = ingredients[ing].ingID;
    option.text = ingredients[ing].ingName;
    // console.log(option);
    document.getElementById("ings").appendChild(option);
}

//MAKE DROPDOWN OF AMOUNTS
function makeAmnt() {
    let amntReturn = [];
    for (i = 1; i <= 10; i++) {
        let option = document.createElement("option");
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
        let option = document.createElement("option");
        option.value = measurements[meas];
        option.text = measurements[meas];
        // $(".ings-list-meas").append(option);

        measReturn.push("<option = '" + measurements[meas] + "'>" + measurements[meas] + "</option>");
    }
    return measReturn.join("");
}


/////GET CHOSEN INGREDIENT ADD TO LIST IN APP 
let addIngObj = document.getElementById("ings").addEventListener("change", function() {
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
    let name = obj.ingName;

    $(document).ready(function() {
        //JQuery USED TO ADD AND REMOVE DYNAMIC INGREDIENTS LIST
        // let ingSelectedText = $("#ings option:selected").text();
        // console.log(obj.ingName);

        if (recipe.ingredients.includes(id)) {

        } else {
            $("#ingredients-list").append(
                "<li><input type='text' class='ings-list-amnt' data-id='" + id + "' onkeyup='chngAmnt(this)' onclick='chngAmnt(this)' value =" + amnt + "></select><select class='ings-list-meas' data-id='" + id + "' onchange='chngMeas(this)'> onclick='chngMeas(this)'" + meas + "</select><span class='ings-list-ing' data-id='" + id + " 'onclick='getFocus(this)'>" + name + "</span><a href='javascript:void(0);' class='remove'>&nbsp&times;</a></li>");
            recipe.addIngredient(id);
        }

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

    // console.log(recipe.ingredients);
    
    currentIngVals.ingId = id;
    currentIngVals.ingAmnt = amnt;
    currentIngVals.ingMeas = 'tsp';
    // console.log(currentIngVals.storedObjs);
    currentIngVals.stored();
});

///swaps out current values in label as changes are made to particlual item in list
let currentIngVals = {
    ingId: '',
    ingAmnt: '',
    ingMeas: '',
    storedObjs: [],

    stored: function() {
        //store object values for later

        if (this.storedObjs.length !== 0) {
            console.log(this.storedObjs.length);
            for (var i = 0; i < this.storedObjs.length; i++) {
                if (this.storedObjs[i].ingId === this.ingId) {
                    console.log('yes match', i, this.ingId);
                    // console.log(this.storedObjs[i].ingId);
                    this.storedObjs[i].ingAmnt = this.ingAmnt;
                    this.storedObjs[i].ingMeas = this.ingMeas;
                    // console.log(this.storedObjs[i].ingAmnt);
                    // console.log(i, 'yes');
                    
                    return true;
                    // console.log(this.storedObjs[i].ingId.indexOf(this.ingId));
                    // console.log(this.storedObjs);
                    // console.log(this.storedObjs);
                    // console.log(this.ingId);
                    // console.log(this.storedObjs[i]);
                } else {
                    console.log(i, 'no');
                    // console.log(this.ingId);
                    // console.log(this.storedObjs[i]);
                    // console.log(this.storedObjs[i].ingId);
                    
            }
            // console.log('here');
            
            }
            this.storedObjs.push({ ingId: this.ingId, ingAmnt: this.ingAmnt, ingMeas: this.ingMeas });
        } else {
          
            this.storedObjs.push({ ingId: this.ingId, ingAmnt: this.ingAmnt, ingMeas: this.ingMeas });
        }
        


    }
};



//when user clicks on ing name get focus in nut facts label
let getFocus = (elem) => {
    let objId = eval(elem.dataset.id);
    let objKeys = Object.keys(eval(elem.dataset.id));
    let objVals = Object.values(eval(elem.dataset.id));
    // console.log(objId);
    // console.log(currentIngVals);
    // console.log(elem.previousSibling.previousSibling.value);
    let amnt = elem.previousSibling.previousSibling.value;
    let meas = elem.previousSibling.value;
    // calculate new values after input change
    for (i = 0; i < objKeys.length; i++) {
        // fill the label with new values
        document.getElementById(objKeys[i]).innerHTML = objVals[i];
    }

  
    // calculate new values after input change
    for (i = 0; i < objVals.length; i++) {
        if (typeof objVals[i] === 'number') {
            //make orig obj amnts into single tsp amnts
            let lowestCommonByTsp = (objVals[i] / objId.servAmnt);

            //times them by the new amnt val
            var newIngAmnt = lowestCommonByTsp * amnt;
            // console.log(amnt);
            //times them by the amnt meas
            if (currentIngVals.ingMeas === 'tbs') {
                newIngAmnt = newIngAmnt * 3;
            }
            if (currentIngVals.ingMeas === 'cup') {
                newIngAmnt = newIngAmnt * 48;
            }
            newIngAmnt = parseFloat(newIngAmnt).toFixed(0);
        } else {
            var newIngAmnt = objVals[i];
        }
        // fill the label with new values
        document.getElementById(objKeys[i]).innerHTML = newIngAmnt;

    }
  
    

}
// when click on amnt to change
let chngAmnt = (amnt) => {

    let objId = eval(amnt.dataset.id);
    let objKeys = Object.keys(eval(amnt.dataset.id));
    let objVals = Object.values(eval(amnt.dataset.id));
    // console.log(currentIngVals);
    // set object with original obj meas if empty
    if (currentIngVals.ingMeas === '') {
        currentIngVals.ingMeas = objId.servMeas; //set to original object val
    }
    // calculate new values after input change
    for (i = 0; i < objVals.length; i++) {
        if (typeof objVals[i] === 'number') {
            //make orig obj amnts into single tsp amnts
            // console.log(objVals[i]);
            // console.log(objId.servAmnt);
            let lowestCommonByTsp = (objVals[i] / objId.servAmnt);
            //times them by the new amnt val
            var newIngAmnt = lowestCommonByTsp * amnt.value;
            //times them by the amnt meas
            if (currentIngVals.ingMeas === 'tbs') {
                newIngAmnt = newIngAmnt * 3;
            }
            if (currentIngVals.ingMeas === 'cup') {
                newIngAmnt = newIngAmnt * 48;
            }
            newIngAmnt = parseFloat(newIngAmnt).toFixed(0);
        } else {
            var newIngAmnt = objVals[i];
        }
        // fill the label with new values
        document.getElementById(objKeys[i]).innerHTML = newIngAmnt;

    }
    // set object with current value
    currentIngVals.ingId = objId.ingID;
    currentIngVals.ingAmnt = amnt.value;
    currentIngVals.stored();
    // console.log(currentIngVals.storedObjs);


}
// when click on amnt to change
let chngMeas = (meas) => {
    console.log(eval(meas.dataset.id));
    let objId = eval(meas.dataset.id);
    let objKeys = Object.keys(eval(meas.dataset.id));
    let objVals = Object.values(eval(meas.dataset.id));
    // set object with original obj vals if empty
    if (currentIngVals.ingAmnt === '') {
        currentIngVals.ingAmnt = objId.servAmnt;
    }

    // calculate new values after meas change
    for (i = 0; i < objVals.length; i++) {
        if (typeof objVals[i] === 'number') {
            console.log(objVals[i]);
            let lowestCommonByTsp = (objVals[i] / objId.servAmnt);
            // console.log(lowestCommonByTsp);
            var newIngAmnt = lowestCommonByTsp * currentIngVals.ingAmnt;

            if (meas.value === 'tbs') {
                newIngAmnt = newIngAmnt * 3;

            }
            if (meas.value === 'cup') {
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
    currentIngVals.ingName = objId;
    currentIngVals.ingMeas = meas.value;
    currentIngVals.stored();
    // console.log(currentIngVals.ingMeas);

    

}


let addRecipe = (vals) => {
   var totalsArr = [];
   var tot = [];
    // console.log(currentIngVals.storedObjs);
    for(stored in currentIngVals.storedObjs){
        let currentId = currentIngVals.storedObjs[stored].ingId;
        let currentAmnt = currentIngVals.storedObjs[stored].ingAmnt;
        let currentMeas = currentIngVals.storedObjs[stored].ingMeas;
        let objKeys =(Object.keys(eval(currentIngVals.storedObjs[stored].ingId)));
        let objVals = (Object.values(eval(currentIngVals.storedObjs[stored].ingId)));
        // console.log(objVals);
        for (i = 0; i < objVals.length; i++) {
            if (typeof objVals[i] === 'number') {
               
                // console.log(objVals[i]);
                // console.log(typeof objVals[i]);
                let lowestCommonByTsp = (objVals[i]/eval(currentId).servAmnt);
                // console.log(eval(lowestCommonByTsp));
                var newIngAmnt = lowestCommonByTsp * currentAmnt;
                // console.log(newIngAmnt);
     
                if (currentMeas === 'tbs') {
                    newIngAmnt = newIngAmnt * 3;

                }
                if (currentMeas === 'cup') {
                    newIngAmnt = newIngAmnt * 48;

                }
                newIngAmnt = parseFloat(newIngAmnt).toFixed(0);

                console.log(objKeys[i], newIngAmnt);
                totalsArr.push({[objKeys[i]]: newIngAmnt});

                tot[(objKeys[i])] += Number(newIngAmnt);
                // console.log(typeof Number(objKeys[i]), typeof parseInt(newIngAmnt));
            // } else {
            //     var newIngAmnt = objVals[i];
            // }
            }
        }
    }console.log(tot);

    // console.log(recipeTotals.totals.reduce((a, b) => +a + +b.allAmnts, 0));
}










let recipe = {
    ingredients: [],
    addIngredient: function(ingId) {

        let ingsIdObj = ingId;
        this.ingredients.push(ingsIdObj);
    }
};



