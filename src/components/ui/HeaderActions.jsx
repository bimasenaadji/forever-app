import SearchIcon from "../icons/SearchIcon";
import ProfileIcon from "../icons/ProfileIcon";
import CartIcon from "../icons/CartIcon";
import { useCart } from "../../../context/cartContext";
import { useAuth } from "../../../context/authContext";
import { Link } from "react-router";

const HeaderActions = ({ onProfileClick }) => {
  const { isLoggedIn } = useAuth();

  const { cartItemsCount } = useCart();

  console.log("Header Actions Rendered:", { isLoggedIn, cartItemsCount });

  return (
    <div className="flex justify-around items-center gap-x-5">
      <SearchIcon />

      {isLoggedIn && (
        <button onClick={onProfileClick} className="cursor-pointer">
          <ProfileIcon />
        </button>
      )}
      <Link to="/cart" className="relative">
        <CartIcon />

        {isLoggedIn && cartItemsCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
            {cartItemsCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default HeaderActions;
