import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Slices/cartSlice";
import CartItem from "../Cart/CartItem";
import CartActions from "../Cart/CartActions";
import CartSummary from "../Cart/CartSummary";
import Proceed from "../Cart/Proceed";


export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const selectedItems = cartItems.map((item) => item.id);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  const handleProceedToCheckout = () => {
    alert("Proceeding to Checkout...");
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-6">
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Section: Cart Items */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">Shopping Cart</h2>
            <CartActions
              onSelectAll={() => {}}
              onDeselectAll={() => {}}
            />
          </div>

          {/* Cart Items */}
          <div className="bg-white shadow-md p-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemoveItem={handleRemoveItem}
                onQuantityChange={() => {}} // Implement quantity change logic in Redux if needed
                isSelected={selectedItems.includes(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Cart Summary */}
        <div className="w-full md:w-1/4 mt-6 md:mt-0 md:ml-4">
          <CartSummary
            subtotal={calculateSubtotal()}
            onProceedToCheckout={handleProceedToCheckout}
          />
        </div>
      </div>

      {/* Proceed Component at the Bottom */}
      <div className="mt-auto">
        <Proceed
          subtotal={calculateSubtotal()}
          onProceedToCheckout={handleProceedToCheckout}
        />
      </div>
    </div>
  );
}
