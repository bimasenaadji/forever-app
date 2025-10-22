export const getAuthToken = () => {
  const AUTH_TOKEN = localStorage.getItem("authToken");
  if (AUTH_TOKEN) {
    return AUTH_TOKEN;
  }
  return null;
};

export const addToCart = async (cartItem) => {
  const authToken = getAuthToken();
  if (!authToken) {
    // Tambahkan pengecekan ini agar lebih jelas
    throw new Error("Kamu belum login");
  }
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(cartItem),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to add item to cart");
    }

    return data;
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    // LEMPAR ULANG ERRORNYA agar komponen React bisa menangkapnya
    throw error;
  }
};

export const getCart = async () => {
  const authToken = getAuthToken();
  if (!authToken) {
    throw new Error("Kamu belum login");
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch cart");
    }
    return data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

export const removeItemFromCart = async (productId) => {
  const authToken = getAuthToken();
  if (!authToken) {
    throw new Error("Kamu belum login");
  }

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/cart/${productId}`, // Gunakan method DELETE
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to remove item");
    }

    return data;
  } catch (error) {
    console.error("Error removing from cart:", error.message);
    throw error;
  }
};
