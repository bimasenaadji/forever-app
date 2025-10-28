import { getAuthToken } from "./cart.service";

export const getUserProfile = async () => {
  const authToken = getAuthToken();
  if (!authToken) {
    throw new Error("Kamu belum login");
  }

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/users/profile`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch user profile");
    }
    return data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

export const updateUserProfile = async (profileData) => {
  const authToken = getAuthToken();
  if (!authToken) {
    throw new Error("Kamu belum login");
  }
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/users/profile`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(profileData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update user profile");
    }
    return data;
  } catch (error) {
    console.error("Error updating user profile:", error);
  }
};

export const updateUserAvatar = async (avatarFile) => {
  const authToken = getAuthToken();
  if (!authToken) {
    throw new Error("Kamu belum login");
  }

  try {
    const formData = new FormData();
    formData.append("avatar", avatarFile);

    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/users/profile-picture`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update user profile");
    }
    return data;
  } catch (error) {
    console.error("Error updating user profile:", error);
  }
};

export const changePassword = async (oldPassword, newPassword) => {
  const authToken = getAuthToken();
  if (!authToken) {
    throw new Error("Kamu belum login");
  }
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/users/change-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to change password");
    }
    return data;
  } catch (error) {
    console.error("Error changing password:", error);
  }
};
