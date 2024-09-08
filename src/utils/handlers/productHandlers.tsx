export async function fetchProducts(
  page: number = 1,
  limit: number = 10,
  filters: { brand?: string; model?: string } = {}
) {
  try {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...filters,
    });

    const response = await fetch(`/api/electronics?${queryParams.toString()}`);
    const data = await response.json();
    if (data.success) {
      return data.result.data;
    } else {
      console.error("Failed to fetch products:", data.error);
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export const AddToCartHandler = (product: Product) => {
  const cart = JSON.parse(localStorage.getItem("Cart") || "[]");
  cart.push(product);
  localStorage.setItem("Cart", JSON.stringify(cart));
};
