const products = [
    { name: "Mouse", price: 1200 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 9000 },
    { name: "Speaker", price: 850 }
];

const expensiveProducts =
    products.filter(product => product.price > 1000);

console.log(expensiveProducts);