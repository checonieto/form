// Product Array
const products = [
    { id: "prod1", name: "Product 1" },
    { id: "prod2", name: "Product 2" },
    { id: "prod3", name: "Product 3" },
    { id: "prod4", name: "Product 4" },
];

// Populate Product Name options
const productSelect = document.getElementById("product");
products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
