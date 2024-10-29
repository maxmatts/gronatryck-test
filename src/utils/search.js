import products from "../data/product";

function searchProducts(query) {
  const lowerCaseQuery = query.toLowerCase();

  if (query === "") {
    return [];
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.category.toLowerCase().includes(lowerCaseQuery)
  );

  return filteredProducts;
}

export default searchProducts;
