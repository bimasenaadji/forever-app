import { useContext, createContext, useState, useEffect } from "react";
import { loginUser as apiLogin } from "../services/auth.service";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // Untuk loading login
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    try {
      const data = await apiLogin(email, password); // Panggil API login

      // Simpan "tiket" di dua tempat:
      localStorage.setItem("authToken", data.token); // 1. Di localStorage (agar tidak hilang saat refresh)
      setToken(data.token); // 2. Di state (agar UI langsung update)

      // (Opsional) Simpan data user jika ada
      // setUser(data.user);

      setLoading(false);
      toast.success("Login successful!"); // <-- TAMBAHKAN TOAST SUKSES DI SINI
      navigate("/"); // Arahkan ke Halaman Home setelah login
    } catch (error) {
      setLoading(false);
      throw error; // Lempar error agar LoginPage bisa menangkapnya
    }
  };

  // 4. Buat fungsi LOGOUT
  const logout = () => {
    localStorage.removeItem("authToken"); // Hapus "tiket"
    setToken(null);
    setUser(null);
    navigate("/login"); // Arahkan ke Halaman Login
  };

  // 5. Kirim "nilai" (status & fungsi) ke semua anak
  const value = {
    token,
    isLoggedIn: !!token, // Boolean (true jika ada token, false jika null)
    user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
