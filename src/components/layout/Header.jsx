import brandImage from "../../assets/logos/brand.png";
import LogoIcons from "../icons/LogoIcons";
import HeaderActions from "../ui/HeaderActions";
import Navbar from "../ui/Navbar";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { Link } from "react-router";
import toast from "react-hot-toast";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { logout } = useAuth();

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleLogout = () => {
    logout();
    setIsDropDownOpen(false);
    toast.success("Logged out successfully.");
  };
  return (
    <div className="relative flex justify-between items-center p-10">
      <LogoIcons />
      <Navbar />
      <HeaderActions onProfileClick={toggleDropDown} />
      <HamburgerMenu />
      {isDropDownOpen && (
        <div className="absolute right-0 top-20 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
          <Link
            to={"#"}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            My Profile
          </Link>
          <Link
            to={"#"}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Orders
          </Link>
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
