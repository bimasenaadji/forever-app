import { getAuthToken } from "./cart.service";

export const getOrder = async () => {
  const token = getAuthToken();

  if (!token) {
    throw new Error("Kamu belum login");
  }

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/orders`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch orders");
    }
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const createOrder = async (orderDate) => {
  const token = getAuthToken();

  if (!token) {
    throw new Error("Kamu belum login");
  }
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/orders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderDate),
      }
    );

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Failed to create order");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
