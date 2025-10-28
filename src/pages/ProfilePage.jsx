// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import {
  getUserProfile as apiGetUserProfile,
  updateUserProfile as apiUpdateUserProfile,
  updateUserAvatar as apiUpdateAvatar,
  changePassword as apiChangePassword,
} from "../../services/user.service";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(true);

  // State untuk form yang terkontrol
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // 1. Ambil data profil saat halaman dimuat
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await apiGetUserProfile();
        setUser(profileData); // (Lebih baik update context global)
        setName(profileData.name);
        setEmail(profileData.email);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  // 2. Handler untuk update info teks (nama/email)
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await apiUpdateUserProfile({ name, email });
      setUser(updatedUser); // Update context
      toast.success("Profil berhasil diupdate!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const uploadToast = toast.loading("Mengupload foto...");

    try {
      const updatedUser = await apiUpdateAvatar(file);

      setUser(updatedUser);
      toast.success("Foto profil berhasil diupdate!", { id: uploadToast });
    } catch (error) {
      toast.error(error.message, { id: uploadToast });
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      await apiChangePassword(oldPassword, newPassword);
      toast.success("Password berhasil diubah!");
      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading) return <div>Loading profile...</div>;

  return (
    <div className="p-10 max-w-4xl mx-auto space-y-10">
      <div className="text-center">
        <img
          src={user.avatarUrl}
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-5"
        />

        <label
          htmlFor="avatar-upload"
          className="bg-black text-white p-2  cursor-pointer hover:opacity-70 transition-colors"
        >
          Update Foto
        </label>

        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <form onSubmit={handleProfileUpdate} className="space-y-4">
        <div>
          <label className="font-semibold text-product">Nama :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full border-desc"
          />
        </div>
        <div>
          <label className="font-semibold text-product">Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full border-desc"
          />
        </div>
        <button type="submit" className="bg-black text-white p-2 border-desc">
          Simpan Perubahan Profil
        </button>
      </form>

      {/* Form Ganti Password */}
      <form onSubmit={handleChangePassword} className="space-y-4">
        <div>
          <label className="font-semibold text-product">Password Lama :</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="border p-2 w-full border-desc"
          />
        </div>
        <div>
          <label className="font-semibold text-product">Password Baru :</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border p-2 w-full border-desc"
          />
        </div>
        <button type="submit" className="bg-black  text-white p-2">
          Ganti Password
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
