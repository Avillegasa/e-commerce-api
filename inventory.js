// 1. Defining Types
/*
- We define a product bringing him a form, that's why we use type aliases
- We know that a store product has some properties like: id, name, price, category and if it is available or not
- ⚠️ We want Category to just accept some specific values, like: "electronics", "clothing", "food", "cleaning", "gaming"
*/
// 2. Creating Product Arrays
/*
- We need data to work on (usually should be on a db, but we will use arrays for this practice)
*/
var products = [
    { id: 1, name: "Iphone XS", price: 300, category: "electronics", inStock: true },
    { id: 2, name: "ZARA T-Shirt", price: 17.99, category: "clothing", inStock: true },
    { id: 3, name: "Fingers & Wings", price: 8.99, category: "food", inStock: false },
    { id: 4, name: "Bleach", price: 7, category: "cleaning", inStock: true },
    { id: 5, name: "Doom Eternal Legacy Edition", price: 50, category: "gaming", inStock: true },
    { id: 6, name: "Logitech g502 Hero", price: 150, category: "electronics", inStock: false }
];
// Query functions
/*
- By idea is to bring an array of products and a category and returns just the products of that category.
- === is for comparation

function request (products: Product[], category :"electronics" | "clothing" | "food" | "cleaning" | "gaming") {
    const result = products.filter((product) => product.category === cateogry )
    return result
}

- Below i tried to simplify it by creating a new alias and i think it works lol
*/
function request(products, category) {
    var result = products.filter(function (product) { return product.category === category; });
    return result;
}
console.log(request(products, "food"));
