import { toast } from "react-toastify";
import { addItem, removeItems } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success(`One item "${item.title}" added from cart!`);
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItems(item));
    toast.success(`One item of "${item.title}" removed from cart!`);
  };

  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-wrap md:flex-nowrap mb-2 border-b-2 border-gray-400 text-left"
        >
          <div className="w-full md:w-9/12 flex flex-col md:flex-row md:justify-between">
            <img
              src={item.image}
              alt="item"
              className="w-12 h-12 mx-4 md:mx-0"
            />
            <div className="py-2 flex flex-col md:flex-row md:items-center">
              <span className="font-bold">{item.title} </span>
              <span>₹{item.price} </span>
            </div>
            {/* <p className="text-xs">{item.description}</p> */}
          </div>

          <div className="w-full md:w-3/12 p-4 flex flex-col md:flex-row md:justify-end">
            <div className="">
              <button
                className="px-2 py-1 rounded-full  bg-red-500 w-9 text-white "
                onClick={() => handleRemoveItem(item)}
              >
                -
              </button>
              <span className="p-2">{getItemQuantity(item.id)}</span>
              <button
                className="px-2 py-1 rounded-full mt-0 bg-black w-9 text-white "
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
