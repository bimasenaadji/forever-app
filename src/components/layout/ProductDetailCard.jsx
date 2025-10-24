import { useState } from "react";
import RatingStar from "../ui/RatingStar";
import { useCart } from "../../../context/cartContext";
import toast from "react-hot-toast";
import { formatRupiah } from "../../../utils/formatCurrency";

const ProductDetailCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const { addToCart } = useCart();
  const handleAddToCart = async () => {
    if (!selectedSize) {
      toast.error("Please select a size first.");
      return;
    }

    const itemToAdd = {
      productId: product._id,
      quantity: 1,
      size: selectedSize,
    };

    try {
      await addToCart(itemToAdd);
      console.log(itemToAdd);
      toast.success(`Added ${product.name} to cart!`);
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error(error.message);
    }
  };

  return (
    <article>
      <div className=" grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-2 gap-y-5">
        <Header product={product} />
        <main>
          <Body
            product={product}
            onAddToCart={handleAddToCart}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <Footer />
        </main>
      </div>
    </article>
  );
};

const Header = ({ product }) => {
  return (
    <div className="w-full sm:max-w-md mx-auto ">
      <img className="w-full" src={product.imageUrl} alt="Product Image" />
    </div>
  );
};

const Body = ({ product, onAddToCart, setSelectedSize, selectedSize }) => {
  return (
    <div>
      <h2 className="font-medium text-[34px]">{product.name}</h2>
      <div className="flex gap-x-2  items-center flex-wrap">
        <RatingStar rating={product.rating} />
        <p className="text-base font-normal">({product.numReviews})</p>
      </div>
      <p className="font-medium text-[32px] my-3">
        {formatRupiah(product.price)}
      </p>
      <p className="font-normal text-desc text-base my-3">
        {product.description}
      </p>
      <p className="text-size font-semibold text-xl my-2 ">Select Size</p>
      <div className="text-sm sm:text-base font-normal flex gap-x-[16px] flex-wrap gap-y-5">
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`p-4 sm:p-5 border border-border-input cursor-pointer ${
              selectedSize === size ? "bg-black text-white" : ""
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      <button
        onClick={onAddToCart}
        className="uppercase py-5 sm:px-28 lg:py-6 font-semibold text-base bg-black text-white my-5 w-full"
      >
        Add To Cart
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="border-t border-borders"></div>
      <div className="flex flex-col font-normal text-base text-detail-product">
        <p>100% Original product.</p>
        <p>Cash on delivery is available on this product.</p>
        <p>Easy return and exchange policy within 7 days.</p>
      </div>
    </div>
  );
};

export default ProductDetailCard;
