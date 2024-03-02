//test comment

const calculator= document.getElementById('calculator');
const inputs = document.getElementById('inputs')
const submitBtn = document.getElementById('submit-btn');
const calculateBtn = document.getElementById('calculate-btn');
const results = document.getElementById('results');
const inputName = document.getElementById('new-name');
const inputPortion = document.getElementById('new-portion');
const inputUOM = document.getElementById('units')
const nutrientNames = ["Calories", "Protein", "Carbohydrate", "Total Fat", "Saturated Fat", "Polyunsaturated Fat", "Trans Fat", "Cholesterol", "Sodium", "Potassium", "Phosphorus", "Calcium", "Iron", "Total Fiber", "Sugar", "Fluid", "Vitamin A", "Vitamin C", "Vitamin B1", "Vitamin B2", "Niacin", "Vitamin B6", "Magnesium", "Zinc", "Copper", "Vitamin E", "Pantothenic Acid", "Vitamin B12", "Folate", "Vitamin K", "Selenium", "Vitamin D", "Iodine", " Chloride", "Biotin", "Fluoride", "Choline", "Linoleic Acid", "Manganese", "Molybdenum", "Chromium", "Carb Cnt"];

// const itemObj = JSON.parse(localStorage.getItem('item'));
const itemObj = "./assets/items.JSON"
fetch(itemObj)
    .then(x => JSON.parse(x.text))
    .then
let itemNames;
const resultArray = [];
let newIngredientArray = [];

const addInputs = () => {
    calculator.innerHTML = ""
    let count = document.getElementById('count').value
    for (let i = 0; i < count; i++) {
        const select = document.createElement('select')
        for (const key in itemObj) {
            if (itemObj.hasOwnProperty(key)) {
                const option = document.createElement('option');
                option.value = key;
                option.text = key;
                select.prepend(option)
            }
        }
        const selected = document.createElement('option');
        selected.value = "--Select--";
        selected.text = "--Select--";
        selected.setAttribute('selected', true);
        select.prepend(selected)
        select.classList += "ingredient"
        inputs.appendChild(select);
    }
    itemNames = document.getElementsByClassName('ingredient');
}

const calculate = () => {
    const selectedItems = Array.from(itemNames).map((select) => select.value);
    if (selectedItems.indexOf('--Select--') !== -1) {
        alert("Please select an ingredient in each input or reduce the Number of ingredients")
        return 1;
    } else {
        const arrays = selectedItems.map((itemName) => itemObj[itemName]['nutrientArr']);
        const ingredientArray = selectedItems.map((itemName) => itemObj[itemName]['ingredientsArr'])
        for (let i = 0; i < arrays[0].length; i++) {
            resultArray[i] = arrays.reduce((sum, arr) => sum + arr[i], 0)
        }
        for (let i = 0; i < ingredientArray.length; i++) {
            newIngredientArray = newIngredientArray.concat(ingredientArray[i])
        }
        const ingredientsSet = new Set(newIngredientArray);
        const uniqueArr = [...ingredientsSet]
        console.log(ingredientsSet);
        const ingredientsStr = uniqueArr.join(', ')
        console.log(resultArray);
        results.innerHTML += `
        <h4>${inputName.value}</h4>
        <p>Portion Size: ${inputPortion.value} ${inputUOM.value}</p>
        `
        for (let i = 0; i < nutrientNames.length; i++) {
            let currNutrient = nutrientNames[i];
            let currValue = resultArray[i];
            results.innerHTML += `<p>${currNutrient}: ${currValue}`
        }
        results.innerHTML += `Ingredients: ${ingredientsStr}`
    }
    
}

submitBtn.addEventListener('click', addInputs)
calculateBtn.addEventListener('click', calculate)
