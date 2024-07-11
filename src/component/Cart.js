import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = (item) => {
    if (item) {
      dispatch(clearCart(item));
      toast.success(`All items are cleared!`);
    }
  };

  return (
    <div>
      <div className="text-center p-4 m-4">
        <ToastContainer
          className="fixed  right-0 mt-12 m-4 text-white rounded px-4 py-2"
          autoClose={2000}
          hideProgressBar={true}
          closeButton={true}
        />
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && (
            <h1 className="font-medium">
              Your cart item is empty. Add items to the cart!
            </h1>
          )}
          <ItemList items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
