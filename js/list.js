const itemList = document.getElementById('item-list');

const itemObj = JSON.parse(localStorage.getItem('item'));

const appendList = async () => {
    for (const item in itemObj) {
        let itemName = item;
        let itemPortion = itemObj[item]['portion'];
        let itemUnits = itemObj[item]['units'];
        let itemRecipe = itemObj[item]['recipeNumber'];
        let row = document.createElement('tr');
        row.className = "item";
        row.innerHTML = `
            <td class="item-name">${itemName}</td>
            <td class="portion">${itemPortion}</td>
            <td class="uom">${itemUnits}</td>
            <td class="recipe">${itemRecipe}</td>
        `;
        itemList.appendChild(row);
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    let rows, switching, shouldSwitch;
    switching = true;
    let i;
    while (switching) {
        switching = false;
        rows = itemList.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            let x = rows[i].getElementsByTagName('td')[0];
            let y = rows[i + 1].getElementsByTagName('td')[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
};

document.addEventListener("DOMContentLoaded", appendList);