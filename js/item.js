//reference DOM
const body = document.getElementById("body");
const nutrientsForm = document.getElementById("nutrients");
const itemName = document.getElementById("item-name");
const portion = document.getElementById("portion");
const units = document.getElementById("units");
const recipeNumber = document.getElementById("recipe-number");
const nutrientArr = document.getElementsByClassName("nutrient");
const ingredientsArr = document.getElementById("ingredients-list");
const submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");

//load localStorage object or create object if nothing exists in localStorage
//TODO: change to Postgresql database after testing is complete
const itemObj = JSON.parse(localStorage.getItem('item')) || {};

//append entry to localStorage object
const appendValues = (e) => {
    e.preventDefault();
    const propName = itemName.value;
    const item = {
        portion: parseFloat(portion.value),
        units: units.value,
        recipeNumber: recipeNumber.value,
        nutrientArr: [
            parseFloat(nutrientArr[0].value),
            parseFloat(nutrientArr[1].value),
            parseFloat(nutrientArr[2].value),
            parseFloat(nutrientArr[3].value),
            parseFloat(nutrientArr[4].value),
            parseFloat(nutrientArr[5].value),
            parseFloat(nutrientArr[6].value),
            parseFloat(nutrientArr[7].value),
            parseFloat(nutrientArr[8].value),
            parseFloat(nutrientArr[9].value),
            parseFloat(nutrientArr[10].value),
            parseFloat(nutrientArr[11].value),
            parseFloat(nutrientArr[12].value),
            parseFloat(nutrientArr[13].value),
            parseFloat(nutrientArr[14].value),
            parseFloat(nutrientArr[15].value),
            parseFloat(nutrientArr[16].value),
            parseFloat(nutrientArr[17].value),
            parseFloat(nutrientArr[18].value),
            parseFloat(nutrientArr[19].value),
            parseFloat(nutrientArr[20].value),
            parseFloat(nutrientArr[21].value),
            parseFloat(nutrientArr[22].value),
            parseFloat(nutrientArr[23].value),
            parseFloat(nutrientArr[24].value),
            parseFloat(nutrientArr[25].value),
            parseFloat(nutrientArr[26].value),
            parseFloat(nutrientArr[27].value),
            parseFloat(nutrientArr[28].value),
            parseFloat(nutrientArr[29].value),
            parseFloat(nutrientArr[30].value),
            parseFloat(nutrientArr[31].value),
            parseFloat(nutrientArr[32].value),
            parseFloat(nutrientArr[33].value),
            parseFloat(nutrientArr[34].value),
            parseFloat(nutrientArr[35].value),
            parseFloat(nutrientArr[36].value),
            parseFloat(nutrientArr[37].value),
            parseFloat(nutrientArr[38].value),
            parseFloat(nutrientArr[39].value),
            parseFloat(nutrientArr[40].value),
            parseFloat(nutrientArr[41].value)
        ],
        ingredientsArr: ingredientsArr.value.split(", ")
    }
    itemObj[propName] = item;
    console.log(itemObj);

    //save object to localStorage
    //TODO: change to Postgresql database
    localStorage.setItem('item', JSON.stringify(itemObj));

    //clear form
    nutrientsForm.reset();
}

//WIPES ALL EXISTING LOCAL STORAGE, DO NOT USE UNLESS YOU ARE SURE!!
const clearStorage = (e) => {
    e.preventDefault();
    window.localStorage.clear();
}

//button listeners
submitBtn.addEventListener("click", appendValues)
submitBtn.addEventListener("keydown", (e) => {
    e.preventDefault();
    if(e.code === "Enter" || e.code === "NumpadEnter") {
        appendValues();
    }
})

clearBtn.addEventListener("click", clearStorage);