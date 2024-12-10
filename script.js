// Product Array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

// Populate Product Name options
const productSelect = document.getElementById("product");
products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.id; // Use the product ID as the value
  option.textContent = `${product.name} (Rating: ${product.averagerating})`; // Display name with average rating
  productSelect.appendChild(option);
});
