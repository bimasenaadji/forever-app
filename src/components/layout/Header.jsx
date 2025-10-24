import brandImage from "../../assets/logos/brand.png";
import LogoIcons from "../icons/LogoIcons";
import HeaderActions from "../ui/HeaderActions";
import Navbar from "../ui/Navbar";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { Link } from "react-router";
import toast from "react-hot-toast";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useAuth();

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = () => {
    logout();
    setIsDropDownOpen(false);
    toast.success("Logged out successfully.");
  };
  return (
    <div className="p-6 sm:p-10 relative flex justify-between items-center ">
      <LogoIcons />
      <Navbar className={"hidden"} />
      <HeaderActions onProfileClick={toggleDropDown} />
      <HamburgerMenu onClick={toggleMobileMenu} />
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
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
};

export default Header;
