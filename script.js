document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-cards");

    // Fetch product data from the Fake Store API
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((products) => {
            products.forEach((product) => {
                // Create a card for each product
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p class="price">$${product.price}</p>
                `;

                productContainer.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
            productContainer.innerHTML = "<p>Failed to load products.</p>";
        });
});
