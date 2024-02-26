const myArray = ["apple", "banana", "cherry", "grape"];

// 1. Using forEach with an array
myArray.forEach(item => {
    console.log(item);
})

const products = [
    {
        title: "Product 1",
        description: "Description of product 1",
        image: "https://via.placeholder.com/200/150",
        price: 19.99,
        category: "Electronics",
        onSale: false,
    },
    {
        title: "Product 2",
        description: "Description of product 2",
        image: "https://via.placeholder.com/200/150",
        price: 29.99,
        category: "Food",
        onSale: false,
    },
    {
        title: "Product 3",
        description: "Description of product 3",
        image: "https://via.placeholder.com/200/150",
        price: 39.99,
        category: "Shoes",
        onSale: false,
    }
];

products.forEach(product => {
    console.log(product)
});

const filtered = products.filter(product => product.category === "Electronics");
console.log(filteredProducts);

const createCard = product => {
    return `
        <div class="card">
            <h4>${product.title}</h4>
            <p>${product.description}</p>
            <img src="${product.image}" alt="${product.title}">
            <p>${product.price}</p>
        </div>
        `;
}

products.forEach(product => {
    console.log(createCard(product));
});