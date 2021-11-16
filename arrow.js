let products = [
    { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 }
];

function printProducts(products) {
    for (let i = 0; i < products.length; i++) {
        document.write("Name: " + products[i].name +
            ", Calories: " + products[i].calories +
            ", Color: " + products[i].color +
            ", Sold: " + products[i].sold + "</br>");
    }
}

let compareSold = (colaA, colaB) => {
    colaA.sold > colaB.sold ? 1 : colaA.sold === colaB.sold ? 0 : -1;
};

let compareName = (colaA, colaB) => {
    colaA.name > colaB.name ? 1 : colaA.name === colaB.name ? 0 : -1;
}

let compareColor = (colaA, colaB) => {
    colaA.color > colaB.color ? 1 : colaA.color === colaB.color ? 0 : -1;
}

let compareCalories = (colaA, colaB) => {
    colaA.calories > colaB.calories ? 1 : colaA.calories === colaB.calories ? 0 : -1;
}

products.sort(compareSold, compareName, compareColor, compareCalories);
printProducts(products);