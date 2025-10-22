export const fetchAllProducts = async (params = {}) => {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/products?${query}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/products/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
