import { createContext, useContext, useState, useEffect } from "react";
import {
  getCart,
  addToCart as apiAddToCart,
  removeItemFromCart as apiRemoveItem,
} from "../services/cart.service";
import { getAuthToken } from "../services/cart.service";
import { useAuth } from "./authContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth(); // <-- KUNCI #2: "Dengarkan" token dari AuthContext

  const fetchCart = async () => {
    // 'token' di sini sekarang REAKTIF.
    // Jika token dari AuthContext berubah (login/logout), useEffect akan memicu ini.
    if (token) {
      try {
        setLoading(true);
        const data = await getCart();
        setCart(data);
      } catch (error) {
        console.error("Gagal fetch keranjang:", error);
        setCart(null); // Set ke null jika gagal
      } finally {
        setLoading(false);
      }
    } else {
      // Jika tidak ada token (user logout), kosongkan keranjang
      setCart(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]);

  // Fungsi untuk menambah/update item
  const addToCart = async (item) => {
    try {
      const updatedCart = await apiAddToCart(item);
      setCart(updatedCart); // Perbarui state dengan data cart terbaru
    } catch (error) {
      console.error("Gagal menambah ke keranjang:", error);
      throw error; // Lempar agar komponen bisa menangani (misal: tampilkan alert)
    }
  };

  // Fungsi untuk menghapus item
  const removeItem = async (productId) => {
    try {
      const updatedCart = await apiRemoveItem(productId);
      setCart(updatedCart); // Perbarui state
    } catch (error) {
      console.error("Gagal menghapus item:", error);
      throw error;
    }
  };
  // --- FUNGSI BARU YANG KAMU BUTUHKAN ---
  const updateQuantity = async (productId, quantity, size) => {
    try {
      // Kita panggil API yang sama karena backend-mu bisa menangani 'addOrUpdate'
      const updatedCart = await apiAddToCart({ productId, quantity, size });
      setCart(updatedCart); // <-- Kunci: Perbarui state-nya!
    } catch (error) {
      console.error("Gagal update kuantitas:", error);
      throw error;
    }
  };

  // Hitung jumlah item dari state 'cart' yang baru
  const cartItemsCount =
    cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  // Hitung total (untuk halaman keranjang)
  const subtotal =
    cart?.items?.reduce((acc, item) => {
      // Pastikan product di-populate dan punya harga
      if (item.product && item.product.price) {
        return acc + item.product.price * item.quantity;
      }
      return acc;
    }, 0) || 0;

  const shipping = subtotal > 0 ? 10000 : 0; // Contoh
  const total = subtotal + shipping;

  // Nilai yang akan dibagikan ke seluruh aplikasi
  const value = {
    cart, // Kirim seluruh objek cart
    cartItems: cart?.items || [], // Kirim array items (atau array kosong)
    cartItemsCount,
    loading,
    addToCart,
    removeItem,
    fetchCart,
    updateQuantity,
    subtotal,
    shipping,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
