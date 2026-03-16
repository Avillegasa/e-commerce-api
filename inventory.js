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
    { id: 1, name: "Iphone XS", price: 300, category: "electronics", inStock: true, quantity: 2, },
    { id: 2, name: "ZARA T-Shirt", price: 17.99, category: "clothing", inStock: true, quantity: 3, },
    { id: 3, name: "Fingers & Wings", price: 8.99, category: "food", inStock: false, quantity: 0, },
    { id: 4, name: "Bleach", price: 7, category: "cleaning", inStock: true, quantity: 1000, },
    { id: 5, name: "Doom Eternal Legacy Edition", price: 50, category: "gaming", inStock: true, quantity: 30 },
    { id: 6, name: "Logitech g502 Hero", price: 150, category: "electronics", inStock: false, quantity: 0 }
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
var productsList = function (products, category) { return products.filter(function (product) { return product.category === category; }); };
console.log(productsList(products, "food"));
// Search by name
var searchList = function (products, search) {
    var searched = products.find(function (product) { return product.name.includes(search); });
    if (searched != undefined) {
        return searched;
    }
    else {
        return "No contamos con el item: " + "'" + search + "'";
    }
};
console.log(searchList(products, "Eternal")); // It's case sensitive, so "eternal" returns false
console.log(searchList(products, "pilin"));
// Obtaining only names using .map() 
var getProductnames = function (products) { return products.map(function (product) { return product.name; }); };
console.log(getProductnames(products));
// Obtaining available products
var availableProducts = function (product) {
    if (!product.inStock) {
        return 0;
    }
    return product.quantity;
};
var cartItems = [];
// Third Phase: Market car
var addToCart = function (product, quantity) {
    var quantityInStock = availableProducts(product);
    if (quantityInStock >= quantity) {
        cartItems.push({ product: product, quantity: quantity });
        console.log("Se agregó un item al carro!");
        // updating product and cartItems
        return cartItems;
    }
    else {
        console.log("No existe stock del producto seleccionado");
        return cartItems;
    }
};
addToCart(products[1], 1);
console.log(cartItems);
