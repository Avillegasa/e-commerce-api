// 1. Defining Types
/*
- We define a product bringing him a form, that's why we use type aliases
- We know that a store product has some properties like: id, name, price, category and if it is available or not
- ⚠️ We want Category to just accept some specific values, like: "electronics", "clothing", "food", "cleaning", "gaming"
*/

//Defining CategoryType
type CategoryType = "electronics" | "clothing" | "food" | "cleaning" | "gaming"

type Product = {
    id: number
    name: string
    price: number
    category: CategoryType
    inStock: boolean
    quantityp: number
}
// Defining CarItem
// Which gives us access as clients to take products and the quantity of each product, and we also make use of type Product
type CarItem = {
    product: Product
    quantity: number
}

// 2. Creating Product Arrays
/* 
- We need data to work on (usually should be on a db, but we will use arrays for this practice)
*/

const products: Product[] = [
    {id: 1, name: "Iphone XS", price: 300, category: "electronics", inStock: true, quantityp: 2, },
    {id: 2, name: "ZARA T-Shirt", price: 17.99, category: "clothing", inStock: true, quantityp: 3, },
    {id: 3, name: "Fingers & Wings", price: 8.99, category: "food", inStock: false, quantityp: 0, },
    {id: 4, name: "Bleach", price: 7, category: "cleaning", inStock: true, quantityp: 1000, },
    {id: 5, name: "Doom Eternal Legacy Edition", price: 50, category: "gaming", inStock: true, quantityp: 30},
    {id: 6, name: "Logitech g502 Hero", price: 150, category: "electronics", inStock: false, quantityp: 0}
]


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

const productsList = (products: Product[], category: CategoryType) => products.filter((product) => product.category === category)

console.log(productsList(products, "food"))

// Search by name
const searchList = (products: Product [], search: string) => {
    const searched = products.find( (product) => product.name.includes(search) )
    if (searched != undefined){
        return searched
    } else{
        return "No contamos con el item: " + "'"+ search + "'"
    }
}

console.log (searchList(products, "Eternal")) // It's case sensitive, so "eternal" returns false
console.log (searchList(products, "pilin"));

// Obtaining only names using .map() 

const getProductnames = (products: Product[]) => products.map((product) => product.name)

console.log(getProductnames(products))

// Obtaining available products

const availableProducts = (product: Product) => {
    if (!product.inStock){
        return 0;
    }
    return product.quantityp
} 

const cartItems = [] as CarItem[]

// Third Phase: Market car
const addToCart = (product: Product, quantity:number) =>{
    const quantityInStock = availableProducts(product)
    if (quantityInStock >= quantity ){
        cartItems.push({product, quantity})
        console.log("Se agregó un item al carro!")
        // updating product and cartItems
        return cartItems
    }
    else {
        console.log("No existe stock del producto seleccionado")
        return cartItems
    }
}
addToCart(products[0], 1)
addToCart(products[1], 1)
console.log(cartItems)


// Calculating total 
// Here car receives a total of items and the total price of all of them. (Following: price * quantity)


console.log("Calcular total")
const calcularTotal = ( Items:CarItem[]):number  => {
    return Items.reduce((acc, item) => 
    (item.quantity * item.product.price + acc)
    ,0)
}

console.log(calcularTotal(cartItems))


